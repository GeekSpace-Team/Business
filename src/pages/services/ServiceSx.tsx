import { Box } from "@mui/material";
import { FC } from "react";

const ServiceSx: FC = () => {
  return (
    <Box
      pr={13}
      pl={5}
      sx={{ display: { md: "none", lg: "none", xs: "flex", sm: "flex" } }}
    >
      <Box id="octagon"></Box>
    </Box>
  );
};

export default ServiceSx;
