import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/glb/level30-notexture.glb");
  const { actions } = useAnimations(animations, group);

  // Clone materials and customize their colors
  const clonedMaterials = {
    stem: materials.stem.clone(),
    "fruit-ripe": materials["fruit-ripe"].clone(),
    leaf_disease: materials.leaf_disease.clone(),
    leaf_disease2: materials.leaf_disease2.clone(),
    leaf_disease3: materials.leaf_disease3.clone(),
    leaf_disease4: materials.leaf_disease4.clone(),
    "stem.001": materials["stem.001"].clone()
  };

  clonedMaterials.stem.color.set(props.stemColor);
  clonedMaterials["fruit-ripe"].color.set(props.fruitColor);
  clonedMaterials.leaf_disease.color.set(props.leafColor);
  clonedMaterials.leaf_disease2.color.set(props.leafColor);
  clonedMaterials.leaf_disease3.color.set(props.leafColor);
  clonedMaterials.leaf_disease4.color.set(props.leafColor);
  clonedMaterials["stem.001"].color.set(props.stemColor);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="result_030">
          {/* Render each mesh using the cloned materials */}
          <mesh
            name="result-5_013"
            castShadow
            receiveShadow
            geometry={nodes["result-5_013"].geometry}
            material={clonedMaterials.stem}
            morphTargetDictionary={nodes["result-5_013"].morphTargetDictionary}
            morphTargetInfluences={nodes["result-5_013"].morphTargetInfluences}
          />
          <mesh
            name="result-5_013_1"
            castShadow
            receiveShadow
            geometry={nodes["result-5_013_1"].geometry}
            material={clonedMaterials["fruit-ripe"]}
            morphTargetDictionary={
              nodes["result-5_013_1"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_013_1"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_013_2"
            castShadow
            receiveShadow
            geometry={nodes["result-5_013_2"].geometry}
            material={clonedMaterials.leaf_disease}
            morphTargetDictionary={
              nodes["result-5_013_2"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_013_2"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_013_3"
            castShadow
            receiveShadow
            geometry={nodes["result-5_013_3"].geometry}
            material={clonedMaterials.leaf_disease2}
            morphTargetDictionary={
              nodes["result-5_013_3"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_013_3"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_013_4"
            castShadow
            receiveShadow
            geometry={nodes["result-5_013_4"].geometry}
            material={clonedMaterials.leaf_disease3}
            morphTargetDictionary={
              nodes["result-5_013_4"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_013_4"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_013_5"
            castShadow
            receiveShadow
            geometry={nodes["result-5_013_5"].geometry}
            material={clonedMaterials.leaf_disease4}
            morphTargetDictionary={
              nodes["result-5_013_5"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_013_5"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_013_6"
            castShadow
            receiveShadow
            geometry={nodes["result-5_013_6"].geometry}
            material={clonedMaterials["stem.001"]}
            morphTargetDictionary={
              nodes["result-5_013_6"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_013_6"].morphTargetInfluences
            }
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/level30-notexture.glb");
