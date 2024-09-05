import { IconButton, Stack, Typography } from "@mui/material";
import { FC, useState, useEffect, useRef } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { swiperStyleXS } from "../../../utils/swiper";
import { arrowIconStyle } from "../../../common/style/commonStyle";

import "swiper/css";
import "swiper/css/autoplay";

const SocialCardXS: FC = () => {
  const { i18n } = useTranslation();
  const [socialData, setSocialData] = useState<any[]>([]);
  const swiperRef = useRef<any>(null); // Ref to control Swiper programmatically

  useEffect(() => {
    const fetchSocialData = async () => {
      try {
        const response = await axios.get("https://ikmaslahat.com/api/data/");
        const socialMediaData = response.data.filter(
          (item: any) => item.type === "social_media"
        );
        setSocialData(socialMediaData);
      } catch (error) {
        console.error("Error fetching social data:", error);
      }
    };
    fetchSocialData();
  }, []);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      // Manually start autoplay
      swiperRef.current.swiper.autoplay.start();
    }
  }, [socialData]);

  const getTitleForCurrentLanguage = (item: any) => {
    switch (i18n.language) {
      case "tm":
        return item.title_tm;
      case "ru":
        return item.title_ru;
      case "en":
        return item.title_en;
      default:
        return item.title_en;
    }
  };

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Swiper
        ref={swiperRef}
        modules={[Autoplay]}
        slidesPerView={1}
        centeredSlides={true}
        style={{ ...swiperStyleXS, position: "relative" }}
        speed={1000}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // Optional: Pause on hover
        }}
      >
        {socialData.map((item) => (
          <SwiperSlide key={item.id}>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                background: "#D9D9D9",
                p: 1,
                borderRadius: "8px",
                mr: 1,
                width: "90%",
              }}
            >
              <Stack direction="row" spacing={3}>
                <img
                  style={{
                    width: "80px",
                    height: "60px",
                    borderRadius: "4px",
                  }}
                  src={item.asset.url}
                  alt={getTitleForCurrentLanguage(item)}
                />
                <Typography
                  component="div"
                  sx={{
                    color: "#222222",
                    fontSize: "12px",
                    lineHeight: 1.5,
                    bottom: 0,
                    width: "150px",
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
                  width: "20px",
                  height: "20px",
                  top: 10,
                  right: 35,
                }}
                onClick={() => window.open(item.url, "_blank")}
              >
                <ArrowRightAltIcon />
              </IconButton>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SocialCardXS;
