import { FC, useEffect, useState } from "react";
import Logo from "../logo/Logo";
import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Social from "../bottom-social/Social";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import MailIcon from "@mui/icons-material/Mail";
import Language from "../../assets/language/Language";
import { useTranslation } from "react-i18next";
import LanguageIcon from "@mui/icons-material/Language";
import MiniSidebar from "./MiniSidebar";
import "../../pages/home/home.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const Sidebar: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [showLanguage, setShowLanguage] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSidebarVisible(!sidebarVisible);
    }, 500);

    return () => clearTimeout(timeout);
  }, [navigate]);

  const handleLanguageClick = () => {
    setShowLanguage(!showLanguage);
  };

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
      {showLanguage && (
        <Box
          sx={{
            position: "absolute",
            bottom: "17.3%",
            left: screenHeight >= 900 ? "10%" : "12%",
            zIndex: 1000,
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Language setShowLanguage={setShowLanguage} />
          </Box>
        </Box>
      )}
      <Stack
        width="100%"
        direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
        spacing={screenHeight >= 900 ? 1 : 0}
      >
        <Box
          sx={{
            width: sidebarVisible ? "150px" : "30px",
            position: location.pathname === "/services" ? "relative" : "",
          }}
        >
          <Stack
            sx={{
              display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
              position: location.pathname === "/services" ? "absolute" : "",
              width: "200px",
            }}
            // alignItems="center"
            height="auto"
            width={"200px"}
            pt={screenHeight >= 900 ? 3 : 0}
            pb={screenHeight >= 900 ? 5 : 1}
          >
            {!sidebarVisible && (
              <>
                <Stack
                  sx={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    position: "absolute",
                  }}
                >
                  <Tooltip title="Open Sidebar">
                    <IconButton
                      className="leftArrow"
                      sx={{ width: "30px", color: "#fff" }}
                      onClick={() => setSidebarVisible(true)}
                    >
                      <ArrowForwardIosIcon />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </>
            )}
            <Stack
              className="sidebar"
              height="100%"
              pr={location.pathname === "/" ? "6%" : ""}
              spacing={screenHeight >= 900 ? 5 : 1}
              style={{
                transform: sidebarVisible
                  ? "translateX(0)"
                  : "translateX(-100%)",
              }}
            >
              <>
                <Logo sidebarVisible={sidebarVisible} />
                {location.pathname === "/" ? null : (
                  <Box
                    sx={{ height: screenHeight >= 900 ? "0px" : "50px" }}
                  ></Box>
                )}
              </>
              <Box
                sx={{
                  background: "#363636",
                  width: screenHeight >= 900 ? "134px" : "100px",
                  height: screenHeight >= 900 ? "auto" : "auto",
                  borderRadius: "0px 8px 8px 0px",
                  padding: 1,
                }}
                // data-aos="fade-down"
                // data-aos-delay={"600"}
              >
                <Stack spacing={0.5}>
                  {location.pathname === "/" ? null : (
                    <Box
                      className="sidebar_first_item"
                      onClick={() => navigate("/")}
                      sx={{
                        background: "#3e3e3e",
                        color: "#B6B6B6",
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
                          color: "orange",
                          background: "#222222",
                        },
                      }}
                    >
                      <HomeOutlinedIcon />
                      <Typography
                        sx={{
                          fontSize: screenHeight >= 900 ? 16 : 14,
                          fontFamily: "Trebuchet MS, sans-serif",
                        }}
                      >
                        {t("sidebar.home")}
                      </Typography>
                    </Box>
                  )}
                  <Box
                    className="sidebar_first_item"
                    onClick={() => navigate("/about")}
                    sx={{
                      background:
                        location.pathname === "/about" ? "#222222" : "#3e3e3e",
                      color:
                        location.pathname === "/about" ? "orange" : "#B6B6B6",
                      borderRadius:
                        location.pathname === "/" ? "8px 8px 0px 0px" : "",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: screenHeight >= 900 ? "117px" : "78px",
                      gap: screenHeight >= 900 ? "10px" : "3px",
                      cursor: "pointer",
                      transition: "0.7s",
                      "&:hover": {
                        color: "orange",
                        background: "#222222",
                      },
                    }}
                  >
                    <PeopleAltOutlinedIcon />
                    <Typography
                      sx={{
                        fontSize: screenHeight >= 900 ? 16 : 14,
                        fontFamily: "Trebuchet MS, sans-serif",
                      }}
                    >
                      {t("sidebar.about")}
                    </Typography>
                  </Box>
                  <Box
                    className="sidebar_second_item"
                    onClick={() => navigate("/portfolio")}
                    sx={{
                      background:
                        location.pathname === "/portfolio"
                          ? "#222222"
                          : "#3e3e3e",
                      color:
                        location.pathname === "/portfolio"
                          ? "orange"
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
                        color: "orange",
                        background: "#222222",
                      },
                    }}
                  >
                    <WorkOutlineOutlinedIcon />
                    <Typography
                      sx={{
                        fontSize: screenHeight >= 900 ? 16 : 14,
                        fontFamily: "Trebuchet MS, sans-serif",
                      }}
                    >
                      {t("sidebar.portfolio")}
                    </Typography>
                  </Box>
                  <Box
                    className="sidebar_third_item"
                    onClick={() => navigate("/services")}
                    sx={{
                      background:
                        location.pathname === "/services"
                          ? "#222222"
                          : "#3e3e3e",
                      color:
                        location.pathname === "/services"
                          ? "orange"
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
                        color: "orange",
                        background: "#222222",
                      },
                    }}
                  >
                    <SettingsIcon />
                    <Typography
                      sx={{
                        fontSize: screenHeight >= 900 ? 16 : 14,
                        fontFamily: "Trebuchet MS, sans-serif",
                      }}
                    >
                      {t("sidebar.services")}
                    </Typography>
                  </Box>
                  <Box
                    className="sidebar_fourth_item"
                    onClick={() => navigate("/contact")}
                    sx={{
                      background:
                        location.pathname === "/contact"
                          ? "#222222"
                          : "#3e3e3e",
                      color:
                        location.pathname === "/contact" ? "orange" : "#B6B6B6",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: screenHeight >= 900 ? "117px" : "78px",
                      gap: screenHeight >= 900 ? "10px" : "3px",
                      cursor: "pointer",
                      transition: "0.7s",
                      "&:hover": {
                        color: "orange",
                        background: "#222222",
                      },
                    }}
                  >
                    <MailIcon />
                    <Typography
                      sx={{
                        fontSize: screenHeight >= 900 ? 16 : 14,
                        fontFamily: "Trebuchet MS, sans-serif",
                      }}
                    >
                      {t("sidebar.contact")}
                    </Typography>
                  </Box>
                  <Box
                    className="sidebar_fifth_item"
                    onClick={handleLanguageClick}
                    sx={{
                      background: showLanguage ? "#222222" : "#3e3e3e",
                      color: showLanguage ? "orange" : "#B6B6B6",
                      display: "flex",
                      borderRadius: "0px 0px 8px 8px",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: screenHeight >= 900 ? "117px" : "78px",
                      gap: screenHeight >= 900 ? "10px" : "3px",
                      cursor: "pointer",
                      transition: "0.7s",
                      "&:hover": {
                        color: "orange",
                        background: "#222222",
                      },
                    }}
                  >
                    <LanguageIcon />
                    <Typography
                      sx={{
                        fontSize: screenHeight >= 900 ? 16 : 14,
                        fontFamily: "Trebuchet MS, sans-serif",
                      }}
                    >
                      {t("sidebar.language")}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
              {location.pathname === "/" ? null : <Social />}
            </Stack>
          </Stack>
        </Box>
        {/* sm and xs ui */}
        <Stack
          pr={3}
          pl={3}
          sx={{ display: { lg: "none", md: "none", sm: "flex", xs: "flex" } }}
        >
          <MiniSidebar />
        </Stack>
        <Outlet />
      </Stack>
    </>
  );
};

export default Sidebar;
