import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FC, useEffect, useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";
import { ServiceData } from "../../components/service/ServiceCards";
import axios from "axios";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useQuery } from "react-query";

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
      <Stack spacing={5} direction="row" justifyContent="center">
        <Stack width="90%" spacing={3}>
          {ourserviceItems.map((item: ServiceData, index: number) => (
            <Box
              sx={{
                position: "relative",
                height: "auto",
                width: "100%",
                background: showDescription === index ? "#3e3e3e" : "#828282",
                transition: "background-color 0.3s",
                cursor: "pointer",
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
                  justifyContent="space-between"
                  alignItems="center"
                  p={5}
                >
                  <IconButton>
                    <img
                      src={item.attributes.icon?.data?.attributes?.url}
                      alt=""
                    />
                  </IconButton>
                  <Typography
                    variant="h5"
                    sx={{
                      color: showDescription === index ? "#FFF083" : "#E9E9E9",
                    }}
                  >
                    {item.attributes.title}
                  </Typography>
                  <IconButton>
                    {showDescription === index ? (
                      <ExpandLessIcon
                        sx={{ color: showDescription ? "#FFF083" : "#E9E9E9" }}
                      />
                    ) : (
                      <ExpandMoreIcon
                        sx={{ color: showDescription ? "#FFF083" : "#E9E9E9" }}
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
                          color: "#FFF083",
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
              <img
                src="./images/Rectangle 14.png"
                style={{
                  position: "absolute",
                  width: "50px",
                  top: -28,
                  left: -28,
                }}
                alt=""
              />

              <img
                src="./images/Rectangle 14.png"
                style={{
                  position: "absolute",
                  width: "50px",
                  bottom: -28,
                  right: -28,
                }}
                alt=""
              />
              <img
                src="./images/Rectangle 14.png"
                style={{
                  position: "absolute",
                  width: "50px",
                  bottom: -28,
                  left: -28,
                }}
                alt=""
              />
              <img
                src="./images/Rectangle 14.png"
                style={{
                  position: "absolute",
                  width: "50px",
                  top: -28,
                  right: -28,
                }}
                alt=""
              />
            </Box>
          ))}
        </Stack>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        mt={3}
        mb={3}
        sx={{ display: { lg: "none", md: "none", sm: "flex", xs: "flex" } }}
      >
        <Button
          onClick={() => navigate("/portfolio")}
          startIcon={
            <ArrowRightAltIcon
              sx={{
                color: "#828282",
                transform: "rotate(180deg)",
                fontSize: "34px",
                width: "30px",
              }}
            />
          }
          sx={{ textTransform: "none", color: "#828282", fontWeight: 600 }}
        >
          Previous
        </Button>

        <Divider orientation="vertical" />
        <Button
          onClick={() => navigate("/contact")}
          endIcon={<ArrowRightAltIcon sx={{ color: "#828282" }} />}
          sx={{ textTransform: "none", color: "#828282", fontWeight: 600 }}
        >
          Read more
        </Button>
      </Stack>
    </>
  );
};

export default ServiceSx;
