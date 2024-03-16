import { FC, useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";

const Language: FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { i18n } = useTranslation();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setDrawerOpen(false);
  };

  const getLanguageName = (lang: string) => {
    switch (lang) {
      case "en":
        return "English";
      case "ru":
        return "Russian";
      case "tm":
        return "Turkmen";
      default:
        return "Turkmen";
    }
  };

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
      <Stack direction="row" spacing={1} width="100%">
        <Box
          onClick={toggleDrawer}
          sx={{
            width: "100%",
            background: "#3e3e3e",
            borderRadius: "0px 0px 8px 8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: screenHeight >= 900 ? "115px" : "87px",
            gap: "10px",
            cursor: "pointer",
            color: "#B6B6B6",
            transition: "0.7s",
            "&:hover": {
              color: "#FFF083",
              background: "#222222",
            },
          }}
        >
          <LanguageIcon />
          <Typography>{getLanguageName(i18n.language)}</Typography>
        </Box>
        {drawerOpen && (
          <div
            style={{
              width: "200px",
              background: "#3e3e3e",
              color: "#B6B6B6",
              zIndex: 1,
            }}
          >
            <Typography
              sx={{
                padding: "10px",
                cursor: "pointer",
                background: "#363636",
                width: "100%",
                height: "30px",
                "&:hover": {
                  background: "#222222",
                  color: "#FFF083",
                },
              }}
              onClick={() => changeLanguage("en")}
            >
              English
            </Typography>
            <Typography
              sx={{
                padding: "10px",
                cursor: "pointer",
                background: "#363636",
                width: "100%",
                height: "30px",
                "&:hover": {
                  background: "#222222",
                  color: "#FFF083",
                },
              }}
              onClick={() => changeLanguage("ru")}
            >
              Russian
            </Typography>
            <Typography
              sx={{
                padding: "10px",
                cursor: "pointer",
                background: "#363636",
                width: "100%",
                height: "30px",
                "&:hover": {
                  background: "#222222",
                  color: "#FFF083",
                },
              }}
              onClick={() => changeLanguage("tm")}
            >
              Turkmen
            </Typography>
          </div>
        )}
      </Stack>
    </>
  );
};

export default Language;
