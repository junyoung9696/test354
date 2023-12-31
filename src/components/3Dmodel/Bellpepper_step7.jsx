/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 bellpepper_step7.gltf --transform
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/glb/bellpepper_step7-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <group
        rotation={[Math.PI, -1.21, Math.PI]}
        scale={10}
        position={[0, -3, 0]}
      >
        <mesh geometry={nodes["result-6"].geometry} material={materials.stem} />
        <mesh
          geometry={nodes["result-6_1"].geometry}
          material={materials.fruit_green}
        />
        <mesh
          geometry={nodes["result-6_2"].geometry}
          material={materials.VG07brn1}
        />
        <mesh
          geometry={nodes["result-6_3"].geometry}
          material={materials.leaf_disease}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/glb/bellpepper_step7-transformed.glb");
