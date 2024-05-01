import { FC, useEffect, useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import LanguageModal from "../../assets/language/LanguageModal";
import Social from "../../components/bottom-social/Social";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import HomeXS from "./HomeXS";
import { useQuery } from "react-query";
import { ImageData } from "../../types/type";
import LoadingHome from "../../components/loading/LoadingHome";
import api from "../../api/api";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";
import "./home.css";

const Home: FC = () => {
  const { i18n } = useTranslation();
  const [animationKey, setAnimationKey] = useState(0);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [backgroundImageUrl, setBackgroundImageUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(
          `/api/banners?populate=*&locale=${i18n.language}`
        );
        const data = response.data.data;
        const homeBanner = data.find(
          (e: {
            attributes: {
              type: string;
              image: { data: { attributes: { url: string } } };
            };
          }) => e.attributes.type === "home_banner"
        );
        if (homeBanner && homeBanner.attributes.image.data.attributes.url) {
          setBackgroundImageUrl(
            `http://95.85.121.153:1337${homeBanner.attributes.image.data.attributes.url}`
          );
        }
      } catch (error) {
        console.error("Error fetching background image:", error);
      }
    };

    fetchData();
  }, [i18n.language]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prevKey) => prevKey + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
    data: homeData,
    isLoading: isHomeDataLoading,
    isError: isHomeDataError,
  } = useQuery("homeData", async () => {
    const response = await api.get(`/api/title-texts?locale=${i18n.language}`);
    return response.data;
  });

  const {
    refetch: fetchBanners,
    data: imageData,
    isLoading: isImageDataLoading,
    isError: isImageDataError,
  } = useQuery("imageData", async () => {
    const response = await api.get(
      `/api/banners?populate=image&locale=${i18n.language}`
    );
    return response.data;
  });

  useEffect(() => {
    fetchBanners();
    fetchTexts();
  }, [i18n.language]);

  return (
    <>
      {(isHomeDataLoading || isImageDataLoading) && <LoadingHome />}
      {(isHomeDataError || isImageDataError) && <div>Error fetching data</div>}
      {homeData && imageData && (
        <>
          <Stack
            width="300%"
            height="85vh"
            sx={{
              display: { lg: "block", md: "block", sm: "none", xs: "none" },
            }}
          >
            <Box>
              <Box
                sx={{
                  background: "#E9E9E9",
                  borderRadius: "8px",
                }}
              >
                <LanguageModal />
              </Box>
              <Grid container spacing={10} pt={2} alignItems="center">
                <Grid item lg={7} md={7} sm={12} xs={12}>
                  <Stack spacing={2}>
                    <TypeAnimation
                      key={animationKey}
                      sequence={[`${homeData.data[0].attributes.title}`]}
                      wrapper="span"
                      speed={30}
                      style={{
                        color: "#222222",
                        fontSize: "2.4em",
                        fontWeight: 900,
                        lineHeight: "2em",
                        width: screenHeight >= 900 ? "60%" : "100%",
                      }}
                    />
                    <Typography
                      data-aos="fade-up"
                      data-aos-delay={"500"}
                      sx={{
                        color: "#6B6B6B",
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "20px",
                        width: screenHeight >= 900 ? "60%" : "100%",
                      }}
                    >
                      {homeData.data[0].attributes.short_description}
                    </Typography>
                    <Social />
                  </Stack>
                </Grid>
                <Grid item lg={5} pr="3%" md={5} sm={12} xs={12}>
                  <Box
                    className="bounce"
                    sx={{
                      width: "100%",
                      height: "85vh",
                      backgroundImage: `url(${backgroundImageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "8px",
                      p: 1,
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    <Card
                      data-aos="fade-left"
                      data-aos-delay={"700"}
                      sx={{
                        width: "100%",
                        height: "auto",
                        p: 1,
                        borderRadius: "8px",
                        background: "#D9D9D9",
                      }}
                    >
                      <CardActionArea>
                        <CardContent>
                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            sx={{ position: "relative" }}
                          >
                            <Typography
                              sx={{
                                color: "#222222",
                                fontSize: "20px",
                                fontWeight: 700,
                                lineHeight: "30px",
                              }}
                            >
                              Iskander <br /> Kerimov
                            </Typography>
                            <Typography
                              sx={{
                                color: "#676767",
                                fontSize: "15px",
                                fontWeight: 500,
                                lineHeight: "18px",
                                position: "absolute",
                                pl: "40%",
                                pt: "2%",
                              }}
                            >
                              Business Couch <br /> with 7 years of experience
                            </Typography>
                            <IconButton>
                              <ArrowRightAltIcon
                                sx={{
                                  color: "#828282",
                                  transform: "rotate(320deg)",
                                  fontSize: "34px",
                                  width: "30px",
                                  position: "absolute",
                                  top: 0,
                                }}
                              />
                            </IconButton>
                          </Stack>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Stack>
          <Stack
            width="auto"
            p={1}
            // data-aos={`fade-down`}
            // data-aos-delay={"400"}
            sx={{
              position: "absolute",
              bottom: 0,
              // left: "10%",
              left: screenHeight >= 900 ? -40 : -17,
              background: "#222222",
              borderTopRightRadius: "8px",
              borderTopLeftRadius: "8px",
              display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Stack
              direction="row"
              justifyContent={"center"}
              width="100%"
              spacing={1}
            >
              {imageData.data.slice(1).map((item: ImageData) => (
                <Box
                  data-aos={`fade-down`}
                  data-aos-delay={`${item.id * 200}`}
                  key={item.id}
                  sx={{
                    background: "#D9D9D9",
                    p: 1,
                    borderRadius: "8px",
                    width: screenHeight >= 900 ? "450px" : "330px",
                  }}
                >
                  <Stack direction="row" spacing={1}>
                    {item.attributes.image.data.attributes.formats.thumbnail
                      .url && (
                      <img
                        style={{
                          width: "120px",
                          height: screenHeight >= 900 ? "110px" : "60px",
                          borderRadius: "4px",
                        }}
                        src={`http://95.85.121.153:1337${item.attributes.image.data.attributes.formats.thumbnail.url}`}
                      />
                    )}
                    <Stack sx={{ position: "relative", width: "100%" }}>
                      <IconButton
                        sx={{
                          width: screenHeight >= 900 ? "40px" : "30px",
                          height: screenHeight >= 900 ? "40px" : "30px",
                          position: "absolute",
                          top: 0,
                          right: 0,
                        }}
                      >
                        <ArrowRightAltIcon
                          sx={{
                            color: "#828282",
                            transform: "rotate(320deg)",
                            fontSize: screenHeight >= 900 ? "40px" : "34px",
                            width: screenHeight >= 900 ? "30px" : "20px",
                          }}
                        />
                      </IconButton>
                      <Typography
                        sx={{
                          color: "#222222",
                          fontSize: screenHeight >= 900 ? "18px" : "12px",
                          lineHeight: "20px",
                          position: "absolute",
                          bottom: screenHeight >= 900 ? 5 : 0,
                        }}
                      >
                        {item.attributes.title}
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
              ))}
            </Stack>
          </Stack>
        </>
      )}

      <Box
        sx={{
          display: { md: "none", lg: "none", sm: "flex", xs: "flex" },
          flexDirection: "column",
          p: 3,
        }}
      >
        <HomeXS />
      </Box>
    </>
  );
};

export default Home;
