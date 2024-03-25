import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { radius } from "../../common/style/commonStyle";
import ruFlag from "/images/Flag_of_Russia 2.png";
import enFlag from "/images/Group 79 2.png";
import tmFlag from "/images/Flag_of_Turkmenistan 2.png";
import { useTranslation } from "react-i18next";

const Language: FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Box sx={{ background: "#383838", borderRadius: radius, p: 3 }}>
        <Stack direction={"row"} spacing={2}>
          <Stack
            spacing={2}
            sx={{ cursor: "pointer" }}
            onClick={() => changeLanguage("tm")}
          >
            <img src={tmFlag} alt="tmFlag" />
            <Typography sx={{ color: "#B6B6B6", fontWeight: 500 }}>
              {t("TKM")}
            </Typography>
          </Stack>
          <Stack
            spacing={2}
            sx={{ cursor: "pointer" }}
            onClick={() => changeLanguage("ru")}
          >
            <img src={ruFlag} alt="ruFlag" />
            <Typography sx={{ color: "#B6B6B6", fontWeight: 500 }}>
              {t("RUS")}
            </Typography>
          </Stack>
          <Stack
            spacing={2}
            sx={{ cursor: "pointer" }}
            onClick={() => changeLanguage("en")}
          >
            <img src={enFlag} alt="enFlag" />
            <Typography sx={{ color: "#B6B6B6", fontWeight: 500 }}>
              {t("ENG")}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Language;
