import Greenhouse from "@/components/3Dmodel/Greenhouse.jsx";
import VisionPro from "@/components/3Dmodel/VisionPro.jsx";
import Chart from "@/components/3Dmodel/Chart.jsx";
import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls } from "@react-three/drei";
import Link from "next/link";
import "keyboard-css";

function Section1({ handleClick, section2Ref, section3Ref, section4Ref }) {
  return (
    <>
      <div className="sectionContainer">
        <section className="dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 space-y-16">
            <h1 className="text-7xl font-black text-center text-black font-rem">
              THE MOST CREATIVE & POWERFUL VISUALIZATION
            </h1>
            <div className="text-center space-x-10">
              <button
                className="kbc-button kbc-button-lg kbc-button-dark"
                onClick={() => handleClick(section2Ref)}
              >
                Dashboard
              </button>
              <button
                className="kbc-button kbc-button-lg kbc-button-dark"
                onClick={() => handleClick(section3Ref)}
              >
                3D Visualization
              </button>
              <button
                className="kbc-button kbc-button-lg kbc-button-dark"
                onClick={() => handleClick(section4Ref)}
              >
                VR & AR
              </button>
            </div>
          </div>
        </section>
      </div>
      <style jsx>{`
        .sectionContainer {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-image: url("/glass-background.jpg");
          background-size: cover;
        }
      `}</style>
    </>
  );
}

function Section2() {
  return (
    <>
      <div className="sectionContainer bg-slate-100">
        <section className="dark:bg-gray-900">
          <div className="gap-10 items-center py-8 px-4 mx-auto max-w-screen-xl flex justify-evenly lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 w-1/2">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                2D Dashboard
              </h2>
              <p className="mb-4 font-light">
                The 2D Dashboard is a powerful data visualization tool that
                leverages the capabilities of the SuperSet library. With
                interactive charts, real-time updates, and a user-friendly
                interface, it enables data-driven decision-making and efficient
                performance monitoring.
              </p>

              <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold border-b-4 border-blue-700 hover:border-blue-500 rounded float-right">
                <Link className="py-2 px-4 block" href="/menu/chart">
                  Go To
                </Link>
              </button>
            </div>
            <div className="h-80 w-1/3 hidden md:block">
              <Canvas>
                <Stage environment="city" intensity={0.6}>
                  <Chart args={[2, 2, 2]} scale={[1, 1, 1]} />
                </Stage>
                <OrbitControls />
              </Canvas>
            </div>
          </div>
        </section>
      </div>
      <style jsx>{`
        .sectionContainer {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}

function Section3() {
  return (
    <>
      <div className="sectionContainer bg-red-50">
        <section className="dark:bg-gray-900">
          <div className="gap-10 items-center py-8 px-4 mx-auto max-w-screen-xl flex justify-evenly lg:py-16 lg:px-6">
            <div className="h-80 w-1/3 hidden md:block">
              <Canvas>
                <Stage environment="city" intensity={0.6}>
                  <Greenhouse args={[2, 2, 2]} scale={[1, 1, 1]} />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate />
              </Canvas>
            </div>
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 w-1/2">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                3D Data Visualization
              </h2>
              <p className="mb-4 font-light">
                Using 3D modeling, we visualize crop growth cycles and seed
                germination processes. This innovative approach makes data
                analysis more engaging, allowing us to uncover hidden patterns
                and relationships.
              </p>
              <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold border-b-4 border-blue-700 hover:border-blue-500 rounded float-right">
                <Link className="py-2 px-4 block" href="/menu/three">
                  Go To
                </Link>
              </button>

              <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold border-b-4 border-blue-700 hover:border-blue-500 rounded float-right">
                <Link className="py-2 px-4 block" href="/menu/control">
                  Color Control
                </Link>
              </button>

              <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold border-b-4 border-blue-700 hover:border-blue-500 rounded float-right">
                <Link className="py-2 px-4 block" href="/menu/bgtest">
                  Background Test
                </Link>
              </button>
              
            </div>
          </div>
        </section>
      </div>
      <style jsx>{`
        .sectionContainer {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}

function Section4() {
  return (
    <>
      <div className="sectionContainer bg-teal-50">
        <section className="dark:bg-gray-900">
          <div className="gap-10 items-center py-8 px-4 mx-auto max-w-screen-xl flex justify-evenly lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 w-1/2">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                VR & AR
              </h2>
              <p className="mb-4 font-light">
                Virtual Reality (VR) and Augmented Reality (AR) are innovative
                technologies that immerse users in digital worlds or overlay
                virtual elements onto the real world. Through these cutting-edge
                technologies, we can bring virtual farms right before the users
                eyes, creating an immersive and interactive agricultural
                experience.
              </p>

              <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold border-b-4 border-blue-700 hover:border-blue-500 rounded float-right">
                <Link className="py-2 px-4 block" href="/menu/vrar">
                  Go To
                </Link>
              </button>
            </div>
            <div className="h-80 w-1/3 hidden md:block">
              <Canvas>
                <Stage environment="city" intensity={0.6}>
                  <VisionPro args={[2, 2, 2]} scale={[1, 1, 1]} />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate />
              </Canvas>
            </div>
          </div>
        </section>
      </div>
      <style jsx>{`
        .sectionContainer {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}

export { Section1, Section2, Section3, Section4 };
