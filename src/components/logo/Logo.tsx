import { FC } from "react";
import { useLocation } from "react-router-dom";
import "./logo.css";

interface LogoProps {
  sidebarVisible: boolean;
}

const Logo: FC<LogoProps> = ({ sidebarVisible }) => {
  const location = useLocation();
  return (
    <>
      {/* <img
        className="logoAnimation"
        onClick={() => navigate("/")}
        src="./images/logo.png"
        alt="logo"
        style={{ display: location.pathname === "/" ? "block" : "none" }}
      /> */}
      <div
        className="wrapper"
        style={{
          display: location.pathname === "/" ? "block" : "none",
          marginLeft: sidebarVisible ? "" : "200px",
        }}
      >
        <svg>
          <text x="50%" y="50%" dy=".35em" text-anchor="middle">
            Iskander Kerimov
          </text>
        </svg>
      </div>
    </>
  );
};

export default Logo;
