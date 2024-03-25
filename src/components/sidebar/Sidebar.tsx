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
import LanguageIcon from "@mui/icons-material/Language";

const Sidebar: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  // const [showLanguage, setShowLanguage] = useState(false);

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
      <Box sx={{ position: "absolute", bottom: "16%", left: "13%" }}>
        <Box sx={{ position: "relative" }}>
          <Language />
        </Box>
      </Box>
      <Stack direction="row" spacing={screenHeight >= 900 ? 5 : 2}>
        <Stack
          sx={{ display: { lg: "flex", md: "flex", sm: "none", xs: "none" } }}
          alignItems="center"
          height="auto"
          width={"200px"}
          pt={screenHeight >= 900 ? 3 : 0}
          pb={screenHeight >= 900 ? 5 : 1}
          spacing={screenHeight >= 900 ? 5 : 2}
        >
          <Logo />

          <Stack
            height="100%"
            pl={location.pathname === "/" ? "20%" : "20%"}
            pr={location.pathname === "/" ? "6%" : ""}
            spacing={screenHeight >= 900 ? 5 : 3}
          >
            <Box
              sx={{
                background: "#363636",
                width: screenHeight >= 900 ? "134px" : "100px",
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
                    height: screenHeight >= 900 ? "117px" : "78px",
                    gap: screenHeight >= 900 ? "10px" : "3px",
                    cursor: "pointer",
                    transition: "0.7s",
                    "&:hover": {
                      color: "#FFF083",
                      background: "#222222",
                    },
                  }}
                >
                  <PeopleAltOutlinedIcon />
                  <Typography sx={{ fontSize: screenHeight >= 900 ? 16 : 14 }}>
                    {t("sidebar.about")}
                  </Typography>
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
                    height: screenHeight >= 900 ? "117px" : "78px",
                    gap: screenHeight >= 900 ? "10px" : "3px",
                    cursor: "pointer",
                    transition: "0.7s",
                    "&:hover": {
                      color: "#FFF083",
                      background: "#222222",
                    },
                  }}
                >
                  <WorkOutlineOutlinedIcon />
                  <Typography sx={{ fontSize: screenHeight >= 900 ? 16 : 14 }}>
                    {t("sidebar.portfolio")}
                  </Typography>
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
                    height: screenHeight >= 900 ? "117px" : "78px",
                    gap: screenHeight >= 900 ? "10px" : "3px",
                    cursor: "pointer",
                    transition: "0.7s",
                    "&:hover": {
                      color: "#FFF083",
                      background: "#222222",
                    },
                  }}
                >
                  <SettingsIcon />
                  <Typography sx={{ fontSize: screenHeight >= 900 ? 16 : 14 }}>
                    {t("sidebar.services")}
                  </Typography>
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
                    height: screenHeight >= 900 ? "117px" : "78px",
                    gap: screenHeight >= 900 ? "10px" : "3px",
                    cursor: "pointer",
                    transition: "0.7s",
                    "&:hover": {
                      color: "#FFF083",
                      background: "#222222",
                    },
                  }}
                >
                  <MailIcon />
                  <Typography sx={{ fontSize: screenHeight >= 900 ? 16 : 14 }}>
                    {t("sidebar.contact")}
                  </Typography>
                </Box>
                <Box
                  // onClick={() => navigate("/contact")}
                  sx={{
                    background:
                      location.pathname === "/contact" ? "#222222" : "#3e3e3e",
                    color:
                      location.pathname === "/contact" ? "#FFF083" : "#B6B6B6",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: screenHeight >= 900 ? "117px" : "78px",
                    gap: screenHeight >= 900 ? "10px" : "3px",
                    cursor: "pointer",
                    transition: "0.7s",
                    "&:hover": {
                      color: "#FFF083",
                      background: "#222222",
                    },
                  }}
                >
                  <LanguageIcon />
                  <Typography sx={{ fontSize: screenHeight >= 900 ? 16 : 14 }}>
                    {t("sidebar.language")}
                  </Typography>
                </Box>
                {/* <Language /> */}
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
