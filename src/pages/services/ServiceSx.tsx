import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ServiceData } from "../../components/service/ServiceCards";
import axios from "axios";
import { useQuery } from "react-query";

// icons
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useTranslation } from "react-i18next";

const ServiceSx: FC = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [showDescription, setShowDescription] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setShowDescription(showDescription === index ? null : index);
  };

  const {
    refetch: fetchTexts,
    data: ourserviceItems,
    isLoading,
    isError,
  } = useQuery("ourserviceItems", async () => {
    const response = await axios.get(
      `http://95.85.121.153:1337/api/our-services?populate=icon&locale=${i18n.language}`
    );
    return response.data.data;
  });

  useEffect(() => {
    fetchTexts();
  }, [i18n.language]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <>
      <Box
        sx={{
          display: { lg: "none", md: "none", sm: "flex", xs: "flex" },
          flexDirection: "column",
          height: "100%",
          pb: 10,
        }}
      >
        <Stack direction="row" justifyContent="center">
          <Box
            sx={{
              width: "90%",
              height: "200px",
              background: "url('./images/Group 73.png')",
              backgroundSize: "100% 100%",
              backgroundPosition: "cover",
              mb: 2,
              position: "relative",
              borderRadius: "8px",
            }}
          >
            <Typography
              mt={3}
              align="center"
              fontSize="24px"
              fontWeight={700}
              color="#fff"
            >
              Our Services
            </Typography>
            <Stack direction="row" justifyContent="center">
              <Typography
                align="center"
                sx={{
                  width: "80%",
                  color: "#E9E9E9",
                  lineHeight: "23px",
                  fontWeight: 600,
                }}
              >
                Identify new business opportunities in order to improve
                profitability and help the business grow. Identify new business
                profitability and help the business grow.
              </Typography>
            </Stack>
          </Box>
        </Stack>
        <Stack spacing={5} direction="row" justifyContent="center">
          <Stack width="90%" spacing={2}>
            {ourserviceItems.map((item: ServiceData, index: number) => (
              <Box
                key={`our_service_items_sx_key${index}`}
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
                      src="./images/Frame 81.png"
                      alt=""
                    />
                    <Typography
                      variant="h5"
                      sx={{
                        color: showDescription === index ? "orange" : "#E9E9E9",
                      }}
                    >
                      {item.attributes.title}
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
                    <>
                      <Stack direction="row" justifyContent="center">
                        <Typography
                          key={index}
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
                          {item.attributes.short_description}
                        </Typography>
                      </Stack>
                    </>
                  )}
                </Box>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          display: { lg: "none", md: "none", sm: "flex", xs: "flex" },
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            position: "absolute",
            bottom: "10%",
            width: "100%",
          }}
          spacing={2}
        >
          <Button
            onClick={() => navigate("/portfolio")}
            startIcon={
              <ArrowRightAltIcon
                sx={{
                  color: "#fff",
                  transform: "rotate(180deg)",
                  fontSize: "34px",
                  width: "30px",
                }}
              />
            }
            sx={{
              textTransform: "none",
              color: "#fff",
              fontWeight: 600,
              fontFamily: "Trebuchet MS, sans-serif",
            }}
          >
            Portfolio
          </Button>

          <Divider sx={{ width: "100px" }}>
            <Typography
              onClick={() => navigate("/")}
              sx={{
                textTransform: "none",
                color: "#fff",
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
            endIcon={<ArrowRightAltIcon sx={{ color: "#fff" }} />}
            sx={{
              textTransform: "none",
              color: "#fff",
              fontWeight: 600,
              fontFamily: "Trebuchet MS, sans-serif",
            }}
          >
            Contact Us
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default ServiceSx;
