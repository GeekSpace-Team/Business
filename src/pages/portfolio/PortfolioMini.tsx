import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useTranslation } from "react-i18next";
import api from "../../api/api";
import { useQuery } from "react-query";
import LoadingHome from "../../components/loading/LoadingHome";

const PortfolioMini: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const { i18n } = useTranslation();

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

  const handleAccordionClick = (index: number) => {
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
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ display: { lg: "none", md: "none", sm: "flex", xs: "flex" } }}
      >
        <Typography
          sx={{
            textAlign: "center",
            color: "#222222",
            fontSize: "24px",
            fontWeight: 700,
            width: "70%",
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
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          style={{
            width: "100%",
          }}
          speed={5000}
          loop={true}
        >
          {portfolioItems.map((item: any, index: number) => (
            <SwiperSlide key={`portfolio_items_mini_key${index}`}>
              <Box
                sx={{
                  background: activeIndex === index ? "#222222" : "#828282",
                  borderRadius: "8px",
                  p: 3,
                  width: "80%",
                  mr: 5,
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
                <Accordion
                  expanded={activeIndex === index}
                  onChange={() => handleAccordionClick(index)}
                  sx={{
                    background: activeIndex === index ? "#222222" : "#828282",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: activeIndex === index ? "#FFF083" : "#e9e9e9",
                          fontSize: "40px",
                        }}
                      />
                    }
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography
                      sx={{
                        color: activeIndex === index ? "#FFF083" : "#e9e9e9",
                        fontSize: "24px",
                        fontWeight: 700,
                      }}
                    >
                      {item.attributes.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
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
                  </AccordionDetails>
                </Accordion>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{ display: { lg: "none", md: "none", sm: "flex", xs: "flex" } }}
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
          Previous
        </Button>

        <Divider orientation="vertical" />
        <Button
          onClick={() => navigate("/services")}
          endIcon={<ArrowRightAltIcon sx={{ color: "#828282" }} />}
          sx={{ textTransform: "none", color: "#828282", fontWeight: 600 }}
        >
          Read more
        </Button>
      </Stack>
    </>
  );
};

export default PortfolioMini;
