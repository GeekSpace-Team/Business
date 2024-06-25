import { FC } from "react";
import { useLocation } from "react-router-dom";
import "./logo.css";

const Logo: FC = () => {
  const location = useLocation();
  return (
    <>
      <img
        // onClick={() => navigate("/")}
        src="/images/4.png"
        alt="logo"
        style={{
          display: location.pathname === "/" ? "block" : "none",
          width: 180,
          height: 70,
          marginTop: 10,
          marginBottom: 10,
        }}
      />
      {/* <div
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
      </div> */}
    </>
  );
};

export default Logo;
