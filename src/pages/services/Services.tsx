import { Box, Grid, Stack } from "@mui/material";
import Serviceheader from "./Serviceheader";
import ServiceCard from "./ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import useSWR from "swr";
import axios from "axios";
import { Slide } from "./types/serviceTypeAndInterface";
import ServiceNavigation from "./components/ServiceNavigation";
import { useState } from "react";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Services: React.FC = () => {
  const { data, error } = useSWR<{ slides: Slide[] }>(
    "https://ikmaslahat.com/api/data/services",
    fetcher
  );

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loopCount, setLoopCount] = useState<number>(0);

  // Function to handle slide change
  const handleSlideChange = (swiper: any) => {
    const newSlideIndex = swiper.activeIndex;

    if (swiper.isEnd && newSlideIndex === 0) {
      // We've looped back to the start
      setLoopCount(loopCount + 1);
    } else if (
      swiper.isBeginning &&
      newSlideIndex === swiper.slides.length - 1
    ) {
      // We've looped back to the end
      setLoopCount(loopCount + 1);
    }

    setCurrentSlide(newSlideIndex);
  };

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
          justifyContent={{
            lg: "center",
            md: "center",
            sm: "flex-start",
            xs: "flex-start",
          }}
        >
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            style={{
              width: "90%",
            }}
            speed={750}
            loop={true}
            onSlideChange={handleSlideChange} // Set the slide change handler
          >
            {data.slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Grid container mt={0.5} spacing={2}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Serviceheader slide={slide} />
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <ServiceCard
                      cards={slide.cards}
                      currentSlide={currentSlide}
                      loopCount={loopCount}
                    />
                  </Grid>
                </Grid>
              </SwiperSlide>
            ))}
            <div className="prev"></div>
            <div className="next"></div>
          </Swiper>
        </Stack>
      </Box>
      <ServiceNavigation />
    </div>
  );
};

export default Services;
