import { Box, Grid, Stack, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";

const Portfolio: FC = () => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [activeIndex, setActiveIndex] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
      setActiveIndex(activeIndex);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Stack width="100%" height="auto">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            mt: screenHeight >= 900 ? 7 : 2,
          }}
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: screenHeight >= 900 ? "36px" : "30px",
              fontWeight: 700,
            }}
          >
            Prominent works of my business coaching
          </Typography>
        </Box>
        <Box
          sx={{
            mt: screenHeight >= 900 ? 5 : 2,
            height: "85vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid container spacing={2}>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box
                sx={{
                  background: activeIndex ? "#222222" : "#828282",
                  borderRadius: "8px",
                  p: 1,
                  width: "290px",
                }}
              >
                <Stack spacing={2}>
                  <img
                    src="./images/321467.jpg"
                    style={{
                      width: "284px",
                      height: "260px",
                      borderRadius: "8px",
                    }}
                    alt=""
                  />
                  <Typography
                    sx={{
                      color: activeIndex ? "#FFF083" : "#E9E9E9",
                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "30px",
                    }}
                  >
                    Your Online Coaching Platform.
                  </Typography>
                  <Typography
                    sx={{
                      color: "#E9E9E9",
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "24px",
                      display: activeIndex ? "flex" : "none",
                    }}
                  >
                    The reason a coaching business is such a great business
                    model if you're in your 9-5 is that it doesn't require huge
                    investments and you don't have to work 24/7.
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </>
  );
};

export default Portfolio;
