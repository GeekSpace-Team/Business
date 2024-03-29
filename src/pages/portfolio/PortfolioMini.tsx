import { Box, Stack, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FC } from "react";

const PortfolioMini: FC = () => {
  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="center">
        <Typography
          sx={{
            textAlign: "center",
            color: "#222222",
            fontSize: "24px",
            fontWeight: 700,
            width: "70%",
          }}
        >
          Prominent works of my business coaching
        </Typography>
      </Stack>
      <Stack p={5}>
        <Box sx={{ background: "#828282", borderRadius: "8px", p: 3 }}>
          <img
            src="./images/321467.jpg"
            style={{ width: "100%", height: "260px", borderRadius: "8px" }}
            alt="321467.jpg"
          />
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Your Online Coaching Platform.
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
        </Box>
      </Stack>
    </>
  );
};

export default PortfolioMini;
