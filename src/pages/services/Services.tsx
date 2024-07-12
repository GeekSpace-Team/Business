import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import Serviceheader from "./Serviceheader";
import ServiceCard from "./ServiceCard";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

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
              // paddingLeft: "5%",
            }}
            speed={750}
            loop={true}
          >
            <SwiperSlide>
              <Grid container mt={0.5} spacing={2}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Serviceheader />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <ServiceCard />
                </Grid>
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid container mt={0.5} spacing={2}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Serviceheader />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <ServiceCard />
                </Grid>
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid container mt={0.5} spacing={2}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Serviceheader />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <ServiceCard />
                </Grid>
              </Grid>
            </SwiperSlide>
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
          Portfolio
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
            Home
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
          Contact
        </Button>
      </Stack>
    </div>
  );
};

export default Services;
