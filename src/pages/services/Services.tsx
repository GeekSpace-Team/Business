import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import Serviceheader from "./Serviceheader";
import ServiceCard from "./ServiceCard";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import axios from "axios";
import { useTranslation } from "react-i18next";

interface Slide {
  id: string;
  title_en: string;
  description_en: string;
  asset: {
    url: string;
  };
  cards: Card[];
}

interface Card {
  id: string;
  title_tm: string;
  title_ru: string;
  title_en: string;
  description_tm: string;
  description_ru: string;
  description_en: string;
  short_tm: string;
  short_ru: string;
  short_en: string;
  type: string;
  order: number;
  url: string;
  assetId: number;
  parentId: number;
  created_at: string;
  updated_at: string;
  asset: {
    id: number;
    url: string;
    type: string;
    blurhash: string;
  };
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Services: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { data, error } = useSWR<{ slides: Slide[] }>(
    "http://95.85.121.153:6856/data/services",
    fetcher
  );

  if (error) return <div>Error loading services</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div style={{ width: "100%" }}>
      <Box sx={{ position: "relative", minHeight: "100vh" }}>
        <Stack
          width="100%"
          height="100%"
          sx={{
            position: "absolute",
            alignItems: "center",
            display: "flex",
          }}
          justifyContent="center"
        >
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            autoplay={{
              delay: 3500,
              pauseOnMouseEnter: true,
            }}
            style={{
              width: "90%",
            }}
            speed={750}
            loop={true}
          >
            {data.slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Grid container mt={0.5} spacing={2}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Serviceheader slide={slide} />
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <ServiceCard cards={slide.cards} />
                  </Grid>
                </Grid>
              </SwiperSlide>
            ))}
            <div className="prev"></div>
            <div className="next"></div>
          </Swiper>
        </Stack>
      </Box>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ position: "absolute", bottom: "3%", width: "100%" }}
        spacing={2}
      >
        <Button
          onClick={() => navigate("/portfolio")}
          startIcon={
            <ArrowRightAltIcon
              sx={{
                color: "orange",
                transform: "rotate(180deg)",
                fontSize: "34px",
                width: "30px",
              }}
            />
          }
          sx={{
            textTransform: "none",
            color: "orange",
            fontWeight: 600,
            fontFamily: "Trebuchet MS, sans-serif",
          }}
        >
          {t("sidebar.portfolio")}
        </Button>

        <Divider sx={{ width: "100px" }}>
          <Typography
            onClick={() => navigate("/")}
            sx={{
              textTransform: "none",
              color: "orange",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "Trebuchet MS, sans-serif",
            }}
          >
            {t("sidebar.home")}
          </Typography>
        </Divider>
        <Button
          onClick={() => navigate("/contact")}
          endIcon={<ArrowRightAltIcon sx={{ color: "orange" }} />}
          sx={{
            textTransform: "none",
            color: "orange",
            fontWeight: 600,
            fontFamily: "Trebuchet MS, sans-serif",
          }}
        >
          {t("sidebar.contact")}
        </Button>
      </Stack>
    </div>
  );
};

export default Services;
