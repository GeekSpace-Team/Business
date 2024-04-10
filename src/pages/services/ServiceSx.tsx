import { Button, Divider, IconButton, Stack, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FC, useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";
import { ServiceData } from "../../components/service/ServiceCards";
import axios from "axios";
import { useQuery } from "react-query";

const ServiceSx: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const {
    data: ourserviceItems,
    isLoading,
    isError,
  } = useQuery("ourserviceItems", async () => {
    const response = await axios.get(
      "http://95.85.121.153:1337/api/our-services?populate=icon&locale=en"
    );
    return response.data.data;
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const handleAccordionClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {ourserviceItems.map((item: ServiceData, index: number) => (
        <Stack
          width={"100%"}
          direction="row"
          pl={5}
          pr={5}
          pt={5}
          key={`service_sx_key_${index}`}
          sx={{ display: { lg: "none", md: "none", sm: "flex", xs: "flex" } }}
        >
          <span
            style={{ background: activeIndex ? "#3E3E3E" : "#828282" }}
            className={`${
              activeIndex
                ? "octagon active-color gray"
                : "octagon o-color green"
            }`}
          >
            <Accordion
              expanded={activeIndex === index}
              onChange={() => handleAccordionClick(index)}
              sx={{
                background: "#828282",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: "#e9e9e9",
                      fontSize: "40px",
                    }}
                  />
                }
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Stack direction="row" alignItems="center" spacing={6}>
                  <IconButton
                    sx={{ background: "#8E8E8E", borderRadius: "4px" }}
                  >
                    <ArrowRightAltIcon />
                  </IconButton>
                  <Typography
                    sx={{
                      color: "#e9e9e9",
                      fontSize: "24px",
                      fontWeight: 700,
                    }}
                  >
                    {item.attributes.title}
                  </Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    color: "#E9E9E9",
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "30px",
                    textAlign: "center",
                  }}
                >
                  {item.attributes.short_description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </span>
        </Stack>
      ))}
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
