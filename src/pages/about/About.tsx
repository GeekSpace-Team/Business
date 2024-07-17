import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";
import AboutMini from "./AboutMini";
import useSWR from "swr";
import LoadingComponent from "../../components/loading/LoadingComponent";
import { useTranslation } from "react-i18next";

export interface ContentData {
  id: number;
  title_tm: string;
  title_ru: string;
  title_en: string;
  description_tm: string;
  description_ru: string;
  description_en: string;
  short_tm: string;
  short_ru: string;
  short_en: string;
  type: "about_title";
  order: number;
  url: string;
  assetId: number;
  created_at: string;
  updated_at: string;
  asset: {
    id: number;
    url: string;
    type: "image";
    blurhash: string;
  };
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const About: FC = () => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const { data: contentData, error } = useSWR<ContentData[]>(
    "http://95.85.121.153:6856/data",
    fetcher
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!contentData) {
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
  }

  if (error) return <div>An error occurred: {error.message}</div>;

  const getText = (item: ContentData, field: "title" | "description") => {
    const lang = i18n.language;
    return { __html: item[`${field}_${lang}` as keyof ContentData] as string };
  };

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
              color: "orange",
            }}
          >
            who we are
          </Typography>
        </Box>

        <>
          {contentData?.map((item) => (
            <>
              {item.type === "about_title" && (
                <Box
                  data-aos="fade-left"
                  data-aos-delay={"500"}
                  key={`about_data-${item.id}`}
                  sx={{
                    background: "rgba(10, 10, 14, 0.7)",
                    p: screenHeight >= 900 ? 4 : 2,
                    width: "90%",
                    height: "auto",
                    borderRadius: "8px 0px 0px 8px",
                    mt: screenHeight >= 900 ? 5 : 2,
                  }}
                >
                  <Grid container spacing={1}>
                    <Grid item lg={2} md={4} sm={6} xs={12}>
                      {item.asset?.url ? (
                        <img
                          style={{
                            width: "90%",
                            borderRadius: "8px",
                            height: screenHeight >= 900 ? "260px" : "180px",
                          }}
                          src={item.asset.url}
                          alt={"Image"}
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
                        dangerouslySetInnerHTML={getText(item, "title")}
                      />
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
                        dangerouslySetInnerHTML={getText(item, "description")}
                      />
                    </Grid>
                  </Grid>
                </Box>
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
          Home
        </Button>

        <Divider orientation="vertical" flexItem />
        <Button
          onClick={() => navigate("/portfolio")}
          endIcon={<ArrowRightAltIcon sx={{ color: "orange" }} />}
          sx={{
            textTransform: "none",
            color: "orange",
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
