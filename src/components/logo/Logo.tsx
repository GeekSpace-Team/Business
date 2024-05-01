import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "../../pages/home/home.css";

const Logo: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <img
        className="logoAnimation"
        onClick={() => navigate("/")}
        src="./images/logo.png"
        alt="logo"
      />
    </>
  );
};

export default Logo;
