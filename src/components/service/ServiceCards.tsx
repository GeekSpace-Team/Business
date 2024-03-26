import { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

const ServiceCards: FC = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Box
            sx={{
              background: "#828282",
              p: 2,
              display: "flex",
              alignItems: "center",
              gap: 10,
              borderRadius: "8px",
              //   width: "93%",
            }}
          >
            <QueryStatsIcon />
            <Typography>Strategic coach</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ServiceCards;
