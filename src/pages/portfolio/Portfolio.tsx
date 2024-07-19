import { FC, useState, useEffect, useRef } from "react";
import { Stack, Typography, Button, Divider, Box } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import useSWR from "swr";
import LoadingHome from "../../components/loading/LoadingHome";
import { useTranslation } from "react-i18next";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import "swiper/css";
import "swiper/css/navigation";

const Portfolio: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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
    "http://95.85.121.153:6856/data",
    fetcher
  );

  useEffect(() => {
    if (portfolioItems) {
      setItems(portfolioItems);
    }
  }, [portfolioItems, i18n.language]);

  const toggleActive = (index: number) => {
    // const centerIndex = Math.floor(items.length / 3);
    // if (index === centerIndex) {
    //   setActiveIndex(activeIndex === index ? null : index);
    //   return;
    // }

    // const newItems = [...items];
    // [newItems[centerIndex], newItems[index]] = [
    //   newItems[index],
    //   newItems[centerIndex],
    // ];
    // setItems(newItems);
    setActiveIndex(index);

    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
      swiperRef.current.slideTo(index);
    }

    if (swiperRef.current) {
      swiperRef.current.autoplay.play();
    }
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
        <Stack pt={5} mb={-7}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "orange",
                fontSize: "36px",
                fontWeight: 700,
                textAlign: "center",
                fontFamily: "Trebuchet MS, sans-serif",
                position: "absolute",
              }}
            >
              {t("portfolio.title")}
            </Typography>
          </Box>
        </Stack>
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
              navigation
              autoplay={{
                delay: 750,
                pauseOnMouseEnter: true,
              }}
              style={{
                width: "92%",
                paddingLeft: "5%",
              }}
              speed={750}
              loop={false}
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
                          style={{ width: "100%", height: "180px" }}
                          src={item.asset.url}
                        />
                        <Stack p={3}>
                          <Typography
                            sx={{
                              color:
                                activeIndex === index ? "orange" : "#E9E9E9",
                              fontSize: screenHeight >= 900 ? "30px" : "24px",
                              lineHeight: screenHeight >= 900 ? "50px" : "33px",
                              fontWeight: 700,
                              width: "90%",
                              fontFamily: "Trebuchet MS, sans-serif",
                            }}
                          >
                            {item[`title_${i18n.language}`]} {activeIndex}
                            {index}
                          </Typography>
                          {activeIndex === index && (
                            <>
                              <Typography
                                sx={{
                                  color: "#E9E9E9",
                                  fontSize:
                                    screenHeight >= 900 ? "30px" : "20px",
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
                                    navigate(`/portfolio/${item.id}`, {
                                      state: { item },
                                    });
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
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ position: "absolute", bottom: "5%", width: "100%" }}
        spacing={2}
      >
        <Button
          onClick={() => navigate("/about")}
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
          {t("sidebar.about")}
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
          onClick={() => navigate("/services")}
          endIcon={<ArrowRightAltIcon sx={{ color: "orange" }} />}
          sx={{
            textTransform: "none",
            color: "orange",
            fontWeight: 600,
            fontFamily: "Trebuchet MS, sans-serif",
          }}
        >
          {t("sidebar.services")}
        </Button>
      </Stack>
    </>
  );
};

export default Portfolio;
