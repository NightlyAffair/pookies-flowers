"use client";

import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, useProgress, Html } from "@react-three/drei";
import * as THREE from "three";

const MODEL_PATH = "/3d/rose-3d/source/rose%203d.glb";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div
        className="text-[#F5EDE0] text-lg"
        style={{ fontFamily: "'Caveat', cursive" }}
      >
        Loading... {progress.toFixed(0)}%
      </div>
    </Html>
  );
}

function CameraRig({ center, size }: { center: THREE.Vector3; size: number }) {
  const { camera } = useThree();
  const currentPos = useRef(new THREE.Vector3());
  const currentLook = useRef(new THREE.Vector3());
  const initialized = useRef(false);

  useFrame(() => {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    const progress = Math.min(scrollY / vh, 1);

    // Start: extremely close, rose fills entire viewport
    // End: pulled far back, rose becomes background element
    const budY = center.y + size * 0.35;

    const startPos = new THREE.Vector3(
      center.x + size * 0.05,  // nearly centered
      budY - size * 0.1,       // shifted down
      center.z + size * 0.26   // zoomed out 30%
    );
    const endPos = new THREE.Vector3(
      center.x,
      center.y - size * 0.05,  // shifted down
      center.z + size * 1.8    // far back
    );

    const startLook = new THREE.Vector3(center.x, budY - size * 0.1, center.z);
    const endLook = new THREE.Vector3(center.x, center.y - size * 0.05, center.z);

    const targetPos = new THREE.Vector3().lerpVectors(startPos, endPos, progress);
    const targetLook = new THREE.Vector3().lerpVectors(startLook, endLook, progress);

    if (!initialized.current) {
      currentPos.current.copy(targetPos);
      currentLook.current.copy(targetLook);
      camera.position.copy(targetPos);
      camera.lookAt(targetLook);
      initialized.current = true;
      return;
    }

    currentPos.current.lerp(targetPos, 0.1);
    currentLook.current.lerp(targetLook, 0.1);

    camera.position.copy(currentPos.current);
    camera.lookAt(currentLook.current);
  });

  return null;
}

function Rose({ onBoundsComputed }: { onBoundsComputed: (center: THREE.Vector3, size: number) => void }) {
  const { scene } = useGLTF(MODEL_PATH);
  const groupRef = useRef<THREE.Group>(null);
  const boundsReported = useRef(false);

  useEffect(() => {
    if (boundsReported.current) return;
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    const size = box.getSize(new THREE.Vector3()).length();
    console.log("Rose bounds — center:", center, "size:", size, "min:", box.min, "max:", box.max);
    onBoundsComputed(center, size);
    boundsReported.current = true;
  }, [scene, onBoundsComputed]);

  // No auto-rotation

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
}

function SceneContent() {
  const [bounds, setBounds] = useState<{ center: THREE.Vector3; size: number } | null>(null);

  const handleBounds = (center: THREE.Vector3, size: number) => {
    setBounds({ center, size });
  };

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <directionalLight position={[-3, 3, -3]} intensity={0.4} />
      <Rose onBoundsComputed={handleBounds} />
      {bounds && <CameraRig center={bounds.center} size={bounds.size} />}
    </>
  );
}

export function RoseScene() {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ fov: 45, near: 0.01, far: 1000 }}
      gl={{ antialias: true, alpha: false }}
      style={{ background: "#0F2044" }}
    >
      <color attach="background" args={["#0F2044"]} />
      <Suspense fallback={<Loader />}>
        <SceneContent />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload(MODEL_PATH);
