import Level30_white from "@/components/3Dmodel/gltf_exports/level30-notexture";
import { Canvas, useThree } from "@react-three/fiber";
import { Stage, OrbitControls } from "@react-three/drei";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Control() {
  const [stemColor, setStemColor] = useState("#00ff00");
  const [leafColor, setLeafColor] = useState("#00ff00");
  const [fruitColor, setFruitColor] = useState("#ffffff");

  const handleStemColorChange = (event) => {
    const newColor = event.target.value;
    setStemColor(newColor);
  };

  const handleLeafColorChange = (event) => {
    const newColor = event.target.value;
    setLeafColor(newColor);
  };

  const handleFruitColorChange = (event) => {
    const newColor = event.target.value;
    setFruitColor(newColor);
  };

  return (
    <>
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
              <Level30_white
                stemColor={stemColor}
                leafColor={leafColor}
                fruitColor={fruitColor}
              />
              <OrbitControls />
            </Stage>
          </Canvas>
        </div>
        <div style={{ marginLeft: "20px" }}>
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

          <div
            style={{ fontSize: "18px", fontWeight: "bold", marginTop: "10px" }}
          >
            열매 색상:
          </div>
          <input
            type="color"
            value={fruitColor}
            onChange={handleFruitColorChange}
            style={{
              width: "300px",
              height: "20px",
              borderRadius: "10px",
              boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
      </div>
    </>
  );
}
