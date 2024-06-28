import { React, useRef, useEffect } from "react";
import { Transition } from "react-transition-group";
import { reflow } from "../../utils/transition";
import { gsap } from "gsap";
import "./DisplacementSphere.css";
import sphereImage from "../../assets/vecteezy_3d-illustration-holographic-abstract-shape_23638405.png";

const DisplacementSphere = () => {
  const sphereRef = useRef(null);
  const sphereImageRef = useRef(null);

  useEffect(() => {
    const sphere = sphereImageRef.current;

    const onMouseMove = (event) => {
      const rotationX = (event.clientY / window.innerHeight) * 90 - 45;
      const rotationY = (event.clientX / window.innerWidth) * 90 - 45;

      gsap.to(sphere, {
        rotationX: rotationX,
        rotationY: rotationY,
        duration: 0.5,
        ease: "power1.out"
      });
    };

    const onMouseLeave = () => {
      gsap.to(sphere, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.5,
        ease: "power1.out"
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <Transition appear in onEnter={reflow} timeout={3000}>
      {(status) => (
        <div
          aria-hidden
          className={`displacement-sphere-container displacement-sphere--${status}`}
          ref={sphereRef}
        >
          <img
            src={sphereImage}
            className="displacement-sphere"
            alt="sphere"
            ref={sphereImageRef}
          />
        </div>
      )}
    </Transition>
  );
};

export default DisplacementSphere;
