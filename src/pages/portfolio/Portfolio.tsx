import { FC, useState, useEffect, useRef } from "react";
import { Stack, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import useSWR from "swr";
import LoadingHome from "../../components/loading/LoadingHome";
import { useTranslation } from "react-i18next";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import "swiper/css";
import "swiper/css/navigation";
import PortfolioNavigation from "./components/PortfolioNavigation";
import PortfolioHeader from "./components/PortfolioHeader";

const Portfolio: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(2);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [items, setItems] = useState<any[]>([]);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: portfolioItems, error } = useSWR(
    "https://ikmaslahat.com/api/data",
    fetcher
  );

  useEffect(() => {
    if (portfolioItems) {
      setItems(portfolioItems);
    }
  }, [portfolioItems, i18n.language]);

  const toggleActive = (index: number) => {
    swiperRef.current.autoplay.stop();
    setActiveIndex(index);

    setTimeout(() => {
      swiperRef.current.autoplay.start();
      setActiveIndex(-1);
      // alert("done");
    }, 10000);
  };

  if (!portfolioItems) {
    return (
      <div style={{ width: "100%" }}>
        <LoadingHome />
      </div>
    );
  }
  if (error) return <div>Error fetching data</div>;

  return (
    <>
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
              {items
                .filter((it) => it.type == "portfolia_item")
                .map((item: any, index: number) => (
                  <SwiperSlide key={`portfolio_items_key${index}`}>
                    <Stack direction="row" alignItems="center">
                      <Box
                        sx={{
                          background: "rgba(10, 10, 14, 0.7)",
                          minHeight: screenHeight >= 900 ? "600px" : "300px",
                          width: "85%",
                          cursor: "pointer",
                        }}
                        onClick={() => toggleActive(index)}
                      >
                        <img
                          style={{ width: "100%", height: "150px" }}
                          src={item.asset.url}
                        />
                        <Stack p={3}>
                          <Typography
                            sx={{
                              color:
                                activeIndex === index ? "orange" : "#E9E9E9",
                              fontSize: {
                                lg: "26px",
                                md: "22px",
                                sm: "20px",
                                xs: "18px",
                              },
                              lineHeight: screenHeight >= 900 ? "50px" : "33px",
                              fontWeight: 700,
                              width: "90%",
                              fontFamily: "Trebuchet MS, sans-serif",
                            }}
                          >
                            {item[`title_${i18n.language}`]}
                          </Typography>
                          {activeIndex === index && (
                            <>
                              <Typography
                                sx={{
                                  color: "#E9E9E9",
                                  fontSize: {
                                    lg: "22px",
                                    md: "20px",
                                    sm: "18px",
                                    xs: "16px",
                                  },
                                  lineHeight:
                                    screenHeight >= 900 ? "40px" : "26px",
                                  fontWeight: 600,
                                  fontFamily: "Trebuchet MS, sans-serif",
                                }}
                              >
                                {item[`short_${i18n.language}`].slice(0, 50)}...
                              </Typography>
                              <Stack
                                mt={2}
                                direction="row"
                                justifyContent="flex-end"
                              >
                                <Button
                                  sx={{
                                    color: "#fff",
                                    textTransform: "none",
                                    fontFamily: "Trebuchet MS, sans-serif",
                                  }}
                                  className="moreButton"
                                  endIcon={
                                    <KeyboardDoubleArrowRightIcon className="leftArrow" />
                                  }
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(
                                      `/portfolio/${item.title_en.replace(/ /g, "-")}`,
                                      {
                                        state: { item },
                                      }
                                    );
                                  }}
                                >
                                  {t("common.read_more")}
                                </Button>
                              </Stack>
                            </>
                          )}
                        </Stack>
                      </Box>
                    </Stack>
                  </SwiperSlide>
                ))}
              <div className="prev"></div>
              <div className="next"></div>
            </Swiper>
          </Stack>
        </Box>
        <PortfolioNavigation />
      </Stack>
    </>
  );
};

export default Portfolio;
