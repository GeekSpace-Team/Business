import { Box, IconButton, Stack, Typography } from "@mui/material";
import { FC, useState, useEffect } from "react"; // Removed useContext as it was not used
import {
  arrowIconStyle,
  homeItemsStyle,
} from "../../../common/style/commonStyle";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";
import { swiperStyle } from "../../../utils/swiper";

const SocialCards: FC = () => {
  const { i18n } = useTranslation();
  const screenHeight = useSelector(
    (state: RootState) => state.screenHeight.height
  );
  const [socialData, setSocialData] = useState<any[]>([]); // Changed to any[] to match the expected type

  useEffect(() => {
    const fetchSocialData = async () => {
      const response = await axios.get("https://ikmaslahat.com/api/data/");
      const socialMediaData = response.data.filter(
        (item: any) => item.type === "social_media"
      );
      setSocialData(socialMediaData);
    };
    fetchSocialData();
  }, []);

  const getTitleForCurrentLanguage = (item: any) => {
    switch (i18n.language) {
      case "tm":
        return item.title_tm;
      case "ru":
        return item.title_ru;
      case "en":
        return item.title_en;
      default:
        return item.title_en; // Fallback to English
    }
  };

  return (
    <div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={2}
        navigation
        style={{
          ...swiperStyle,
          position: "absolute",
        }}
        speed={1000}
        loop={true}
      >
        <Stack
          direction="row"
          spacing={1}
          sx={{
            ...homeItemsStyle,
            left: screenHeight >= 900 ? 60 : 50,
            display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
          }}
        >
          {socialData?.map((item) => (
            <Box key={item.id}>
              <SwiperSlide key={`portfolio_items_key${item}`}>
                <Stack
                  direction="row"
                  justifyContent={"space-between"}
                  sx={{
                    background: "#D9D9D9",
                    p: 1,
                    borderRadius: "8px",
                    mr: 1,
                  }}
                >
                  <Stack direction="row" spacing={3}>
                    <img
                      style={{
                        width: "120px",
                        height: screenHeight >= 900 ? "110px" : "60px",
                        borderRadius: "4px",
                      }}
                      src={item.asset.url}
                    />
                    <Typography
                      component="div"
                      sx={{
                        color: "#222222",
                        fontSize: {
                          lg: screenHeight >= 900 ? "18px" : "12px",
                          xs: "12px",
                        },
                        lineHeight: screenHeight >= 900 ? 2 : 1.5,
                        bottom: screenHeight >= 900 ? 5 : 0,
                        width: {
                          lg: screenHeight >= 900 ? "250px" : "150px",
                          xs: "150px",
                        },
                        fontFamily: "Trebuchet MS, sans-serif",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: getTitleForCurrentLanguage(item),
                      }}
                    />
                  </Stack>
                  <IconButton
                    sx={{
                      ...arrowIconStyle,
                      width: "40px",
                      height: "40px",
                      top: -5,
                      right: 25,
                    }}
                    onClick={() => window.open(item.url, "_blank")}
                  >
                    <ArrowRightAltIcon />
                  </IconButton>
                </Stack>
              </SwiperSlide>
            </Box>
          ))}
        </Stack>
      </Swiper>
    </div>
  );
};

export default SocialCards;
