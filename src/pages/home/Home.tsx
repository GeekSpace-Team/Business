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

  return (
    <>
      <Stack width="100%" height="85vh">
        <Box
          sx={{
            background: "#E9E9E9",
            borderRadius: "8px",
          }}
        >
          <LanguageModal />
        </Box>
        <Grid container spacing={10} pt={2} alignItems="center">
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Stack spacing={10}>
              <Typography
                sx={{
                  color: "#222222",
                  fontSize: screenHeight >= 900 ? "48px" : "43px",
                  fontWeight: 700,
                }}
              >
                Role of Corporate Trainer in Educating the Workface
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
                Identify new business opportunities in order to improve
                profitability and help the business grow. Identify new business
                opportunities in order to improve profitability and help the
                business grow.
              </Typography>
              <Social />
            </Stack>
          </Grid>
          <Grid item lg={6} pr="3%" md={6} sm={12} xs={12}>
            <Box
              sx={{
                width: "100%",
                height: "85vh",
                background: "url(/images/321467.jpg)",
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
      </Stack>
      <Stack
        width="auto"
        p={1}
        sx={{
          position: "absolute",
          bottom: 0,
          left: screenHeight >= 900 ? -40 : -10,
          background: "#222222",
          borderTopRightRadius: "8px",
        }}
      >
        <Stack direction="row" spacing={1}>
          <Box
            sx={{
              background: "#D9D9D9",
              p: 1,
              borderRadius: "8px",
              width: screenHeight >= 900 ? "450px" : "330px",
            }}
          >
            <Stack direction="row" spacing={1}>
              <img
                style={{
                  width: "120px",
                  height: screenHeight >= 900 ? "110px" : "60px",
                  borderRadius: "4px",
                }}
                src="/images/Rectangle 6.png"
                alt="Rectangle 6.png  "
              />
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
                  Business trainer provides administrative, clerical and word
                  processing support
                </Typography>
              </Stack>
            </Stack>
          </Box>
          <Box
            sx={{
              background: "#D9D9D9",
              p: 1,
              borderRadius: "8px",
              width: screenHeight >= 900 ? "450px" : "330px",
            }}
          >
            <Stack direction="row" spacing={1}>
              <img
                style={{
                  width: "120px",
                  height: screenHeight >= 900 ? "110px" : "60px",
                  borderRadius: "4px",
                }}
                src="/images/Rectangle 6.png"
                alt="Rectangle 6.png  "
              />
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
                  Business trainer provides administrative, clerical and word
                  processing support
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
