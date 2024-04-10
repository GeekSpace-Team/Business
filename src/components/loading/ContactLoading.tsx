import { FC } from "react";
import { Grid, Skeleton, Stack } from "@mui/material";

const ContactLoading: FC = () => {
  return (
    <div>
      <Grid container spacing={5}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Skeleton
            width="100%"
            height="100vh"
            animation="wave"
            sx={{ borderRadius: "8px", height: "100vh" }}
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Stack width="90%">
            <Skeleton
              width="70%"
              height="60vh"
              animation="wave"
              sx={{ borderRadius: "8px", height: "100vh" }}
            />
            <Skeleton
              width="70%"
              height="40vh"
              animation="wave"
              sx={{ borderRadius: "8px", height: "100vh" }}
            />
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactLoading;
