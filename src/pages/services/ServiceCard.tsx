import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Card {
  id: string;
  title_tm: string;
  title_ru: string;
  title_en: string;
  description_tm: string;
  description_ru: string;
  description_en: string;
  short_tm: string;
  short_ru: string;
  short_en: string;
  type: string;
  order: number;
  url: string;
  assetId: number;
  parentId: number;
  created_at: string;
  updated_at: string;
  asset: {
    id: number;
    url: string;
    type: string;
    blurhash: string;
  };
}

interface ServiceCardProps {
  cards: Card[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ cards }) => {
  const [showDescription, setShowDescription] = useState<number | null>(null);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleClick = (index: number) => {
    setShowDescription(showDescription === index ? null : index);
  };

  const getCardTitle = (card: Card) => {
    const titleKey = `title_${i18n.language}` as keyof Card;
    return card[titleKey] as unknown as string;
  };

  const getCardShortDescription = (card: Card) => {
    const shortKey = `short_${i18n.language}` as keyof Card;
    return card[shortKey] as unknown as string;
  };

  return (
    <Box
      sx={{
        height: "80vh",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
      }}
    >
      <Stack spacing={5} direction="row" justifyContent="center">
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
                  <img
                    style={{ width: "56px" }}
                    src={card.asset.url || "./images/Frame 81.png"}
                    alt=""
                  />
                  <Typography
                    variant="h5"
                    sx={{
                      color: showDescription === index ? "orange" : "#E9E9E9",
                    }}
                  >
                    {getCardTitle(card)}
                  </Typography>
                  <IconButton>
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
                  <Stack justifyContent="center">
                    <Typography
                      sx={{
                        color: "orange",
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "30px",
                        textAlign: "center",
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
                          navigate(`/services/${card.id}`, {
                            state: { card },
                          });
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
