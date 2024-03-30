import { Stack } from "@mui/material";
import { FC } from "react";

const ServiceSx: FC = () => {
  return (
    <>
      <Stack width={"100%"} direction="row" pl={5} pr={5} pt={5}>
        <span
          style={{ background: "#828282" }}
          className="octagon o-color green"
        >
          hiii
        </span>
      </Stack>
      {/* <div className="outter">
        <div className="inner"></div>
      </div> */}
    </>
  );
};

export default ServiceSx;
