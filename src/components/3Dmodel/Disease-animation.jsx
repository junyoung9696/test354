import React, { useRef, useEffect, useCallback, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function DiseaseAnimation({
  isPlaying,
  animationSpeed,
  updateCurrentTime,
}) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/glb/disease-animation-transformed.glb"
  );
  const { actions } = useAnimations(animations, group);
  const [currentTime, setCurrentTime] = useState(0);

  const toggleAnimation = useCallback(() => {
    if (isPlaying) {
      actions["KeyAction"].paused = false;
      actions["KeyAction"].play();
    } else {
      actions["KeyAction"].paused = true;
    }
  }, [isPlaying, actions]);

  useEffect(() => {
    toggleAnimation();
  }, [isPlaying, toggleAnimation]);

  useEffect(() => {
    actions["KeyAction"].timeScale = animationSpeed;
  }, [animationSpeed, actions]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentAnimationTime = actions["KeyAction"].time;
      updateCurrentTime(currentAnimationTime);
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [actions, updateCurrentTime]);

  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <group name="result9" rotation={[0, -1.33, 0]}>
          <mesh
            name="result-9"
            geometry={nodes["result-9"].geometry}
            material={materials["VG07brn1.001"]}
            morphTargetDictionary={nodes["result-9"].morphTargetDictionary}
            morphTargetInfluences={nodes["result-9"].morphTargetInfluences}
          />
          <mesh
            name="result-9_1"
            geometry={nodes["result-9_1"].geometry}
            material={materials["fruit-ripe.001"]}
            morphTargetDictionary={nodes["result-9_1"].morphTargetDictionary}
            morphTargetInfluences={nodes["result-9_1"].morphTargetInfluences}
          />
          <mesh
            name="result-9_2"
            geometry={nodes["result-9_2"].geometry}
            material={materials["leaf_disease.001"]}
            morphTargetDictionary={nodes["result-9_2"].morphTargetDictionary}
            morphTargetInfluences={nodes["result-9_2"].morphTargetInfluences}
          />
          <mesh
            name="result-9_3"
            geometry={nodes["result-9_3"].geometry}
            material={materials["stem.001"]}
            morphTargetDictionary={nodes["result-9_3"].morphTargetDictionary}
            morphTargetInfluences={nodes["result-9_3"].morphTargetInfluences}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/disease-animation-transformed.glb");
