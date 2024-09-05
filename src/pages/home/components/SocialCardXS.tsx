import { Stack, Typography } from "@mui/material";
import { FC, useState, useEffect, useRef } from "react";
import axios from "axios";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { swiperStyleXS } from "../../../utils/swiper";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SocialCardXS: FC = () => {
  const { i18n } = useTranslation();
  const [socialData, setSocialData] = useState<any[]>([]);
  const sliderRef = useRef(null); // Ref to control Slider programmatically

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
    if (sliderRef.current) {
      (sliderRef.current as Slider).slickPlay(); // Cast to Slider type
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

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div style={{ ...swiperStyleXS, position: "relative" }}>
        <Slider ref={sliderRef} {...settings}>
          {socialData.map((item) => (
            <div key={item.id}>
              <Stack
                onClick={() => window.open(item.url, "_blank")}
                direction="row"
                spacing={3}
                sx={{
                  background: "#D9D9D9",
                  p: 1,
                  borderRadius: "8px",
                  mr: 2,
                  width: "95%",
                }}
              >
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
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SocialCardXS;
