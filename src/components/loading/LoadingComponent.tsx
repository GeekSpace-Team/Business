import { Stack } from "@mui/material";
import { FC } from "react";

const LoadingComponent: FC = () => {
  return (
    <>
      <Stack
        width="100%"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <div className="loader"></div>
      </Stack>
    </>
  );
};

export default LoadingComponent;
