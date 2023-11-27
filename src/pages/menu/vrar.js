import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { Canvas, useThree } from "@react-three/fiber";
import { Stage, OrbitControls } from "@react-three/drei";
import Bellpepper_step1 from "@/components/3Dmodel/Bellpepper_step1";
import Bellpepper_step2 from "@/components/3Dmodel/Bellpepper_step2";
import Bellpepper_step3 from "@/components/3Dmodel/Bellpepper_step3";
import Bellpepper_step4 from "@/components/3Dmodel/Bellpepper_step4";
import Bellpepper_step5 from "@/components/3Dmodel/Bellpepper_step5";
import Bellpepper_step6 from "@/components/3Dmodel/Bellpepper_step6";
import Bellpepper_step7 from "@/components/3Dmodel/Bellpepper_step7";
import Bellpepper_step8 from "@/components/3Dmodel/Bellpepper_step8";
import Bellpepper_step9 from "@/components/3Dmodel/Bellpepper_step9";
import Bellpepper_step10 from "@/components/3Dmodel/Bellpepper_step10";

function CameraControls() {
  const { camera } = useThree();
  camera.position.z = -7;
  return <OrbitControls args={[camera]} enableDamping dampingFactor={0.2} />;
}

const ModelContainer = ({ model, stemColor, leafColor }) => {
  return (
    <group key={Math.random().toString()}>
      {React.cloneElement(model, {
        stemColor: stemColor,
        leafColor: leafColor,
      })}
    </group>
  );
};

function VRAR() {
  const modelNum = 10;
  const [currentPepperIndex, setCurrentPepperIndex] = useState(0);
  const [stemColor, setStemColor] = useState("#00ff00");
  const [leafColor, setLeafColor] = useState("#00ff00");
  // const [materials, setMaterials] = useState(null);

  // useEffect(() => {
  //   // Load GLTF model materials asynchronously
  //   const loadMaterials = async () => {
  //     try {
  //       const loadedMaterials = await useGLTF(
  //         "/glb/bellpepper_step10-transformed.glb"
  //       );
  //       setMaterials(loadedMaterials);
  //     } catch (error) {
  //       console.error("Error loading GLTF materials:", error);
  //     }
  //   };

  //   loadMaterials();
  // }, []);

  const handleSliderChange = (event) => {
    const newIndex = parseInt(event.target.value, 10);
    setCurrentPepperIndex(newIndex);
  };

  const handleStemColorChange = (event) => {
    const newColor = event.target.value;
    setStemColor(newColor);
  };

  const handleLeafColorChange = (event) => {
    const newColor = event.target.value;
    setLeafColor(newColor);
  };

  // 각 모델을 배열로 생성하여 재사용
  const pepperModels = [
    <Bellpepper_step1 key={1} stemColor={stemColor} leafColor={leafColor} />,
    <Bellpepper_step2 key={2} stemColor={stemColor} leafColor={leafColor} />,
    <Bellpepper_step3 key={3} stemColor={stemColor} leafColor={leafColor} />,
    <Bellpepper_step4 key={4} stemColor={stemColor} leafColor={leafColor} />,
    <Bellpepper_step5 key={5} stemColor={stemColor} leafColor={leafColor} />,
    <Bellpepper_step6 key={6} stemColor={stemColor} leafColor={leafColor} />,
    <Bellpepper_step7 key={7} stemColor={stemColor} leafColor={leafColor} />,
    <Bellpepper_step8 key={8} stemColor={stemColor} leafColor={leafColor} />,
    <Bellpepper_step9 key={9} stemColor={stemColor} leafColor={leafColor} />,
    <Bellpepper_step10 key={10} stemColor={stemColor} leafColor={leafColor} />,
  ];

  const CurrentModel = pepperModels[currentPepperIndex];

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <div
          style={{ width: "800px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
        >
          <Canvas
            style={{ width: "100%", height: "500px", borderRadius: "8px" }}
          >
            <Stage adjustCamera={false}>
              <CameraControls />
              <ModelContainer model={CurrentModel} />
            </Stage>
          </Canvas>
        </div>
        <div style={{ marginLeft: "20px" }}>
          <div style={{ fontSize: "18px", fontWeight: "bold" }}>생장 정도:</div>
          <input
            type="range"
            min={0}
            max={modelNum - 1}
            value={currentPepperIndex}
            onChange={handleSliderChange}
            style={{
              width: "300px",
              height: "20px",
              borderRadius: "10px",
              boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />

          {/* 줄기 색상 변경 */}
          <div
            style={{ fontSize: "18px", fontWeight: "bold", marginTop: "10px" }}
          >
            줄기 색상:
          </div>
          <input
            type="color"
            value={stemColor}
            onChange={handleStemColorChange}
            style={{
              width: "300px",
              height: "20px",
              borderRadius: "10px",
              boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />

          {/* 잎 색상 변경 */}
          <div
            style={{ fontSize: "18px", fontWeight: "bold", marginTop: "10px" }}
          >
            잎 색상:
          </div>
          <input
            type="color"
            value={leafColor}
            onChange={handleLeafColorChange}
            style={{
              width: "300px",
              height: "20px",
              borderRadius: "10px",
              boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default VRAR;
