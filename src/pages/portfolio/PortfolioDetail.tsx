import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const PortfolioDetail: FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const item = location.state?.item;

  const navigate = useNavigate();

  if (!item) {
    return <div>No data available</div>;
  }

  return (
    <>
      <Box p={4}>
        <Typography sx={{ color: "orange", marginBottom: 3 }} variant="h2">
          {item[`title_${i18n.language}`]}
        </Typography>
        <Grid container width="100%" spacing={5}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <img
              src={item.asset.url}
              alt={item.title_en}
              style={{ width: "100%", height: "50vh" }}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Typography
              color="#fff"
              variant="body1"
              mt={2}
              dangerouslySetInnerHTML={{
                __html: item[`description_${i18n.language}`],
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ position: "absolute", bottom: "5%", width: "100%" }}
        spacing={2}
      >
        <Button
          onClick={() => navigate("/portfolio")}
          startIcon={
            <ArrowRightAltIcon
              sx={{
                color: "orange",
                transform: "rotate(180deg)",
                fontSize: "34px",
                width: "30px",
              }}
            />
          }
          sx={{
            textTransform: "none",
            color: "orange",
            fontWeight: 600,
            fontFamily: "Trebuchet MS, sans-serif",
          }}
        >
          {t("sidebar.portfolio")}
        </Button>

        <Divider sx={{ width: "100px" }}>
          <Typography
            onClick={() => navigate("/")}
            sx={{
              textTransform: "none",
              color: "orange",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "Trebuchet MS, sans-serif",
            }}
          >
            {t("sidebar.home")}
          </Typography>
        </Divider>
        <Button
          onClick={() => navigate("/services")}
          endIcon={<ArrowRightAltIcon sx={{ color: "orange" }} />}
          sx={{
            textTransform: "none",
            color: "orange",
            fontWeight: 600,
            fontFamily: "Trebuchet MS, sans-serif",
          }}
        >
          {t("sidebar.services")}
        </Button>
      </Stack>
    </>
  );
};

export default PortfolioDetail;
