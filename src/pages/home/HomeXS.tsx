import { FC, useEffect, useState } from "react";
import {
  Stack,
  Box,
  Typography,
  Card,
  IconButton,
  CardActionArea,
  CardContent,
} from "@mui/material";
import Social from "../../components/bottom-social/Social";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import api from "../../api/api";
import { useQuery } from "react-query";
import LoadingHome from "../../components/loading/LoadingHome";

const HomeXS: FC = () => {
  const [backgroundImageUrl, setBackgroundImageUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/api/banners?populate=*");
        const data = response.data.data;
        const homeBanner = data.find(
          (e: {
            attributes: {
              type: string;
              image: { data: { attributes: { url: string } } };
            };
          }) => e.attributes.type === "home_banner"
        );
        if (homeBanner && homeBanner.attributes.image.data.attributes.url) {
          setBackgroundImageUrl(
            `http://95.85.121.153:1337${homeBanner.attributes.image.data.attributes.url}`
          );
        }
      } catch (error) {
        console.error("Error fetching background image:", error);
      }
    };

    fetchData();
  }, []);

  const {
    data: homeData,
    isLoading: isHomeDataLoading,
    isError: isHomeDataError,
  } = useQuery("homeData", async () => {
    const response = await api.get("/api/title-texts");
    return response.data;
  });

  const {
    data: imageData,
    isLoading: isImageDataLoading,
    isError: isImageDataError,
  } = useQuery("imageData", async () => {
    const response = await api.get("/api/banners?populate=image");
    return response.data;
  });

  return (
    <>
      {(isHomeDataLoading || isImageDataLoading) && <LoadingHome />}
      {(isHomeDataError || isImageDataError) && <div>Error fetching data</div>}
      {homeData && imageData && (
        <>
          <Typography
            sx={{
              color: "#222222",
              fontSize: "24px",
              lineHeight: "30px",
              textAlign: "center",
              fontWeight: 700,
            }}
          >
            {homeData.data[0].attributes.title}
          </Typography>
          <Typography
            sx={{
              color: "#6B6B6B",
              fontSize: "16px",
              lineHeight: "20px",
              textAlign: "center",
              fontWeight: 600,
              mt: 3,
            }}
          >
            {homeData.data[0].attributes.short_description}
          </Typography>
          <Stack direction="row" justifyContent="center" mt={2}>
            <Social />
          </Stack>
          <Box
            sx={{
              width: "100%",
              height: "470px",
              background: `url(${backgroundImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "8px",
              p: 1,
              display: "flex",
              alignItems: "flex-end",
              mt: 3,
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
        </>
      )}
    </>
  );
};

export default HomeXS;
