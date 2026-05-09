"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// Palette mirrors parking_cv BrightonLot3D so the marketing scene reads as the same product.
const COLORS = {
  available: 0x2563eb,
  availableFill: 0xdbeafe,
  occupied: 0xf87171,
  occupiedFill: 0xffe4e6,
  selected: 0x1d4ed8,
  selectedFill: 0xbfdbfe,
};

const STALL_W = 1.55;
const STALL_D = 3.1;
const GAP = 0.08;
const AISLE = 1.6;

// 0 = open, 1 = occupied, 2 = selected
const ROW_A = [1, 0, 1, 0, 1, 0, 1] as const;
const ROW_B = [0, 1, 0, 2, 0, 1, 0] as const;

type StallState = "open" | "occupied" | "selected";

const stateOf = (n: 0 | 1 | 2): StallState =>
  n === 0 ? "open" : n === 1 ? "occupied" : "selected";

export function Lot3DMini() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    let raf = 0;
    let disposed = false;

    const initialW = Math.max(1, el.clientWidth);
    const initialH = Math.max(1, el.clientHeight);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(38, initialW / initialH, 0.1, 100);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(initialW, initialH);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    // Lighting matches parking_cv tone for visual continuity
    scene.add(new THREE.AmbientLight(0xeef6ff, 1.1));
    const sun = new THREE.DirectionalLight(0xffffff, 1.05);
    sun.position.set(8, 16, 8);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.near = 0.5;
    sun.shadow.camera.far = 60;
    sun.shadow.camera.left = -16;
    sun.shadow.camera.right = 16;
    sun.shadow.camera.top = 16;
    sun.shadow.camera.bottom = -16;
    scene.add(sun);
    const fill = new THREE.DirectionalLight(0xbdd7ff, 0.5);
    fill.position.set(-10, 8, -8);
    scene.add(fill);

    // Asphalt ground
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(36, 24),
      new THREE.MeshStandardMaterial({ color: 0xeaf0f7, roughness: 0.95 }),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Stalls
    const lotGroup = new THREE.Group();
    const cols = ROW_A.length;
    const totalWidth = cols * STALL_W + (cols - 1) * GAP;
    const startX = -totalWidth / 2 + STALL_W / 2;

    type CarSpec = {
      x: number;
      z: number;
      state: "occupied" | "selected";
      yaw: number;
    };
    const carSpecs: CarSpec[] = [];

    const placeStall = (x: number, z: number, state: StallState, yaw: number) => {
      const fillColor =
        state === "selected"
          ? COLORS.selectedFill
          : state === "occupied"
            ? COLORS.occupiedFill
            : COLORS.availableFill;
      const edgeColor =
        state === "selected"
          ? COLORS.selected
          : state === "occupied"
            ? COLORS.occupied
            : COLORS.available;

      const tile = new THREE.Mesh(
        new THREE.PlaneGeometry(STALL_W, STALL_D),
        new THREE.MeshStandardMaterial({ color: fillColor, roughness: 0.95 }),
      );
      tile.rotation.x = -Math.PI / 2;
      tile.position.set(x, 0.01, z);
      tile.receiveShadow = true;
      lotGroup.add(tile);

      const edges = new THREE.EdgesGeometry(
        new THREE.PlaneGeometry(STALL_W, STALL_D),
      );
      const line = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: edgeColor }),
      );
      line.rotation.x = -Math.PI / 2;
      line.position.set(x, 0.02, z);
      lotGroup.add(line);

      if (state === "selected") {
        // Floor-level blue glow halo — never intersects the car body.
        const halo = new THREE.Mesh(
          new THREE.PlaneGeometry(STALL_W * 1.5, STALL_D * 1.15),
          new THREE.MeshBasicMaterial({
            color: COLORS.selected,
            transparent: true,
            opacity: 0.22,
            depthWrite: false,
          }),
        );
        halo.rotation.x = -Math.PI / 2;
        halo.position.set(x, 0.008, z);
        lotGroup.add(halo);

        // Slightly thicker stall outline on top of the standard edges,
        // to keep the selected stall distinctly readable.
        const accent = new THREE.LineSegments(
          new THREE.EdgesGeometry(
            new THREE.PlaneGeometry(STALL_W * 1.04, STALL_D * 1.04),
          ),
          new THREE.LineBasicMaterial({ color: COLORS.selected }),
        );
        accent.rotation.x = -Math.PI / 2;
        accent.position.set(x, 0.024, z);
        lotGroup.add(accent);
      }

      if (state !== "open") {
        carSpecs.push({ x, z, state, yaw });
      }
    };

    const rowAZ = -(STALL_D + AISLE) / 2;
    const rowBZ = (STALL_D + AISLE) / 2;

    ROW_A.forEach((s, i) => {
      placeStall(startX + i * (STALL_W + GAP), rowAZ, stateOf(s), 0);
    });
    ROW_B.forEach((s, i) => {
      placeStall(startX + i * (STALL_W + GAP), rowBZ, stateOf(s), Math.PI);
    });

    // Aisle markings
    const aisle = new THREE.Mesh(
      new THREE.PlaneGeometry(totalWidth + 1, AISLE),
      new THREE.MeshStandardMaterial({ color: 0xdfe6ee, roughness: 0.9 }),
    );
    aisle.rotation.x = -Math.PI / 2;
    aisle.position.set(0, 0.005, 0);
    aisle.receiveShadow = true;
    lotGroup.add(aisle);

    scene.add(lotGroup);

    // Camera path — framed slightly toward the selected stall (row B / center)
    // so the cars read as the focal subject, not the full lot.
    const target = new THREE.Vector3(0, 0.4, 0.6);
    const radius = 8.4;
    const phi = 1.02;
    let theta = 0.62;
    const setCamera = (t: number) => {
      camera.position.set(
        radius * Math.cos(t) * Math.sin(phi),
        radius * Math.cos(phi) + 3.4,
        radius * Math.sin(t) * Math.sin(phi),
      );
      camera.lookAt(target);
    };
    setCamera(theta);

    // Restrained premium palette for the GLB body paint.
    // No vivid/toy colors. The selected car uses muted navy.
    const PAINTS = [
      0xeef0f3, // pearl white
      0xc7ccd1, // silver
      0x8a929b, // light slate
      0x5a6371, // slate gray
      0x3f4750, // charcoal
      0x9ba3ac, // pale silver
      0x4b5563, // dark slate
      0x2f4a6b, // muted brand-adjacent blue
    ];
    const SELECTED_PAINT = 0x223b59; // deeper muted navy

    // Load cars
    const loader = new GLTFLoader();
    loader.load(
      "/models/cars/Car.glb",
      (gltf) => {
        if (disposed) return;
        const proto = gltf.scene;

        // Bounding box in proto-local space (proto is at identity transform)
        const box = new THREE.Box3().setFromObject(proto);
        const size = new THREE.Vector3();
        box.getSize(size);
        const center = new THREE.Vector3();
        box.getCenter(center);

        const targetLen = STALL_D * 0.88;
        const scale = targetLen / Math.max(size.z, size.x);

        // Identify the painted body mesh as the one with the largest
        // bounding-box volume — windows/wheels/lights are smaller submeshes.
        let bodyMeshName: string | null = null;
        let largestVolume = 0;
        proto.traverse((c) => {
          if (c instanceof THREE.Mesh) {
            const meshBox = new THREE.Box3().setFromObject(c);
            const meshSize = new THREE.Vector3();
            meshBox.getSize(meshSize);
            const vol = meshSize.x * meshSize.y * meshSize.z;
            if (vol > largestVolume) {
              largestVolume = vol;
              bodyMeshName = c.name;
            }
          }
        });

        const baseClone = (paintHex: number, isSelected: boolean) => {
          const car = proto.clone(true);
          car.scale.setScalar(scale);
          // Center on X/Z; lift on Y so the lowest point (wheels) sits at y=0.
          car.position.set(
            -center.x * scale,
            -box.min.y * scale,
            -center.z * scale,
          );
          car.traverse((c) => {
            if (c instanceof THREE.Mesh) {
              c.castShadow = true;
              c.receiveShadow = true;
              if (c.material instanceof THREE.MeshStandardMaterial) {
                const cloned = c.material.clone();
                if (bodyMeshName !== null && c.name === bodyMeshName) {
                  cloned.color.setHex(paintHex);
                  cloned.metalness = isSelected ? 0.5 : 0.35;
                  cloned.roughness = isSelected ? 0.42 : 0.55;
                }
                c.material = cloned;
              }
            }
          });
          return car;
        };

        // Soft contact shadow disc — anchors the car visually even before
        // the directional shadow map resolves.
        const shadowGeom = new THREE.CircleGeometry(STALL_W * 0.5, 24);
        const shadowMat = new THREE.MeshBasicMaterial({
          color: 0x000000,
          transparent: true,
          opacity: 0.18,
          depthWrite: false,
        });

        carSpecs.forEach((spec, idx) => {
          const isSelected = spec.state === "selected";
          const paint = isSelected
            ? SELECTED_PAINT
            : PAINTS[(idx * 3 + 1) % PAINTS.length];
          const car = baseClone(paint, isSelected);

          const wrap = new THREE.Group();
          // Contact shadow first so it sits beneath the car
          const shadow = new THREE.Mesh(shadowGeom, shadowMat);
          shadow.rotation.x = -Math.PI / 2;
          shadow.position.set(0, 0.025, 0);
          shadow.scale.set(1.2, 1, 0.9);
          wrap.add(shadow);

          wrap.add(car);
          // y=0.022 keeps wheels just above the painted stall tile (y=0.01)
          // and edge lines (y=0.02) — no clipping, no float.
          wrap.position.set(spec.x, 0.022, spec.z);
          wrap.rotation.y = spec.yaw;

          lotGroup.add(wrap);
        });
      },
      undefined,
      (err) => {
        // Non-fatal: scene still shows stalls without cars.
        console.warn("[lot-3d-mini] Car.glb load failed:", err);
      },
    );

    const render = () => {
      if (disposed) return;
      raf = requestAnimationFrame(render);
      theta += 0.0015;
      setCamera(theta);
      renderer.render(scene, camera);
    };
    render();

    const ro = new ResizeObserver(() => {
      const w = Math.max(1, el.clientWidth);
      const h = Math.max(1, el.clientHeight);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
    ro.observe(el);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      if (renderer.domElement.parentNode === el) {
        el.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          const m = obj.material;
          if (Array.isArray(m)) m.forEach((mm) => mm.dispose());
          else m.dispose();
        }
        if (obj instanceof THREE.LineSegments) {
          obj.geometry.dispose();
          const m = obj.material;
          if (Array.isArray(m)) m.forEach((mm) => mm.dispose());
          else (m as THREE.Material).dispose();
        }
      });
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 h-full w-full" />;
}
