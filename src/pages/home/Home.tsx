import { FC, useEffect, useState } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import LanguageModal from "../../assets/language/LanguageModal";
import Social from "../../components/bottom-social/Social";
import HomeXS from "./HomeXS";
import { TypeAnimation } from "react-type-animation";
import "./home.css";
import {
  displayLg,
  typeAnimationStyle,
  boxStyle,
  homeItemsStyle,
} from "../../common/style/commonStyle";
import ArrowIcon from "./ArrowIcon";
import HomeTypography from "./HomeTypography";
import useSWR from "swr";
import { useTranslation } from "react-i18next";
import { HomeTitleData } from "../../types/type";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

const Home: FC = () => {
  const { i18n } = useTranslation();
  const [animationKey, setAnimationKey] = useState(0);
  const screenHeight = useSelector(
    (state: RootState) => state.screenHeight.height
  );
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prevKey) => prevKey + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetcher = async (url: string): Promise<HomeTitleData[]> => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  };

  // Fetch data using SWR
  const { data, error } = useSWR<HomeTitleData[]>(
    "http://95.85.121.153:6856/data",
    fetcher
  );

  // Filter data for home_title type
  const filteredData = data?.filter((item) => item.type === "home_title");

  // Handle loading state
  if (!filteredData && !error) return <div>Loading...</div>;

  // Handle error state
  if (error) return <div>Error: {error.message}</div>;

  // Function to get text based on language
  const getText = (
    item: HomeTitleData,
    field: "title" | "description" | "short"
  ) => {
    const lang = i18n.language;
    return item[`${field}_${lang}` as keyof HomeTitleData] as string;
  };

  return (
    <>
      {filteredData?.map((item) => (
        <>
          <Stack
            width="300%"
            height="100vh"
            sx={{
              display: displayLg,
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
                      sequence={[getText(item, "title")]}
                      wrapper="span"
                      speed={30}
                      style={typeAnimationStyle}
                    />
                    <HomeTypography text={getText(item, "description")} />
                    <Social />
                  </Stack>
                </Grid>
                <Grid item lg={5} pr="3%" md={5} sm={12} xs={12}>
                  <Box
                    className="bounce"
                    sx={{
                      ...boxStyle,
                      backgroundImage: `url(${item.asset.url})`,
                    }}
                  ></Box>
                </Grid>
              </Grid>
            </Box>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              ...homeItemsStyle,
              left: screenHeight >= 900 ? 60 : 50,
              display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
            }}
          >
            <Box
              onMouseEnter={() => setShowIcon(true)}
              onMouseLeave={() => setShowIcon(false)}
              key={item.id}
              sx={{
                background: "#D9D9D9",
                p: 1,
                borderRadius: "8px",
              }}
            >
              <Stack direction="row" spacing={3}>
                <img
                  style={{
                    width: "120px",
                    height: screenHeight >= 900 ? "110px" : "60px",
                    borderRadius: "4px",
                  }}
                  src={item.asset.url}
                />
                <Typography
                  sx={{
                    color: "#222222",
                    fontSize: screenHeight >= 900 ? "18px" : "12px",
                    lineHeight: screenHeight >= 900 ? 2 : 1.5,
                    bottom: screenHeight >= 900 ? 5 : 0,
                    width: screenHeight >= 900 ? "250px" : "150px",
                    fontFamily: "Trebuchet MS, sans-serif",
                  }}
                >
                  {getText(item, "short").slice(0, 61)}...
                </Typography>
                {showIcon && <ArrowIcon />}
              </Stack>
            </Box>
          </Stack>
        </>
      ))}
      <HomeXS />
    </>
  );
};

export default Home;
