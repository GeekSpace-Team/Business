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
import axios from "axios";
import { ImageData } from "../../types/type";

// Define an interface for the image data object

const Home: FC = () => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

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
    data: homeData,
    isLoading: isHomeDataLoading,
    isError: isHomeDataError,
  } = useQuery("homeData", async () => {
    const response = await axios.get(
      "http://95.85.121.153:1337/api/title-texts"
    );
    return response.data;
  });

  const {
    data: imageData,
    isLoading: isImageDataLoading,
    isError: isImageDataError,
  } = useQuery("imageData", async () => {
    const response = await axios.get(
      "http://95.85.121.153:1337/api/banners?populate=image"
    );
    return response.data;
  });

  return (
    <>
      {(isHomeDataLoading || isImageDataLoading) && <div>Loading...</div>}
      {(isHomeDataError || isImageDataError) && <div>Error fetching data</div>}
      {homeData && imageData && (
        <>
          <Stack
            width="100%"
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
                    <Typography
                      sx={{
                        color: "#222222",
                        fontSize: screenHeight >= 900 ? "48px" : "43px",
                        fontWeight: 700,
                      }}
                    >
                      {homeData.data[0].attributes.title}
                    </Typography>
                    <Typography
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
                  {/* Render image from imageData */}
                  <Box
                    sx={{
                      width: "100%",
                      height: "85vh",
                      background: `url(${imageData.data[0].attributes.image.url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "8px",
                      p: 1,
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    <Card
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
            sx={{
              position: "absolute",
              bottom: 0,
              left: screenHeight >= 900 ? -40 : -17,
              background: "#222222",
              borderTopRightRadius: "8px",
              display: { lg: "block", md: "block", sm: "none", xs: "none" },
            }}
          >
            {/* Render additional images from imageData */}
            <Stack direction="row" spacing={1}>
              {imageData.data.slice(1).map((item: ImageData) => (
                <Box
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
                        src={
                          item.attributes.image.data.attributes.formats
                            .thumbnail.url
                        }
                      />
                    )}

                    {/* <img
                      style={{
                        width: "120px",
                        height: screenHeight >= 900 ? "110px" : "60px",
                        borderRadius: "4px",
                      }}
                      src={
                        item.attributes.image.data.attributes.formats.thumbnail
                          .url
                      }
                      alt={item.attributes.title}
                    /> */}
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
