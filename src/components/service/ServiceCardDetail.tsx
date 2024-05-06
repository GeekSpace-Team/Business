import { Typography } from "@mui/material";
import { FC } from "react";
import { useLocation } from "react-router-dom";

const ServiceCardDetail: FC = () => {
  const location = useLocation();
  const { serviceData } = location.state;

  return (
    <div>
      <Typography
        sx={{
          color: "#222222",
          fontSize: "32px",
          fontWeight: 700,
          fontFamily: "Trebuchet MS, sans-serif",
        }}
      >
        {serviceData.attributes.title}
      </Typography>

      <Typography
        sx={{
          color: "#222222",
          fontSize: "22px",
          lineHeight: "48px",
          fontWeight: 500,
          fontFamily: "Trebuchet MS, sans-serif",
        }}
      >
        {serviceData.attributes.short_description}
      </Typography>
    </div>
  );
};

export default ServiceCardDetail;
