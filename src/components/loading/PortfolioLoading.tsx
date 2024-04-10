import { FC } from "react";
import { Grid, Skeleton, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const PortfolioLoading: FC = () => {
  return (
    <div>
      <Stack
        direction="row"
        pt={5}
        width="80%"
        mb={-20}
        justifyContent="center"
      >
        <Skeleton
          width="50%"
          height="10vh"
          animation="wave"
          sx={{ borderRadius: "8px", height: "100vh" }}
        />
      </Stack>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{
          width: "90%",
        }}
        speed={1000}
        loop={true}
      >
        <Grid container spacing={5}>
          <SwiperSlide>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Skeleton
                width="70%"
                height="100vh"
                animation="wave"
                sx={{ borderRadius: "8px", height: "100vh" }}
              />
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Skeleton
                width="70%"
                height="100vh"
                animation="wave"
                sx={{ borderRadius: "8px", height: "100vh" }}
              />
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Skeleton
                width="70%"
                height="100vh"
                animation="wave"
                sx={{ borderRadius: "8px", height: "100vh" }}
              />
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Skeleton
                width="70%"
                height="100vh"
                animation="wave"
                sx={{ borderRadius: "8px", height: "100vh" }}
              />
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Skeleton
                width="70%"
                height="100vh"
                animation="wave"
                sx={{ borderRadius: "8px", height: "100vh" }}
              />
            </Grid>
          </SwiperSlide>
        </Grid>
      </Swiper>
    </div>
  );
};

export default PortfolioLoading;
