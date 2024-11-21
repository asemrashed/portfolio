import { useState, useEffect } from "react";

// Custom hook to delay the display of content
const TimeDelay = (delay) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, delay);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, [delay]);

  return showContent;
};

export default TimeDelay;
