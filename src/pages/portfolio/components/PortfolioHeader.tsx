import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const PortfolioHeader: FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Stack pt={5} mb={-7}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "orange",
              fontSize: { md: "30px", lg: "30px", sm: "22px", xs: "20px" },
              fontWeight: 700,
              textAlign: "center",
              fontFamily: "Trebuchet MS, sans-serif",
              position: "absolute",
            }}
          >
            {t("portfolio.title")}
          </Typography>
        </Box>
      </Stack>
    </div>
  );
};

export default PortfolioHeader;
