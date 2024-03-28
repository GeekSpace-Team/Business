import { FC, useState, useEffect } from "react";
import {
  Stack,
  Card,
  CardMedia,
  CardActionArea,
  Typography,
  Button,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";

import { portfolioItems } from "./portfolioItems";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Portfolio: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const navigate = useNavigate();

  const toggleActive = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Stack width="100%">
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
      <Stack width="100%" height="100%" justifyContent="center">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
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
            <SwiperSlide key={`portfolio_items_key${index}`}>
              <Card
                sx={{
                  background: activeIndex === index ? "#222222" : "#828282",
                  borderRadius: "8px",
                }}
                onClick={() => toggleActive(index)}
              >
                <CardActionArea>
                  <Stack p={3}>
                    <CardMedia
                      component="img"
                      height={screenHeight >= 900 ? "350px" : "160px"}
                      image={item.image}
                      alt="green iguana"
                    />
                  </Stack>
                  <Stack p={3}>
                    <Typography
                      sx={{
                        color: activeIndex === index ? "#FFF083" : "#E9E9E9",
                        fontSize: screenHeight >= 900 ? "40px" : "24px",
                        lineHeight: screenHeight >= 900 ? "50px" : "33px",
                        fontWeight: 700,
                        width: "90%",
                      }}
                    >
                      {item.title}
                    </Typography>
                    {activeIndex === index && (
                      <Typography
                        sx={{
                          color: "#E9E9E9",
                          fontSize: screenHeight >= 900 ? "30px" : "20px",
                          lineHeight: screenHeight >= 900 ? "40px" : "26px",
                          fontWeight: 600,
                        }}
                      >
                        {item.description}
                      </Typography>
                    )}
                  </Stack>
                </CardActionArea>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ position: "absolute", bottom: "5%", width: "85%" }}
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

        <div
          style={{ height: "35px", width: "1.5px", background: "gray" }}
        ></div>
        <Button
          onClick={() => navigate("/services")}
          endIcon={<ArrowRightAltIcon sx={{ color: "#828282" }} />}
          sx={{ textTransform: "none", color: "#828282", fontWeight: 600 }}
        >
          Read more
        </Button>
      </Stack>
    </Stack>
  );
};

export default Portfolio;
