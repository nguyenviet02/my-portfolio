import { useEffect, useState } from 'react';

const FadeIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div
      className="transition-opacity duration-500 ease-in-out"
      style={{
        opacity: isVisible ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
};

const SlideIn = ({ children, direction = 'left', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'left':
          return 'translateX(-20px)';
        case 'right':
          return 'translateX(20px)';
        case 'up':
          return 'translateY(20px)';
        case 'down':
          return 'translateY(-20px)';
        default:
          return 'translateX(-20px)';
      }
    }
    return 'translate(0)';
  };

  return (
    <div
      className="transition-all duration-500 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
      }}
    >
      {children}
    </div>
  );
};

export { FadeIn, SlideIn }; 