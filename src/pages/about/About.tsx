import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";
import AboutMini from "./AboutMini";
import { useQuery } from "react-query";
import LoadingComponent from "../../components/loading/LoadingComponent";
import api from "../../api/api";
import { useTranslation } from "react-i18next";

export interface ContentData {
  id: number;
  attributes: {
    title: string;
    description: string | null;
    short_description: string;
    is_active: boolean;
    type: "about_us_title" | "about_us_description"; // Updated with new type attribute
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: "en" | "tm" | "ru";
    image: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string | null;
          caption: string | null;
          width: number;
          height: number;
          formats: {
            thumbnail?: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string | null;
              width: number;
              height: number;
              size: number;
              url: string;
            };
            small?: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string | null;
              width: number;
              height: number;
              size: number;
              url: string;
            };
            medium?: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string | null;
              width: number;
              height: number;
              size: number;
              url: string;
            };
          };
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: string | null;
          provider: string;
          provider_metadata: string | null;
          createdAt: string;
          updatedAt: string;
          blurhash: string;
        };
      };
    };
  };
}

const About: FC = () => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const fetchContentData = async () => {
    try {
      const { data } = await api.get(
        `/api/title-texts?locale=${i18n.language}&populate=image`
      );

      const filteredData = data.data.filter(
        (item: ContentData) =>
          item.attributes &&
          (item.attributes.type === "about_us_title" ||
            item.attributes.type === "about_us_description")
      );

      return filteredData;
    } catch (error: any) {
      throw new Error(`Failed to fetch content data: ${error.message}`);
    }
  };

  const {
    refetch: fetchTexts,
    data: contentData,
    error,
    isLoading,
  } = useQuery<ContentData[], Error>("contentData", fetchContentData);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    fetchTexts();
  }, [i18n.language]);

  if (isLoading)
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LoadingComponent />
      </div>
    );
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <>
      <Stack
        sx={{
          width: "300%",
          height: "auto",
          display: { lg: "block", md: "block", sm: "none", xs: "none" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            mt: screenHeight >= 900 ? 7 : 2,
          }}
        >
          <Typography
            data-aos={`fade-down`}
            data-aos-delay={"400"}
            sx={{
              textTransform: "uppercase",
              fontSize: screenHeight >= 900 ? "36px" : "30px",
              fontWeight: 700,
              fontFamily: "Trebuchet MS, sans-serif",
            }}
          >
            who we are
          </Typography>
        </Box>

        <>
          {contentData?.map((item) => (
            <>
              {item.attributes.type === "about_us_title" && (
                <Box
                  data-aos="fade-left"
                  data-aos-delay={"500"}
                  key={item.id}
                  sx={{
                    background: "#222222",
                    p: screenHeight >= 900 ? 4 : 2,
                    width: "90%",
                    height: "auto",
                    borderRadius: "8px 0px 0px 8px",
                    mt: screenHeight >= 900 ? 5 : 2,
                  }}
                >
                  <Grid container spacing={1}>
                    <Grid item lg={2} md={4} sm={6} xs={12}>
                      {item.attributes.image?.data?.attributes?.formats?.medium
                        ?.url ? (
                        <img
                          style={{
                            width: "90%",
                            borderRadius: "8px",
                            height: screenHeight >= 900 ? "260px" : "180px",
                          }}
                          src={`http://95.85.121.153:1337${item.attributes.image.data.attributes.formats.medium.url}`}
                          alt={
                            item.attributes.image.data.attributes
                              .alternativeText || "Image"
                          }
                        />
                      ) : null}
                    </Grid>
                    <Grid item lg={9} md={8} sm={6} xs={12}>
                      <Typography
                        sx={{
                          fontSize: screenHeight >= 900 ? "32px" : "24px",
                          fontWeight: 700,
                          lineHeight: screenHeight >= 900 ? "39px" : "30px",
                          fontFamily: "Trebuchet MS, sans-serif",
                          color: "#E7EAFF",
                          width: {
                            lg: "30%",
                            md: "30%",
                            sm: "100%",
                            xs: "100%",
                          },
                          textAlign: {
                            lg: "start",
                            md: "start",
                            sm: "center",
                            xs: "center",
                          },
                        }}
                      >
                        {item.attributes.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: screenHeight >= 900 ? "20px" : "16px",
                          fontWeight: 600,
                          lineHeight: screenHeight >= 900 ? "25px" : "20px",
                          fontFamily: "Trebuchet MS, sans-serif",
                          color: "#E7EAFF",
                          width: {
                            lg: "70%",
                            md: "70%",
                            sm: "100%",
                            xs: "100%",
                          },
                          textAlign: {
                            lg: "start",
                            md: "start",
                            sm: "center",
                            xs: "center",
                          },
                        }}
                      >
                        {item.attributes.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              )}
              {item.attributes.type === "about_us_description" && (
                <Grid
                  container
                  spacing={1}
                  mt={screenHeight >= 900 ? 5 : 2}
                  width="94%"
                  data-aos="fade-right"
                  data-aos-delay={"500"}
                >
                  <Grid item lg={9} md={8} sm={6} xs={12}>
                    <Typography
                      sx={{
                        fontSize: screenHeight >= 900 ? "32px" : "26px",
                        fontWeight: 700,
                        lineHeight: screenHeight >= 900 ? "39px" : "30px",
                        color: "#626262",
                        width: { lg: "30%", md: "30%", sm: "100%", xs: "100%" },
                        fontFamily: "Trebuchet MS, sans-serif",
                        textAlign: {
                          lg: "start",
                          md: "start",
                          sm: "center",
                          xs: "center",
                        },
                      }}
                    >
                      {item.attributes.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: screenHeight >= 900 ? "20px" : "17px",
                        fontWeight: 600,
                        lineHeight: screenHeight >= 900 ? "25px" : "20px",
                        color: "#626262",
                        width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                        fontFamily: "Trebuchet MS, sans-serif",
                        textAlign: {
                          lg: "start",
                          md: "start",
                          sm: "center",
                          xs: "center",
                        },
                      }}
                    >
                      {item.attributes.short_description}
                    </Typography>
                  </Grid>
                  <Grid item lg={2} md={4} sm={6} xs={12}>
                    {item.attributes.image?.data?.attributes?.formats?.medium
                      ?.url && (
                      <img
                        style={{
                          width: "90%",
                          borderRadius: "8px",
                          height: screenHeight >= 900 ? "260px" : "180px",
                        }}
                        src={`http://95.85.121.153:1337${item.attributes.image.data.attributes.formats.medium.url}`}
                        alt={
                          item.attributes.image.data.attributes
                            .alternativeText || "Image"
                        }
                      />
                    )}
                  </Grid>
                </Grid>
              )}
            </>
          ))}
        </>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ position: "absolute", bottom: "5%", width: "100%" }}
        spacing={2}
      >
        <Button
          onClick={() => navigate("/")}
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
          Home
        </Button>

        <Divider orientation="vertical" flexItem />
        <Button
          onClick={() => navigate("/portfolio")}
          endIcon={<ArrowRightAltIcon sx={{ color: "#828282" }} />}
          sx={{
            textTransform: "none",
            color: "#828282",
            fontWeight: 600,
            fontFamily: "Trebuchet MS, sans-serif",
          }}
        >
          Portfolio
        </Button>
      </Stack>
      <AboutMini />
    </>
  );
};

export default About;
