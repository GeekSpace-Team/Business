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
import { useEffect, useState, useRef } from "react";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Services: React.FC = () => {
  const [showDescription, setShowDescription] = useState<number | null>(null);
  const [autoplayDelay, setAutoplayDelay] = useState<number | null>(5000); // Default 5 seconds
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null); // To track timeout for closing description

  const { data, error } = useSWR<{ slides: Slide[] }>(
    "https://ikmaslahat.com/api/data/services",
    fetcher
  );

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loopCount, setLoopCount] = useState<number>(0);
  const swiperRef = useRef<any>(null); // Ref to control swiper programmatically

  useEffect(() => {
    setShowDescription(null);
    if (timeoutRef.current) clearTimeout(timeoutRef.current); // Clear any previous timeouts when slide changes
    setAutoplayDelay(5000); // Reset autoplay delay back to default
  }, [currentSlide, loopCount]);

  const handleClick = (index: number) => {
    if (showDescription === index) {
      // Close the description
      setShowDescription(null);
      setAutoplayDelay(5000); // Reset autoplay delay to default when closing
    } else {
      // Open the description and stop autoplay temporarily
      setShowDescription(index);
      setAutoplayDelay(10000); // Set delay to 10 seconds after clicking

      // Close the description after 10 seconds and move to the next slide
      if (timeoutRef.current) clearTimeout(timeoutRef.current); // Clear any previous timeouts
      timeoutRef.current = setTimeout(() => {
        setShowDescription(null);
        swiperRef.current?.slideNext(); // Move to the next slide after timeout
      }, 10000); // 10 seconds delay
    }
  };

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
            ref={swiperRef}
            modules={[Autoplay, Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            autoplay={{
              delay: autoplayDelay ?? 5000, // Use dynamic delay for autoplay
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
                      handleClick={handleClick}
                      showDescription={showDescription}
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
