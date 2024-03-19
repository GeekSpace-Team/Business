import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const About: FC = () => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [currentContent, setCurrentContent] = useState(0);

  const contentData = [
    // Define your content for each section here
    {
      image: "./images/Rectangle 9.png",
      title: "Role of Corporate Trainer",
      description: `The reason a coaching business is such a great business model if you're in your 9-5 is that it doesn't require huge investments and you don't have to work 24/7.`,
    },
    {
      image: "./images/logo.png",
      title: "Text Two",
      description: `Description of the Second Level`,
    },
    {
      image: "./images/321467.jpg",
      title: "Text Three",
      description: `Description of the Third Level`,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrevious = () => {
    setCurrentContent((prevContent) =>
      prevContent === 0 ? contentData.length - 1 : prevContent - 1
    );
  };

  // setTimeout(() => {
  //   handleReadMore();
  // }, 3000);

  const handleReadMore = () => {
    setCurrentContent((prevContent) =>
      prevContent === contentData.length - 1 ? 0 : prevContent + 1
    );
  };

  return (
    <>
      <Stack sx={{ width: "100%", height: "auto" }}>
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
            who we are
          </Typography>
        </Box>
        <Box
          sx={{
            background: "#222222",
            p: screenHeight >= 900 ? 4 : 2,
            width: "100%",
            height: "auto",
            borderRadius: "8px 0px 0px 8px",
            mt: screenHeight >= 900 ? 5 : 2,
          }}
        >
          <Grid container spacing={1}>
            <Grid item lg={2} md={4} sm={6} xs={12}>
              <img
                src={contentData[currentContent].image}
                style={{
                  width: "90%",
                  borderRadius: "8px",
                  height: screenHeight >= 900 ? "260px" : "180px",
                }}
                alt="Rectangle"
              />
            </Grid>
            <Grid item lg={9} md={8} sm={6} xs={12}>
              <Typography
                sx={{
                  fontSize: screenHeight >= 900 ? "32px" : "24px",
                  fontWeight: 700,
                  lineHeight: screenHeight >= 900 ? "39px" : "30px",
                  color: "#E7EAFF",
                  width: { lg: "30%", md: "30%", sm: "100%", xs: "100%" },
                  textAlign: {
                    lg: "start",
                    md: "start",
                    sm: "center",
                    xs: "center",
                  },
                }}
              >
                {contentData[currentContent].title}
              </Typography>
              <Typography
                sx={{
                  fontSize: screenHeight >= 900 ? "20px" : "16px",
                  fontWeight: 600,
                  lineHeight: screenHeight >= 900 ? "25px" : "20px",
                  color: "#E7EAFF",
                  width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                  textAlign: {
                    lg: "start",
                    md: "start",
                    sm: "center",
                    xs: "center",
                  },
                }}
              >
                {contentData[currentContent].description}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={1} mt={screenHeight >= 900 ? 5 : 2}>
          <Grid item lg={9} md={8} sm={6} xs={12}>
            <Typography
              sx={{
                fontSize: screenHeight >= 900 ? "32px" : "26px",
                fontWeight: 700,
                lineHeight: screenHeight >= 900 ? "39px" : "30px",
                color: "#626262",
                width: { lg: "30%", md: "30%", sm: "100%", xs: "100%" },
                textAlign: {
                  lg: "start",
                  md: "start",
                  sm: "center",
                  xs: "center",
                },
              }}
            >
              {contentData[currentContent].title}
            </Typography>
            <Typography
              sx={{
                fontSize: screenHeight >= 900 ? "20px" : "17px",
                fontWeight: 600,
                lineHeight: screenHeight >= 900 ? "25px" : "20px",
                color: "#626262",
                width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                textAlign: {
                  lg: "start",
                  md: "start",
                  sm: "center",
                  xs: "center",
                },
              }}
            >
              {contentData[currentContent].description}
            </Typography>
          </Grid>
          <Grid item lg={2} md={4} sm={6} xs={12}>
            <img
              src={contentData[currentContent].image}
              style={{
                width: "90%",
                borderRadius: "8px",
                height: screenHeight >= 900 ? "260px" : "180px",
              }}
              alt="Rectangle"
            />
          </Grid>
        </Grid>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          mt={7}
        >
          <Button
            onClick={() => handlePrevious()}
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
            onClick={() => handleReadMore()}
            endIcon={<ArrowRightAltIcon sx={{ color: "#828282" }} />}
            sx={{ textTransform: "none", color: "#828282", fontWeight: 600 }}
          >
            Read more
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default About;
