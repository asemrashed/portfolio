import { useEffect, useRef } from 'react';

export default function AnimateOnView({ children, threshold = 0.3, delay = 300 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Set a timeout for the delay
            setTimeout(() => {
              entry.target.classList.remove('hidden'); // Removes hidden class
              entry.target.classList.add(entry.target.dataset.animation); // Adds animation class
            }, delay);
            observer.unobserve(entry.target); // Stops observing
          }
        });
      },
      { threshold }
    );

    if (containerRef.current) {
      const elementsToAnimate = containerRef.current.querySelectorAll('[data-animation]');
      elementsToAnimate.forEach((element) => {
        element.classList.add('hidden'); // Adds hidden class initially
        observer.observe(element);
      });
    }

    return () => observer.disconnect();
  }, [threshold, delay]);

  return <div ref={containerRef}>{children}</div>;
}
