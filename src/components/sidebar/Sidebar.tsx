import { FC, useEffect, useState } from "react";
import Logo from "../logo/Logo";
import { Box, Stack, Typography } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Social from "../bottom-social/Social";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import MailIcon from "@mui/icons-material/Mail";
import Language from "../../assets/language/Language";
import { useTranslation } from "react-i18next";

const Sidebar: FC = () => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

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
      <Stack direction="row" spacing={5}>
        <Stack
          alignItems="center"
          height="90vh"
          width="200px"
          pt={3}
          pb={5}
          spacing={5}
        >
          <Logo />

          <Stack height="100%" pl="20%" spacing={5}>
            <Box
              sx={{
                background: "#363636",
                width: "134px",
                height: screenHeight >= 900 ? "600px" : "auto",
                borderRadius: "8px",
                padding: 1,
              }}
            >
              <Stack spacing={0.5}>
                <Box
                  onClick={() => navigate("/about")}
                  sx={{
                    background:
                      location.pathname === "/about" ? "#222222" : "#3e3e3e",
                    color:
                      location.pathname === "/about" ? "#FFF083" : "#B6B6B6",
                    borderRadius: "8px 8px 0px 0px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: screenHeight >= 900 ? "117px" : "87px",
                    gap: "10px",
                    cursor: "pointer",
                    transition: "0.7s",
                    "&:hover": {
                      color: "#FFF083",
                      background: "#222222",
                    },
                  }}
                >
                  <PeopleAltOutlinedIcon />
                  <Typography>{t("sidebar.about")}</Typography>
                </Box>
                <Box
                  onClick={() => navigate("/portfolio")}
                  sx={{
                    background:
                      location.pathname === "/portfolio"
                        ? "#222222"
                        : "#3e3e3e",
                    color:
                      location.pathname === "/portfolio"
                        ? "#FFF083"
                        : "#B6B6B6",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: screenHeight >= 900 ? "117px" : "87px",
                    gap: "10px",
                    cursor: "pointer",
                    transition: "0.7s",
                    "&:hover": {
                      color: "#FFF083",
                      background: "#222222",
                    },
                  }}
                >
                  <WorkOutlineOutlinedIcon />
                  <Typography>{t("sidebar.portfolio")}</Typography>
                </Box>
                <Box
                  onClick={() => navigate("/services")}
                  sx={{
                    background:
                      location.pathname === "/services" ? "#222222" : "#3e3e3e",
                    color:
                      location.pathname === "/services" ? "#FFF083" : "#B6B6B6",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: screenHeight >= 900 ? "117px" : "87px",
                    gap: "10px",
                    cursor: "pointer",
                    transition: "0.7s",
                    "&:hover": {
                      color: "#FFF083",
                      background: "#222222",
                    },
                  }}
                >
                  <SettingsIcon />
                  <Typography>{t("sidebar.services")}</Typography>
                </Box>
                <Box
                  onClick={() => navigate("/contact")}
                  sx={{
                    background:
                      location.pathname === "/contact" ? "#222222" : "#3e3e3e",
                    color:
                      location.pathname === "/contact" ? "#FFF083" : "#B6B6B6",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: screenHeight >= 900 ? "117px" : "87px",
                    gap: "10px",
                    cursor: "pointer",
                    transition: "0.7s",
                    "&:hover": {
                      color: "#FFF083",
                      background: "#222222",
                    },
                  }}
                >
                  <MailIcon />
                  <Typography>{t("sidebar.contact")}</Typography>
                </Box>
                <Language />
              </Stack>
            </Box>
            {location.pathname === "/" ? null : <Social />}
          </Stack>
        </Stack>
        <Outlet />
      </Stack>
    </>
  );
};

export default Sidebar;
