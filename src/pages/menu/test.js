import Navbar from "@/components/Navbar";
import { Canvas, useThree } from "@react-three/fiber";
import { Stage, OrbitControls } from "@react-three/drei";
import BGtest from "@/components/3Dmodel/BGtest.jsx";
import { useEffect, useState } from "react";

function CameraControls() {
  const { camera } = useThree();
  camera.position.set(0, 1, 15);
}

const ModelContainer = ({ model: ModelComponent, play, ...props }) => {
  return (
    <group {...props}>
      <ModelComponent play={play} />
    </group>
  );
};

export default function test() {
  const [currentModelIndex, setCurrentModelIndex] = UseState(0);
  const [showModel, setShowModel] = UseState(true);
  const [warning, setWarning] = UseState(false);
  const levels = [BGtest, BGtest, BGtest];

  const modelNum = levels.length;

  UseEffect(() => {
    const intervalId = setInterval(() => {
      if (!warning) {
        setShowModel(false); // 모델을 숨김
        setTimeout(() => {
          setCurrentModelIndex((prevIndex) => (prevIndex + 1) % modelNum);
          setShowModel(true); // 모델을 다시 보여줌
        }, 300); // 모델이 사라지고 나타나는 간격
      }
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [modelNum, warning]);

  const CurrentModel = levels[currentModelIndex];

  return (
    <>
      <Navbar />

      <div className="mt-8 flex flex-wrap gap-4 mx-auto justify-evenly items-center">
        <div className="w-3/5 shadow-2xl border-2 border-teal-500">
          <div className={`model-container ${showModel ? "show" : "hide"}`}>
            <Canvas style={{ width: "100%", height: "500px" }}>
              <ambientLight intensity={0.5} />
              <directionalLight intensity={2.2} position={[10, 10, 5]} />
              <CameraControls />
              <ModelContainer
                model={CurrentModel}
                position={[0, -6, 0]}
                play={warning}
              />

              <OrbitControls />
            </Canvas>
          </div>
        </div>
      </div>
    </>
  );
}
