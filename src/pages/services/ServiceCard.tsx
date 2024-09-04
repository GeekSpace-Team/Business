import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useTranslation } from "react-i18next";
import "../../common/style/service.css";
import { ServiceCardProps, Card } from "./types/serviceTypeAndInterface";

const ServiceCard: React.FC<ServiceCardProps> = ({
  cards,
  currentSlide,
  loopCount,
}) => {
  const [showDescription, setShowDescription] = useState<number | null>(null);
  const { t, i18n } = useTranslation();

  // Function to handle click and toggle description
  const handleClick = (index: number) => {
    if (showDescription === index) {
      setShowDescription(null);
    } else {
      setShowDescription(index);
    }
  };

  // Function to get card title based on language
  const getCardTitle = (card: Card) => {
    const titleKey = `title_${i18n.language}` as keyof Card;
    return card[titleKey] as unknown as string;
  };

  // Function to get card short description based on language
  const getCardShortDescription = (card: Card) => {
    const shortKey = `short_${i18n.language}` as keyof Card;
    return card[shortKey] as unknown as string;
  };

  useEffect(() => {
    // Reset showDescription when either currentSlide changes or we loop around
    setShowDescription(null);
  }, [currentSlide, loopCount]);

  const handleNavigate = (card: Card) => {
    sessionStorage.setItem("selectedCard", JSON.stringify(card));
    window.open(`/services/${card.title_en.replace(/ /g, "-")}`, "_blank");
  };

  return (
    <Box
      sx={{
        height: { lg: "80vh", md: "80vh", sm: "60vh", xs: "30vh" },
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
      }}
    >
      <Stack
        spacing={{ lg: 5, md: 5, sm: 3, xs: 0 }}
        direction="row"
        justifyContent="center"
      >
        <Stack width="90%" spacing={2}>
          {cards.map((card, index) => (
            <Box
              key={card.id}
              sx={{
                position: "relative",
                height: "auto",
                width: "100%",
                background:
                  showDescription === index
                    ? "rgba(10, 10, 14, 0.7)"
                    : "rgba(10, 10, 14, 0.8)",
                transition: "background-color 0.3s",
                cursor: "pointer",
                borderRadius: "8px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                }}
                onClick={() => handleClick(index)}
              >
                <Stack
                  direction="row"
                  spacing={3}
                  justifyContent="space-between"
                  alignItems="center"
                  p={3}
                >
                  <Stack direction="row" spacing={3} alignItems="center">
                    <img
                      className="service-card-icon"
                      src={card.asset.url || "./images/Frame 81.png"}
                      alt=""
                    />
                    <Typography
                      className="service-card-title"
                      sx={{
                        color: showDescription === index ? "orange" : "#E9E9E9",
                      }}
                    >
                      {getCardTitle(card)}
                    </Typography>
                  </Stack>
                  <IconButton
                    sx={{
                      display: {
                        lg: "flex",
                        md: "flex",
                        sm: "none",
                        xs: "none",
                      },
                    }}
                  >
                    {showDescription === index ? (
                      <ExpandLessIcon
                        sx={{
                          color: showDescription ? "orange" : "#E9E9E9",
                        }}
                      />
                    ) : (
                      <ExpandMoreIcon
                        sx={{
                          color: showDescription ? "orange" : "#E9E9E9",
                        }}
                      />
                    )}
                  </IconButton>
                </Stack>
                {showDescription === index && (
                  <Stack justifyContent="center" p={3}>
                    <Typography
                      sx={{
                        color: "orange",
                        fontSize: {
                          lg: "18px",
                          md: "18px",
                          sm: "18px",
                          xs: "15px",
                        },
                        fontWeight: 600,
                        lineHeight: {
                          lg: "30px",
                          md: "30px",
                          sm: "25px",
                          xs: "23px",
                        },
                        mb: 3,
                        width: "95%",
                      }}
                    >
                      {getCardShortDescription(card)}
                    </Typography>
                    <Stack direction="row" p={4} justifyContent={"flex-end"}>
                      <Button
                        sx={{
                          color: "#fff",
                          textTransform: "none",
                          fontFamily: "Trebuchet MS, sans-serif",
                          width: "180px",
                        }}
                        className="moreButton"
                        endIcon={
                          <KeyboardDoubleArrowRightIcon className="leftArrow" />
                        }
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavigate(card);
                        }}
                      >
                        {t("common.read_more")}
                      </Button>
                    </Stack>
                  </Stack>
                )}
              </Box>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default ServiceCard;
