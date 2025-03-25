/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// components/ScrollAnimation/ScrollAnimation.jsx
import { useRef, useEffect } from "react";
import styles from "./ScrollAnimationWrapper.module.css";

const ScrollAnimation = ({ children, className }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${className || ""} ${styles.animationContainer}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
