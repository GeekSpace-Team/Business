import { Grid, Skeleton, Stack } from "@mui/material";
import { FC } from "react";

const LoadingHome: FC = () => {
  return (
    <>
      <Grid container spacing={5}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Stack pt={10}>
            <Skeleton width="100%" height="50px" animation="wave" />
            <Skeleton width="100%" height="50px" animation="wave" />
            <Skeleton width="100%" height="200px" animation="wave" />
            <Stack spacing={3} direction="row">
              <Skeleton
                width="30px"
                height="55px"
                sx={{ borderRadius: "50%" }}
                animation="wave"
              />
              <Skeleton
                width="30px"
                height="55px"
                sx={{ borderRadius: "50%" }}
                animation="wave"
              />
              <Skeleton
                width="30px"
                height="55px"
                sx={{ borderRadius: "50%" }}
                animation="wave"
              />
              <Skeleton
                width="30px"
                height="55px"
                sx={{ borderRadius: "50%" }}
                animation="wave"
              />
            </Stack>
          </Stack>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Skeleton width="70%" height="100vh" animation="wave" />
        </Grid>
      </Grid>
    </>
  );
};

export default LoadingHome;
