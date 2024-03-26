import { Box } from "@mui/material";
import { FC } from "react";
import { radius } from "../common/style/commonStyle";

const TestBorder: FC = () => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          borderRadius: radius,
          border: "5px solid #222222",
        }}
      ></Box>
    </div>
  );
};

export default TestBorder;
