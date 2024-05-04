import { Box, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { useLocation } from "react-router-dom";

const PortfolioDetail: FC = () => {
  const location = useLocation();
  const { item } = location.state;

  console.log(item.id);

  return (
    <>
      <Box sx={{ width: "100%", height: "100vh" }}>
        {/* <Typography variant="h5" color="#000">
          {item.attributes.title}
        </Typography>
        <Typography>{item.attributes.short_description}</Typography> */}
        <Grid container spacing={4} mt={5}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <img
              src={`http://95.85.121.153:1337${item.attributes.image.data.attributes.formats.thumbnail.url}`}
              alt=""
              style={{ width: "90%", height: "50vh", borderRadius: "12px" }}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Typography
              align="center"
              sx={{
                color: "#222222",
                fontSize: "30px",
                lineHeight: "33px",
                fontWeight: 700,
                width: "90%",
              }}
            >
              {item.attributes.title}
            </Typography>
            <Typography
              mt={3}
              sx={{
                color: "#222222",
                fontSize: "20px",
                lineHeight: "40px",
                fontWeight: 600,
                width: "90%",
              }}
            >
              {item.attributes.short_description}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PortfolioDetail;
