// ArrowIcon.tsx
import { FC } from "react";
import { IconButton } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { arrowIconStyle } from "../../common/style/commonStyle";

const ArrowIcon: FC = () => {
  return (
    <IconButton
      sx={{
        ...arrowIconStyle,
        width: "40px",
        height: "40px",
        top: 0,
        right: 0,
      }}
    >
      <ArrowRightAltIcon />
    </IconButton>
  );
};

export default ArrowIcon;
