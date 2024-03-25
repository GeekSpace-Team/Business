import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Portfolio: FC = () => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  // const [activeIndex, setActiveIndex] = useState(true);
  const [currentContent, setCurrentContent] = useState(0);

  const contentData = [
    // Define your content for each section here
    {
      image: "./images/321467.jpg",
      title: "Your Online Coaching Platform.",
      description: `The reason a coaching business is such a great business model if you're in your 9-5 is that it doesn't require huge investments and you don't have to work 24/7.`,
    },
    {
      image: "./images/321467.jpg",
      title: "Your Online Coaching Platform.2",
      description: `The reason a coaching business is such a great business model if you're in your 9-5 is that it doesn't require huge investments and you don't have to work 24/7.`,
    },
    {
      image: "./images/321467.jpg",
      title: "Your Online Coaching Platform.3",
      description: `The reason a coaching business is such a great business model if you're in your 9-5 is that it doesn't require huge investments and you don't have to work 24/7.`,
    },
    {
      image: "./images/321467.jpg",
      title: "Your Online Coaching Platform.4",
      description: `The reason a coaching business is such a great business model if you're in your 9-5 is that it doesn't require huge investments and you don't have to work 24/7.`,
    },
  ];

  const handlePrevious = () => {
    setCurrentContent((prevContent) =>
      prevContent === 0 ? contentData.length - 1 : prevContent - 1
    );
  };

  const handleNext = () => {
    setCurrentContent((prevContent) =>
      prevContent === contentData.length - 1 ? 0 : prevContent + 1
    );
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
            height: screenHeight >= 900 ? "72vh" : "85vh",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Grid container spacing={2}>
            {contentData.map((item, index) => (
              <Grid item key={index} lg={4} md={4} sm={6} xs={12}>
                <Box
                  sx={{
                    background: "#222222",
                    borderRadius: "8px",
                    p: 3,
                    width: "290px",
                    display:
                      index === currentContent ||
                      index === (currentContent + 1) % contentData.length ||
                      index === (currentContent + 2) % contentData.length
                        ? "block"
                        : "none",
                  }}
                >
                  <Stack spacing={3}>
                    <img
                      src={item.image}
                      style={{
                        width: "284px",
                        height: "260px",
                        borderRadius: "8px",
                      }}
                      alt=""
                    />
                    <Typography
                      sx={{
                        color: "#FFF083",
                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "30px",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#E9E9E9",
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "30px",
                        width: "75%",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <Button
            startIcon={
              <ArrowRightAltIcon
                onClick={handlePrevious}
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
            onClick={handleNext}
            endIcon={<ArrowRightAltIcon sx={{ color: "#828282" }} />}
            sx={{ textTransform: "none", color: "#828282", fontWeight: 600 }}
          >
            Next
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default Portfolio;
