// HomeTypography.tsx
import { FC } from "react";
import { Typography } from "@mui/material";
import { homeTypographyStyle } from "../../common/style/commonStyle";

const HomeTypography: FC<{ text: any }> = ({ text }) => {
  return <Typography sx={homeTypographyStyle}>{text}</Typography>;
};

export default HomeTypography;
