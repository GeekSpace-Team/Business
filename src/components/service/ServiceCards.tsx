import { FC, useState, useEffect } from "react";
import { Box, Grid, Typography, Stack, Button } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useNavigate } from "react-router-dom";

export type ServiceData = {
  id: number;
  attributes: {
    title: string;
    short_description: string;
    description: string | null;
    index: number;
    url: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    icon: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string | null;
          caption: string | null;
          width: number;
          height: number;
          provider_metadata: Record<string, unknown>;
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: string | null;
          provider: string;
          blurhash: string;
        };
      };
    };
  };
};

type ServiceCardsProps = {
  data1: ServiceData;
  data2: ServiceData;
  data3: ServiceData;
  data4: ServiceData;
};

const ServiceCards: FC<ServiceCardsProps> = ({
  data1,
  data2,
  data3,
  data4,
}) => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [isFirstCardVisible, setIsFirstCardVisible] = useState(true);
  const [isSecondCardVisible, setIsSecondCardVisible] = useState(true);
  const [isThirdCardVisible, setIsThirdCardVisible] = useState(true);
  const [isFourthCardVisible, setIsFourthCardVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCardClick = (id: string) => {
    switch (id) {
      case "firstCard":
        setIsSecondCardVisible(!isSecondCardVisible);
        setIsFirstCardVisible(true);
        setIsThirdCardVisible(true);
        setIsFourthCardVisible(true);

        break;
      case "secondCard":
        setIsFirstCardVisible(!isFirstCardVisible);
        setIsFourthCardVisible(true);
        setIsThirdCardVisible(true);
        setIsSecondCardVisible(true);
        break;
      case "thirdCard":
        setIsFourthCardVisible(!isFourthCardVisible);
        setIsFirstCardVisible(true);
        setIsSecondCardVisible(true);
        setIsThirdCardVisible(true);
        break;
      case "fourthCard":
        setIsThirdCardVisible(!isThirdCardVisible);
        setIsFirstCardVisible(true);
        setIsSecondCardVisible(true);
        break;
      default:
        break;
    }
  };

  const handleReadMore = (serviceId: number, serviceData: ServiceData) => {
    navigate(`/services/${serviceId}`, { state: { serviceData } });
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Grid container spacing={2}>
            {isFirstCardVisible && (
              <Grid
                sx={{ zIndex: isSecondCardVisible ? 0 : 100 }}
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
              >
                <Box
                  id="firstCard"
                  sx={{
                    background: "rgba(10, 10, 14, 0.7)",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "8px",
                    cursor: "pointer",
                    gap: 3,
                  }}
                  onClick={() => handleCardClick("firstCard")}
                >
                  <Stack
                    width="100%"
                    spacing={5}
                    justifyContent="flex-start"
                    direction="row"
                    alignItems="center"
                  >
                    <img
                      // src={
                      //   isSecondCardVisible
                      //     ? `http://95.85.121.153:1337${data1.attributes.icon?.data?.attributes?.url}`
                      //     : "/images/Frame 81.png"
                      // }
                      src="images/Frame 81.png"
                      style={{
                        width: screenHeight > 900 ? "" : "98px",
                      }}
                      alt="Frame 80.png"
                    />
                    <Typography
                      sx={{
                        color: isSecondCardVisible ? "#E9E9E9" : "orange",
                        fontWeight: 700,
                        fontSize: "29px",
                        fontFamily: "Trebuchet MS, sans-serif",
                      }}
                    >
                      {data1.attributes.title}
                    </Typography>
                  </Stack>
                  {isSecondCardVisible ? null : (
                    <>
                      <Typography
                        sx={{
                          color: "orange",
                          fontSize: screenHeight >= 900 ? "24px" : "18px",
                          lineHeight: screenHeight >= 900 ? "48px" : "30px",
                          fontWeight: 500,
                          fontFamily: "Trebuchet MS, sans-serif",
                        }}
                      >
                        {data1.attributes.short_description.slice(0, 50)}...
                      </Typography>
                      <Stack
                        mt={2}
                        direction="row"
                        width="100%"
                        justifyContent="flex-end"
                      >
                        <Button
                          sx={{
                            color: "#fff",
                            textTransform: "none",
                            mb: 2,
                            fontFamily: "Trebuchet MS, sans-serif",
                          }}
                          className="moreButton"
                          endIcon={
                            <KeyboardDoubleArrowRightIcon className="leftArrow" />
                          }
                          onClick={() => handleReadMore(data1.id, data1)}
                        >
                          Read More
                        </Button>
                      </Stack>
                    </>
                  )}
                </Box>
              </Grid>
            )}
            {data2 && isSecondCardVisible && (
              <Grid
                sx={{ zIndex: isFirstCardVisible ? 0 : 100 }}
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
              >
                <Box
                  id="secondCard"
                  sx={{
                    background: "rgba(10, 10, 14, 0.7)",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "8px",
                    cursor: "pointer",
                    gap: 3,
                    zIndex: isFirstCardVisible ? 0 : 1000,
                  }}
                  onClick={() => handleCardClick("secondCard")}
                >
                  <Stack
                    width="100%"
                    spacing={5}
                    justifyContent="flex-start"
                    direction="row"
                    alignItems="center"
                  >
                    <img
                      src="/images/Frame 81.png"
                      style={{
                        width: screenHeight > 900 ? "" : "98px",
                      }}
                      alt="Frame 80.png"
                    />
                    <Typography
                      sx={{
                        color: isFirstCardVisible ? "#E9E9E9" : "orange",
                        fontSize: "29px",
                        fontWeight: 700,
                        fontFamily: "Trebuchet MS, sans-serif",
                      }}
                    >
                      {data2.attributes.title}
                    </Typography>
                  </Stack>
                  {isFirstCardVisible ? null : (
                    <>
                      <Typography
                        sx={{
                          color: "orange",
                          fontSize: screenHeight >= 900 ? "24px" : "18px",
                          lineHeight: screenHeight >= 900 ? "48px" : "30px",
                          fontWeight: 500,
                          fontFamily: "Trebuchet MS, sans-serif",
                        }}
                      >
                        {data2.attributes.short_description.slice(0, 50)}...
                      </Typography>
                      <Stack
                        mt={2}
                        direction="row"
                        width="100%"
                        justifyContent="flex-end"
                      >
                        <Button
                          sx={{
                            color: "#fff",
                            textTransform: "none",
                            mb: 2,
                            fontFamily: "Trebuchet MS, sans-serif",
                          }}
                          className="moreButton"
                          endIcon={
                            <KeyboardDoubleArrowRightIcon className="leftArrow" />
                          }
                          onClick={() => handleReadMore(data2.id, data2)}
                        >
                          Read More
                        </Button>
                      </Stack>
                    </>
                  )}
                </Box>
              </Grid>
            )}
          </Grid>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Grid container spacing={2}>
            {isThirdCardVisible && data3 && (
              <Grid
                sx={{ zIndex: isFourthCardVisible ? 0 : 100 }}
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
              >
                <Box
                  id="thirdCard"
                  sx={{
                    background: "rgba(10, 10, 14, 0.7)",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "8px",
                    cursor: "pointer",
                    gap: 3,
                    zIndex: isFourthCardVisible ? 0 : 1000,
                  }}
                  onClick={() => handleCardClick("thirdCard")}
                >
                  <Stack
                    width="100%"
                    spacing={5}
                    justifyContent="flex-start"
                    direction="row"
                    alignItems="center"
                  >
                    <img
                      src="/images/Frame 81.png"
                      style={{
                        width: screenHeight > 900 ? "" : "98px",
                      }}
                      alt="Frame 80.png"
                    />
                    <Typography
                      sx={{
                        color: isFourthCardVisible ? "#E9E9E9" : "orange",
                        fontSize: "29px",
                        fontWeight: 700,
                        fontFamily: "Trebuchet MS, sans-serif",
                      }}
                    >
                      {data3.attributes.title}
                    </Typography>
                  </Stack>
                  {isFourthCardVisible ? null : (
                    <>
                      <Typography
                        sx={{
                          color: "orange",
                          fontSize: screenHeight >= 900 ? "24px" : "18px",
                          lineHeight: screenHeight >= 900 ? "48px" : "30px",
                          fontWeight: 500,
                          fontFamily: "Trebuchet MS, sans-serif",
                        }}
                      >
                        {data3.attributes.short_description.slice(0, 50)}...
                      </Typography>
                      <Stack
                        mt={2}
                        direction="row"
                        width="100%"
                        justifyContent="flex-end"
                      >
                        <Button
                          sx={{
                            color: "#fff",
                            textTransform: "none",
                            mb: 2,
                            fontFamily: "Trebuchet MS, sans-serif",
                          }}
                          className="moreButton"
                          endIcon={
                            <KeyboardDoubleArrowRightIcon className="leftArrow" />
                          }
                          onClick={() => handleReadMore(data3.id, data3)}
                        >
                          Read More
                        </Button>
                      </Stack>
                    </>
                  )}
                </Box>
              </Grid>
            )}
            {isFourthCardVisible && data4 && (
              <Grid
                sx={{ zIndex: isThirdCardVisible ? 0 : 100 }}
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
              >
                <Box
                  id="fourthCard"
                  sx={{
                    background: "rgba(10, 10, 14, 0.7)",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "8px",
                    cursor: "pointer",
                    gap: 3,
                    zIndex: isThirdCardVisible ? 0 : 1000,
                  }}
                  onClick={() => handleCardClick("fourthCard")}
                >
                  <Stack
                    width="100%"
                    spacing={5}
                    justifyContent="flex-start"
                    direction="row"
                    alignItems="center"
                  >
                    <img
                      src="/images/Frame 81.png"
                      style={{
                        width: screenHeight > 900 ? "" : "98px",
                      }}
                      alt="Frame 80.png"
                    />
                    <Typography
                      sx={{
                        color: isThirdCardVisible ? "#E9E9E9" : "orange",
                        fontSize: "29px",
                        fontFamily: "Trebuchet MS, sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {data4.attributes.title}
                    </Typography>
                  </Stack>
                  {isThirdCardVisible ? null : (
                    <>
                      <Typography
                        sx={{
                          color: "orange",
                          fontSize: screenHeight >= 900 ? "24px" : "18px",
                          lineHeight: screenHeight >= 900 ? "48px" : "30px",
                          fontWeight: 500,
                          fontFamily: "Trebuchet MS, sans-serif",
                        }}
                      >
                        {data4.attributes.short_description.slice(0, 50)}...
                      </Typography>
                      <Stack
                        mt={2}
                        direction="row"
                        width="100%"
                        justifyContent="flex-end"
                      >
                        <Button
                          sx={{
                            color: "#fff",
                            textTransform: "none",
                            mb: 2,
                            fontFamily: "Trebuchet MS, sans-serif",
                          }}
                          className="moreButton"
                          endIcon={
                            <KeyboardDoubleArrowRightIcon className="leftArrow" />
                          }
                          onClick={() => handleReadMore(data4.id, data4)}
                        >
                          Read More
                        </Button>
                      </Stack>
                    </>
                  )}
                </Box>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ServiceCards;
