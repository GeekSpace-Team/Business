import { Button, Divider, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const ServiceNavigation: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ position: "absolute", bottom: "3%", width: "100%" }}
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
          onClick={() => navigate("/contact")}
          endIcon={<ArrowRightAltIcon sx={{ color: "orange" }} />}
          sx={{
            textTransform: "none",
            color: "orange",
            fontWeight: 600,
            fontFamily: "Trebuchet MS, sans-serif",
          }}
        >
          {t("sidebar.contact")}
        </Button>
      </Stack>
    </div>
  );
};

export default ServiceNavigation;
