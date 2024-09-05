import { FC, useEffect, useState } from "react";
import { Box, Grid, Stack, Hidden } from "@mui/material";
import LanguageModal from "../../assets/language/LanguageModal";
import Social from "../../components/bottom-social/Social";
import { TypeAnimation } from "react-type-animation";
import "./home.css";
import { typeAnimationStyle } from "../../common/style/commonStyle";
import HomeTypography from "./HomeTypography";
import useSWR from "swr";
import { useTranslation } from "react-i18next";
import { HomeTitleData } from "../../types/type";
import SocialCards from "./components/SocialCards";
import SocialCardXS from "./components/SocialCardXS";

const Home: FC = () => {
  const { i18n } = useTranslation();
  const [animationKey, setAnimationKey] = useState(0);

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
    "https://ikmaslahat.com/api/data/",
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
    return {
      __html: item[`${field}_${lang}` as keyof HomeTitleData] as string,
    };
  };

  return (
    <>
      {filteredData?.map((item) => (
        <Stack
          width="100%"
          height="100vh"
          sx={{
            display: "block",
          }}
          key={item.id}
        >
          <Box>
            <Box
              sx={{
                background: "#E9E9E9",
                borderRadius: "8px",
                mb: { xs: 2, sm: 2 },
              }}
            >
              <LanguageModal />
            </Box>
            <Grid
              container
              spacing={{ md: 10, lg: 10, sm: 5, xs: 0 }}
              pt={2}
              p={{ lg: 0, md: 0, sm: 3, xs: 3 }}
              alignItems="center"
            >
              <Grid item lg={7} md={7} sm={12} xs={12}>
                <Stack spacing={2}>
                  <TypeAnimation
                    key={animationKey}
                    sequence={[getText(item, "title").__html]}
                    wrapper="span"
                    speed={30}
                    style={{
                      ...typeAnimationStyle,
                      fontSize: "2.2rem",
                    }}
                  />
                  <HomeTypography
                    text={
                      <span
                        dangerouslySetInnerHTML={getText(item, "description")}
                      />
                    }
                  />
                  <Social />
                </Stack>
              </Grid>
              <Grid
                item
                lg={5}
                pr={{ lg: "3%", md: "3%", sm: 0, xs: 0 }}
                md={5}
                sm={12}
                xs={12}
              >
                <Box
                  className="bounce"
                  sx={{
                    backgroundImage: `url(${item.asset.url})`,
                    width: { lg: "100%", md: "100%", sm: "90%", xs: "90%" },
                    height: { lg: "85vh", md: "85vh", sm: "60vh", xs: "50vh" },
                    backgroundSize: "cover",
                    backgroundPosition: "0 50px",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "8px",
                    p: 1,
                  }}
                ></Box>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Hidden lgDown>
              <SocialCards />
            </Hidden>
            <Hidden lgUp>
              <SocialCardXS />
            </Hidden>
          </Box>
        </Stack>
      ))}
    </>
  );
};

export default Home;
