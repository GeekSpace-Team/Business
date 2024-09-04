// components/PortfolioItem.tsx
import { FC } from "react";
import { Stack, Typography, Button, Box } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useTranslation } from "react-i18next";

interface PortfolioItemProps {
  item: any;
  index: number;
  screenHeight: number;
  activeIndex: number | null;
  onClick: (index: number) => void;
}

const PortfolioItem: FC<PortfolioItemProps> = ({
  item,
  index,
  screenHeight,
  activeIndex,
  onClick,
}) => {
  const { t, i18n } = useTranslation();

  return (
    <Stack direction="row" alignItems="center">
      <Box
        sx={{
          background: "rgba(10, 10, 14, 0.7)",
          minHeight: screenHeight >= 900 ? "600px" : "300px",
          width: "85%",
          cursor: "pointer",
        }}
        onClick={() => onClick(index)}
      >
        <img style={{ width: "100%", height: "150px" }} src={item.asset.url} />
        <Stack p={3}>
          <Typography
            sx={{
              color: activeIndex === index ? "orange" : "#E9E9E9",
              fontSize: {
                lg: "26px",
                md: "22px",
                sm: "20px",
                xs: "18px",
              },
              lineHeight: screenHeight >= 900 ? "50px" : "33px",
              fontWeight: 700,
              width: "90%",
              fontFamily: "Trebuchet MS, sans-serif",
            }}
          >
            {item[`title_${i18n.language}`]}
          </Typography>
          {activeIndex === index && (
            <>
              <Typography
                sx={{
                  color: "#E9E9E9",
                  fontSize: {
                    lg: "22px",
                    md: "20px",
                    sm: "18px",
                    xs: "16px",
                  },
                  lineHeight: screenHeight >= 900 ? "40px" : "26px",
                  fontWeight: 600,
                  fontFamily: "Trebuchet MS, sans-serif",
                }}
              >
                {item[`short_${i18n.language}`].slice(0, 50)}...
              </Typography>
              <Stack mt={2} direction="row" justifyContent="flex-end">
                <Button
                  sx={{
                    color: "#fff",
                    textTransform: "none",
                    fontFamily: "Trebuchet MS, sans-serif",
                  }}
                  className="moreButton"
                  endIcon={
                    <KeyboardDoubleArrowRightIcon className="leftArrow" />
                  }
                  onClick={(e) => {
                    e.stopPropagation();

                    const url = `/portfolio/${item.title_en.replace(/ /g, "-")}`;

                    // Store the item data in sessionStorage
                    sessionStorage.setItem(
                      "portfolioItem",
                      JSON.stringify(item)
                    );

                    // Open the URL in a new tab
                    window.open(url, "_blank");
                  }}
                >
                  {t("common.read_more")}
                </Button>
              </Stack>
            </>
          )}
        </Stack>
      </Box>
    </Stack>
  );
};

export default PortfolioItem;
