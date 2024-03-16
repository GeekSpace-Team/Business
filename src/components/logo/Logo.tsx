import { FC } from "react";
import { useNavigate } from "react-router-dom";

const Logo: FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <img
        onClick={() => navigate("/")}
        src="./images/logo.png"
        style={{ width: "176px", height: "120px", cursor: "pointer" }}
        alt="logo"
      />
    </>
  );
};

export default Logo;
