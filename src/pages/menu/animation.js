import React, { useCallback, useState } from "react";
import Navbar from "@/components/Navbar";
import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls, Center } from "@react-three/drei";
import DiseaseAnimation from "@/components/3Dmodel/Disease-animation";

function Animation() {
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(true);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [currentTime, setCurrentTime] = useState(0); // 현재 시간을 상태로 저장합니다.

  const toggleAnimation = () => {
    setIsAnimationPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const increaseSpeed = () => {
    setAnimationSpeed((prevSpeed) => prevSpeed + 0.1); // 애니메이션 속도를 0.1씩 증가시킵니다.
  };

  const decreaseSpeed = () => {
    setAnimationSpeed((prevSpeed) => prevSpeed - 0.1); // 애니메이션 속도를 0.1씩 감소시킵니다.
  };

  const updateCurrentTime = useCallback((time) => {
    setCurrentTime(time);
  }, []);

  return (
    <>
      <Navbar />
      <div className="h-screen">
        <Canvas>
          <Stage adjustCamera={false} environment="city" intensity={0.6}>
            <DiseaseAnimation
              isPlaying={isAnimationPlaying}
              animationSpeed={animationSpeed}
              updateCurrentTime={updateCurrentTime}
            />
          </Stage>
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>

      <div className="flex justify-center mb-4">
        <button
          className="bg-blue-500 text-white p-2 rounded-md mr-2"
          onClick={toggleAnimation}
        >
          {isAnimationPlaying ? "애니메이션 멈춤" : "애니메이션 재생"}
        </button>
        <button
          className="bg-green-500 text-white p-2 rounded-md mr-2"
          onClick={increaseSpeed}
        >
          속도 증가
        </button>
        <button
          className="bg-red-500 text-white p-2 rounded-md"
          onClick={decreaseSpeed}
        >
          속도 감소
        </button>
        <span className="ml-4 text-gray-600">
          현재 속도: {animationSpeed.toFixed(1)}
        </span>

        <span className="ml-4 text-gray-600">
          현재 시간: {currentTime.toFixed(1)} 초
        </span>
      </div>
    </>
  );
}

export default Animation;
