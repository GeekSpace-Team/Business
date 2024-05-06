import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { useLocation } from "react-router-dom";

const PortfolioDetail: FC = () => {
  const location = useLocation();
  const { item } = location.state;

  console.log(item.id);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          pt: 5,
          gap: 2,
          pb: 5,
        }}
      >
        <Grid container spacing={7} mt={3}>
          <Grid item lg={7} md={7} sm={12} xs={12}>
            <Stack width="100%" pb={5}>
              <Card sx={{ borderRadius: "8px" }}>
                <CardActionArea>
                  <CardContent>
                    <Typography
                      mt={3}
                      align="center"
                      sx={{
                        color: "#222222",
                        fontSize: "26px",
                        lineHeight: "33px",
                        fontWeight: 700,
                        width: "90%",
                        fontFamily: "Trebuchet MS, sans-serif",
                      }}
                    >
                      {item.attributes.title}
                    </Typography>
                    <Typography
                      mt={3}
                      sx={{
                        color: "#222222",
                        fontSize: "18px",
                        lineHeight: "30px",
                        fontWeight: 500,
                        width: "100%",
                        opacity: 0.8,
                        fontFamily: "Trebuchet MS, sans-serif",
                      }}
                    >
                      {item.attributes.short_description}
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione aliquam vitae veritatis sit blanditiis saepe
                        veniam enim dicta maxime tempora incidunt distinctio rem
                        quaerat dolores, dolor fugit nam quae asperiores?Lorem
                        ipsum dolor sit amet consectetur, adipisicing elit.
                        Fuga, repellat totam! Quaerat magni in perferendis
                        provident, laboriosam sint inventore voluptatum sit ab
                        eum exercitationem expedita ratione rem accusantium
                        deserunt dolorum?
                      </span>
                    </Typography>
                    <Typography
                      mt={2}
                      align="right"
                      sx={{
                        color: "#222222",
                        fontSize: "14px",
                        lineHeight: "30px",
                        fontWeight: 500,
                        width: "100%",
                        opacity: 0.7,
                        fontFamily: "Trebuchet MS, sans-serif",
                      }}
                    >
                      {new Date(item.attributes.createdAt).toLocaleDateString(
                        "en-CA"
                      )}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Stack>
          </Grid>
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <Card sx={{ borderRadius: "8px", width: "90%", height: "400px" }}>
              <CardActionArea>
                <img
                  src={`http://95.85.121.153:1337${item.attributes.image.data.attributes.formats.thumbnail.url}`}
                  alt=""
                  style={{
                    width: "100%",
                    height: "400px",
                  }}
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PortfolioDetail;
