import { Box, Grid, Stack } from "@mui/material";
import Serviceheader from "./Serviceheader";
import ServiceCard from "./ServiceCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Services = () => {
  return (
    <div style={{ width: "100%" }}>
      <Box sx={{ position: "relative", height: "100vh" }}>
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
    </div>
  );
};

export default Services;
