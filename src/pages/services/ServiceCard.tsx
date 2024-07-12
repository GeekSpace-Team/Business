import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ServiceData } from "../../components/service/ServiceCards";

const ServiceCard = () => {
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
    <Box
      sx={{
        height: "80vh",
        overflowY: "auto",
        // Hide scrollbar for WebKit-based browsers
        "&::-webkit-scrollbar": {
          display: "none",
        },
        // Hide scrollbar for Firefox
        scrollbarWidth: "none",
      }}
    >
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
