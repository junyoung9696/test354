import { useState, useRef, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import Authentication from "@/components/authentication";
import ScrollNavBar from "@/components/ScrollNavbar";
import { useGLTF } from "@react-three/drei";
import {
  Section1,
  Section2,
  Section3,
  Section4,
} from "@/components/main/Sections";
import Navbar from "@/components/Navbar";

function Home() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleClick = (ref) => {
    const sectionElement = ref.current;
    if (sectionElement) {
      const offsetTop =
        sectionElement.getBoundingClientRect().top + window.pageYOffset;
      scroll.scrollTo(offsetTop, {
        duration: 800,
        smooth: "easeInOutQuad",
      });
    }
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Authentication setIsLoggedIn={setIsLoggedIn} />

      <div className="main-container">
        <Navbar />
        <section id="section1" ref={section1Ref}>
          <Section1
            handleClick={handleClick}
            section2Ref={section2Ref}
            section3Ref={section3Ref}
            section4Ref={section4Ref}
          />
        </section>
        <section id="section2" ref={section2Ref}>
          <Section2 />
        </section>
        <section id="section3" ref={section3Ref}>
          <Section3 />
        </section>
        <section id="section4" ref={section4Ref}>
          <Section4 />
        </section>
      </div>

      <style jsx>{`
        .main-container {
          width: 100%;
        }

        section {
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}

export default Home;
