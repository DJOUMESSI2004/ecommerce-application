import { useState, useEffect, useRef } from "react";
import '../styles/components/scrollingAnimations.css';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animationClass?: string; // CSS animation class
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animationClass = "fade-in",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${isVisible ? animationClass : "opacity-0"}`}
      style={{ transition: "opacity 1s, transform 1s" }} // Smooth transition
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
