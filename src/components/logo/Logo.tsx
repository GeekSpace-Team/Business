import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Logo: FC = () => {
  const navigate = useNavigate();
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <img
        onClick={() => navigate("/")}
        src="./images/logo.png"
        style={{
          width: screenHeight >= 900 ? "176px" : "146px",
          height: screenHeight >= 900 ? "120px" : "90px",
          cursor: "pointer",
        }}
        alt="logo"
      />
    </>
  );
};

export default Logo;
