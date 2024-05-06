import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../pages/home/home.css";

const Logo: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <img
        className="logoAnimation"
        onClick={() => navigate("/")}
        src="./images/logo.png"
        alt="logo"
        style={{ display: location.pathname === "/" ? "block" : "none" }}
      />
    </>
  );
};

export default Logo;
