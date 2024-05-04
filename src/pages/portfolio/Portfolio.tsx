import { FC, useState, useEffect } from "react";
import {
  Stack,
  Card,
  CardMedia,
  CardActionArea,
  Typography,
  Button,
  Divider,
} from "@mui/material";
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
          <Typography
            sx={{
              color: "#222222",
              fontSize: "36px",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Prominent works of my business coaching
          </Typography>
        </Stack>
        <Stack width="90%" height="100%" justifyContent="center">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={10}
            slidesPerView={3}
            navigation
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
            }}
            style={{
              width: "90%",
              paddingLeft: "5%",
            }}
            speed={5000}
            loop={true}
          >
            {portfolioItems.map((item: PortfolioItem, index: number) => (
              <SwiperSlide key={`portfolio_items_key${index}`}>
                <Stack direction="row" alignItems="center">
                  <Card
                    sx={{
                      background: activeIndex === index ? "#222222" : "#363636",
                      borderRadius: "8px",
                      minHeight: screenHeight >= 900 ? "600px" : "360px",
                      width: "85%",
                      "&:hover": {
                        opacity: 0.8,
                      },
                    }}
                    onClick={() => toggleActive(index)}
                  >
                    <CardActionArea>
                      <Stack p={3}>
                        <CardMedia
                          component="img"
                          height={screenHeight >= 900 ? "350px" : "160px"}
                          image={`http://95.85.121.153:1337${item.attributes.image.data.attributes.formats.thumbnail.url}`}
                          alt="green iguana"
                        />
                      </Stack>
                      <Stack p={3}>
                        <Typography
                          sx={{
                            color:
                              activeIndex === index ? "#FFF083" : "#E9E9E9",
                            fontSize: screenHeight >= 900 ? "40px" : "24px",
                            lineHeight: screenHeight >= 900 ? "50px" : "33px",
                            fontWeight: 700,
                            width: "90%",
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
                                sx={{ color: "#fff", textTransform: "none" }}
                                className="moreButton"
                                endIcon={<KeyboardDoubleArrowRightIcon />}
                                onClick={() =>
                                  navigate(`/portfolio/${item.id}`, {
                                    state: { item },
                                  })
                                }
                              >
                                More
                              </Button>
                            </Stack>
                          </>
                        )}
                      </Stack>
                    </CardActionArea>
                  </Card>
                </Stack>
              </SwiperSlide>
            ))}
            <div className="prev"></div>
            <div className="next"></div>
          </Swiper>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          sx={{ position: "absolute", bottom: "5%", width: "100%" }}
        >
          <Button
            onClick={() => navigate("/about")}
            startIcon={
              <ArrowRightAltIcon
                sx={{
                  color: "#828282",
                  transform: "rotate(180deg)",
                  fontSize: "34px",
                  width: "30px",
                }}
              />
            }
            sx={{ textTransform: "none", color: "#828282", fontWeight: 600 }}
          >
            About Us
          </Button>

          <Divider orientation="vertical" flexItem />
          <Button
            onClick={() => navigate("/services")}
            endIcon={<ArrowRightAltIcon sx={{ color: "#828282" }} />}
            sx={{ textTransform: "none", color: "#828282", fontWeight: 600 }}
          >
            Our Service
          </Button>
        </Stack>
      </Stack>
      <PortfolioMini />
    </>
  );
};

export default Portfolio;
