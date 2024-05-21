import { Box, IconButton, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useTranslation } from "react-i18next";
import api from "../../api/api";
import { useQuery } from "react-query";
import LoadingHome from "../../components/loading/LoadingHome";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { PortfolioItem } from "../../types/type";

const PortfolioMini: FC = () => {
  const { i18n } = useTranslation();
  const [showDescription, setShowDescription] = useState<number | null>(null);

  const handleShowDescription = (index: number) => {
    setShowDescription(showDescription === index ? null : index);
  };

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
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ display: { lg: "none", md: "none", sm: "flex", xs: "flex" } }}
      >
        <Typography
          sx={{
            textAlign: "center",
            color: "#fff",
            fontSize: "24px",
            fontWeight: 700,
            width: "70%",
            fontFamily: "Trebuchet MS, sans-serif",
          }}
        >
          Prominent works of my business coaching
        </Typography>
      </Stack>
      <Stack
        p={5}
        sx={{ display: { lg: "none", md: "none", sm: "flex", xs: "flex" } }}
      >
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
          }}
          style={{
            width: "100%",
          }}
          speed={1000}
          loop={true}
        >
          {portfolioItems.map((item: PortfolioItem, index: number) => (
            <SwiperSlide key={`portfolio_items_mini_key${index}`}>
              <Box
                sx={{
                  background: "rgba(10, 10, 14, 0.7)",
                  borderRadius: "8px",
                  width: "100%",
                  mr: 5,
                  minHeight: "400px",
                }}
              >
                <img
                  src={`http://95.85.121.153:1337${item.attributes.image.data.attributes.formats.thumbnail.url}`}
                  style={{
                    width: "100%",
                    height: "260px",
                    borderRadius: "8px",
                  }}
                  alt="321467.jpg"
                />
                <Stack
                  onClick={() => handleShowDescription(index)}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  p={3}
                >
                  <Stack>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography
                        sx={{
                          color:
                            showDescription === index ? "orange" : "#e9e9e9",
                          fontSize: "20px",
                          fontWeight: 700,
                          fontFamily: "Trebuchet MS, sans-serif",
                        }}
                      >
                        {item.attributes.title.slice(0, 40)}...
                      </Typography>
                      <IconButton>
                        {showDescription === index ? (
                          <ExpandLessIcon
                            sx={{
                              color: showDescription ? "orange" : "#E9E9E9",
                            }}
                          />
                        ) : (
                          <ExpandMoreIcon
                            sx={{
                              color: showDescription ? "orange" : "#E9E9E9",
                            }}
                          />
                        )}
                      </IconButton>
                    </Stack>
                    {showDescription && (
                      <>
                        <Typography
                          sx={{
                            color: "#E9E9E9",
                            fontSize: "20px",
                            fontWeight: 600,
                            lineHeight: "30px",
                          }}
                        >
                          {item.attributes.short_description}
                        </Typography>
                      </>
                    )}
                  </Stack>
                </Stack>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
    </>
  );
};

export default PortfolioMini;
