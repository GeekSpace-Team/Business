import { Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const ServiceDetail: FC = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const card = location.state?.card;

  const navigate = useNavigate();

  if (!card) {
    return <div>No data available</div>;
  }
  return (
    <div>
      <Typography sx={{ color: "orange", marginBottom: 3 }} variant="h2">
        {card[`title_${i18n.language}`]}
      </Typography>

      <Grid container mt={3} spacing={5}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <img
            src={card.asset.url}
            alt={card.title_en}
            style={{ width: "100%", height: "50vh" }}
          />
        </Grid>
        <Grid item lg={8} md={8} sm={6} mt={5} xs={12}>
          <Typography color="#fff">{card[`short_${i18n.language}`]}</Typography>
        </Grid>
      </Grid>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ position: "absolute", bottom: "5%", width: "100%" }}
        spacing={2}
      >
        <Button
          onClick={() => navigate("/services")}
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
          Our Service
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
            Home
          </Typography>
        </Divider>
        <Button
          onClick={() => navigate("/contact")}
          endIcon={<ArrowRightAltIcon sx={{ color: "orange" }} />}
          sx={{
            textTransform: "none",
            color: "orange",
            fontWeight: 600,
            fontFamily: "Trebuchet MS, sans-serif",
          }}
        >
          Contact
        </Button>
      </Stack>
    </div>
  );
};

export default ServiceDetail;
