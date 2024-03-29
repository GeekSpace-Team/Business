import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { portfolioItems } from "./portfolioItems";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const PortfolioMini: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleAccordionClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="center">
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
      <Stack p={5}>
        <Swiper
          modules={[Autoplay]}
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
          {portfolioItems.map((item, index) => (
            <SwiperSlide key={`portfolio_items_mini_key${index}`}>
              <Box
                sx={{
                  background: activeIndex === index ? "#222222" : "#828282",
                  borderRadius: "8px",
                  p: 3,
                }}
              >
                <img
                  src={item.image}
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
                      {item.title}
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
                      {item.description}
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
