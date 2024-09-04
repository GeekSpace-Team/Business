// Portfolio.tsx
import { FC, useState, useRef } from "react";
import { Stack, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import PortfolioItem from "./components/PortfolioItem";
import PortfolioHeader from "./components/PortfolioHeader";
import PortfolioNavigation from "./components/PortfolioNavigation";
import LoadingHome from "../../components/loading/LoadingHome";

import "swiper/css";
import "swiper/css/navigation";
import useScreenHeight from "../../hooks/useScreenHeight";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { usePortfolioItems } from "./hooks/usePortfolioItems";

const Portfolio: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(2);
  const swiperRef = useRef<any>(null);

  // Using the custom hook to update screen height
  useScreenHeight();

  // Getting screen height from Redux store
  const screenHeight = useSelector(
    (state: RootState) => state.screenHeight.height
  );

  const { portfolioItems, isLoading, isError } = usePortfolioItems();

  const toggleActive = (index: number) => {
    swiperRef.current.autoplay.stop();
    setActiveIndex(index);

    setTimeout(() => {
      swiperRef.current.autoplay.start();
      setActiveIndex(-1);
    }, 10000);
  };

  if (isLoading) {
    return (
      <div style={{ width: "100%" }}>
        <LoadingHome />
      </div>
    );
  }

  if (isError) return <div>Error fetching data</div>;

  return (
    <Stack width="100%" height="100vh">
      <PortfolioHeader />
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
            slidesPerView={3}
            centeredSlides={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
            }}
            slideToClickedSlide={true}
            navigation
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
            }}
            cssMode={true}
            style={{
              width: "92%",
              paddingLeft: "5%",
            }}
            speed={5000}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {portfolioItems
              .filter((it: any) => it.type == "portfolia_item")
              .map((item: any, index: number) => (
                <SwiperSlide key={`portfolio_items_key${index}`}>
                  <PortfolioItem
                    item={item}
                    index={index}
                    screenHeight={screenHeight}
                    activeIndex={activeIndex}
                    onClick={toggleActive}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </Stack>
      </Box>
      <PortfolioNavigation />
    </Stack>
  );
};

export default Portfolio;
