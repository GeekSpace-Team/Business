import { FC, useState, useEffect } from "react";
import { Stack, Typography, Button, Divider, Box } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import PortfolioMini from "./PortfolioMini";
import { useQuery } from "react-query";
import LoadingHome from "../../components/loading/LoadingHome";
import { useTranslation } from "react-i18next";
import api from "../../api/api";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import "swiper/css";
import "swiper/css/navigation";
import { PortfolioItem } from "../../types/type";

const Portfolio: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const {
    refetch: fetchTexts,
    data: portfolioItems,
    isLoading,
    isError,
  } = useQuery("portfolioItems", async () => {
    const response = await api.get(
      `/api/portfolios?populate=image&locale=${i18n.language}`
    );
    return response.data.data;
  });

  const toggleActive = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    fetchTexts();
  }, [i18n.language]);

  if (isLoading)
    return (
      <div style={{ width: "100%" }}>
        <LoadingHome />
      </div>
    );
  if (isError) return <div>Error fetching data</div>;

  return (
    <>
      <Stack
        width="100%"
        sx={{ display: { lg: "flex", md: "flex", sm: "none", xs: "none" } }}
        height="100vh"
      >
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
              Prominent works of my business coaching
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
              loop={true}
            >
              {portfolioItems.map((item: PortfolioItem, index: number) => (
                <SwiperSlide key={`portfolio_items_key${index}`}>
                  <Stack direction="row" alignItems="center">
                    <Box
                      sx={{
                        background: "rgba(10, 10, 14, 0.7)",
                        minHeight: screenHeight >= 900 ? "600px" : "400px",
                        width: "85%",
                      }}
                      onClick={() => toggleActive(index)}
                    >
                      <img
                        style={{ width: "100%", height: "250px" }}
                        src={`http://95.85.121.153:1337${item.attributes.image.data.attributes.formats.thumbnail.url}`}
                      />
                      <Stack p={3}>
                        <Typography
                          sx={{
                            color: activeIndex === index ? "orange" : "#E9E9E9",
                            fontSize: screenHeight >= 900 ? "40px" : "24px",
                            lineHeight: screenHeight >= 900 ? "50px" : "33px",
                            fontWeight: 700,
                            width: "90%",
                            fontFamily: "Trebuchet MS, sans-serif",
                          }}
                        >
                          {activeIndex
                            ? item.attributes.title
                            : item.attributes.title.slice(0, 45)}
                          ...
                        </Typography>
                        {activeIndex === index && (
                          <>
                            <Typography
                              sx={{
                                color: "#E9E9E9",
                                fontSize: screenHeight >= 900 ? "30px" : "20px",
                                lineHeight:
                                  screenHeight >= 900 ? "40px" : "26px",
                                fontWeight: 600,
                                fontFamily: "Trebuchet MS, sans-serif",
                              }}
                            >
                              {item.attributes.short_description.slice(0, 50)}
                              ...
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
                                onClick={() =>
                                  navigate(`/portfolio/${item.id}`, {
                                    state: { item },
                                  })
                                }
                              >
                                Read More
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
          About Us
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
          onClick={() => navigate("/services")}
          endIcon={<ArrowRightAltIcon sx={{ color: "orange" }} />}
          sx={{
            textTransform: "none",
            color: "orange",
            fontWeight: 600,
            fontFamily: "Trebuchet MS, sans-serif",
          }}
        >
          Our Service
        </Button>
      </Stack>
      <PortfolioMini />
    </>
  );
};

export default Portfolio;
