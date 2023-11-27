import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/glb/paprika-transformed.glb");

  // Function to change the color of a material to red
  const changeMaterialColorToRed = (material) => {
    material.color.set("blue");
  };

  // Change the color of each material to red
  Object.values(materials).forEach(changeMaterialColorToRed);

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={10}>
        <mesh
          geometry={nodes.VG07_3.geometry}
          material={materials["VG07brn1.002"]}
        />
        <mesh
          geometry={nodes.VG07_3_1.geometry}
          material={materials["VG07lef2.001"]}
        />
        <mesh
          geometry={nodes.VG07_3_2.geometry}
          material={materials["VG07lef1.002"]}
        />
        <mesh
          geometry={nodes.VG07_3_3.geometry}
          material={materials.VG07frt0}
        />
        <mesh
          geometry={nodes.VG07_3_4.geometry}
          material={materials.VG07frt1}
        />
        <mesh
          geometry={nodes.VG07_3_5.geometry}
          material={materials.VG07frt2}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/glb/paprika-transformed.glb");
