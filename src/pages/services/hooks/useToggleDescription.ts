import { useState } from "react";

// Custom Hook
const useToggleDescription = () => {
  const [showDescription, setShowDescription] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (showDescription === index) {
      setShowDescription(null);
    } else {
      setShowDescription(index);
    }
  };

  return { showDescription, handleClick, setShowDescription };
};

export default useToggleDescription;
