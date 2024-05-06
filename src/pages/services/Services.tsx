import { FC, useEffect, useState } from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";
import ServiceCards, {
  ServiceData,
} from "../../components/service/ServiceCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import ServiceSx from "./ServiceSx";
import useServices from "../../hooks/useServices";

interface SizeMap {
  [key: string]: {
    fontSize?: string;
    lineHeight?: string;
    width?: string;
  };
}

const imgWidth: SizeMap = {
  lg: {
    width: "60px",
  },

  md: {
    width: "60px",
  },
  sm: {
    width: "40px",
  },
  xs: {
    width: "30px",
  },
};

const sizeMap: SizeMap = {
  lg: {
    fontSize: "26px",
    lineHeight: "40px",
  },
  md: {
    fontSize: "20px",
    lineHeight: "28px",
  },
  sm: {
    fontSize: "16px",
    lineHeight: "20px",
  },
  xs: {
    fontSize: "14px",
    lineHeight: "14px",
  },
};

const sizeTitle: SizeMap = {
  lg: {
    fontSize: "46px",
    lineHeight: "100px",
  },
  md: {
    fontSize: "36px",
    lineHeight: "70px",
  },
  sm: {
    fontSize: "22px",
    lineHeight: "40px",
  },
  xs: {
    fontSize: "14px",
    lineHeight: "14px",
  },
};

const Services: FC = () => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const navigate = useNavigate();
  const { data } = useServices();

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let size: string;
  let title: string;
  let width: string;
  if (screenHeight >= 900) {
    size = "lg";
    title = "lg";
    width = "lg";
  } else if (screenHeight >= 600) {
    size = "md";
    title = "md";
    width = "md";
  } else if (screenHeight >= 400) {
    size = "sm";
    title = "sm";
    width = "sm";
  } else {
    size = "xs";
    title = "xs";
    width = "xs";
  }

  const serviceCards = (data: any) => {
    const newData = data?.data
      ? [...data.data, ...data.data, data.data[0]]
      : [];
    const cards = [];
    for (let i = 0; i < newData.length; i = i + 4) {
      cards.push(
        <SwiperSlide>
          <Box
            sx={{
              height: screenHeight >= 900 ? "80vh" : "83vh",
              pt: screenHeight >= 900 ? 7 : 4,
              width: "90%",
              pl: "7%",
            }}
          >
            <Stack sx={{ height: "100%", pr: 5 }}>
              <Box
                sx={{
                  width: "100%",
                  height: "40%",
                  position: "relative",
                }}
              >
                <img
                  src="/images/Group 73.png"
                  style={{ width: "100%", height: "100%" }}
                  alt="screenHeight >= 900 ?"
                />
                <Box sx={{ position: "absolute", top: 10, width: "100%" }}>
                  <Stack
                    alignItems="center"
                    width="100%"
                    justifyContent="center"
                  >
                    <Typography
                      sx={{
                        color: "#E9E9E9",
                        ...sizeTitle[title],
                        fontFamily: "Trebuchet MS, sans-serif",
                      }}
                    >
                      Our services
                    </Typography>
                    <Stack
                      sx={{
                        pr: { lg: 15, md: 5, sm: 2 },
                        pl: { lg: 15, md: 5, sm: 2 },
                      }}
                    >
                      <Typography
                        sx={{
                          textAlign: "start",
                          color: "#E9E9E9",
                          ...sizeMap[size],
                          fontFamily: "Trebuchet MS, sans-serif",
                        }}
                      >
                        "Choose from either the Strategic Coach® Signature
                        Program or the 10x Ambition Program™ with Dan Sullivan.
                        Both offer the opportunity to strategize about what’s
                        most important to your business at the moment and leave
                        with concrete next steps and action plans to
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
                <Stack
                  sx={{
                    position: "absolute",
                    width: "100%",
                    display: "flex",
                    mt: { lg: -4, md: -4, sm: -3, xs: -2 },
                    alignItems: "center",
                  }}
                >
                  <img
                    src="/images/Rectangle 14.png"
                    style={{ ...imgWidth[width], zIndex: 110 }}
                    alt="Rectangle 14"
                  />
                </Stack>
              </Box>
              <Box sx={{ height: "55%", mt: 1, width: "100%" }}>
                <ServiceCards
                  data1={newData[i] as ServiceData}
                  data2={newData[i + 1] as ServiceData}
                  data3={newData[i + 2] as ServiceData}
                  data4={newData[i + 3] as ServiceData}
                />
              </Box>
            </Stack>
          </Box>
        </SwiperSlide>
      );
    }
    return cards;
  };

  return (
    <>
      <Box
        width="100%"
        sx={{
          display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
          position: "relative",
        }}
      >
        <Stack
          width="100%"
          sx={{
            display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
            position: "absolute",
          }}
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            navigation
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            style={{
              width: "90%",
            }}
            speed={5000}
            loop={true}
          >
            {data && serviceCards(data)}
            <div className="prev"></div>
            <div className="next"></div>
          </Swiper>
        </Stack>
      </Box>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ position: "absolute", bottom: "5%", width: "100%" }}
        spacing={2}
      >
        <Button
          onClick={() => navigate("/portfolio")}
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
          sx={{
            textTransform: "none",
            color: "#828282",
            fontWeight: 600,
            fontFamily: "Trebuchet MS, sans-serif",
          }}
        >
          Portfolio
        </Button>

        <Divider sx={{ width: "100px" }}>
          <Typography
            onClick={() => navigate("/")}
            sx={{
              textTransform: "none",
              color: "#828282",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "Trebuchet MS, sans-serif",
            }}
          >
            Home
          </Typography>
        </Divider>
        <Button
          onClick={() => navigate("/contact")}
          endIcon={<ArrowRightAltIcon sx={{ color: "#828282" }} />}
          sx={{
            textTransform: "none",
            color: "#828282",
            fontWeight: 600,
            fontFamily: "Trebuchet MS, sans-serif",
          }}
        >
          Contact Us
        </Button>
      </Stack>
      <ServiceSx />
    </>
  );
};

export default Services;
