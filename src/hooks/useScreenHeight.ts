// src/hooks/useScreenHeight.ts
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setScreenHeight } from "../store/screenHeightSlice";
import { AppDispatch } from "../store";

const useScreenHeight = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const handleResize = () => {
      dispatch(setScreenHeight(window.innerHeight));
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial height

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);
};

export default useScreenHeight;
