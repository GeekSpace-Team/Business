import { Typography } from "@mui/material";
import { FC } from "react";
import { useLocation } from "react-router-dom";

const ServiceCardDetail: FC = () => {
  const location = useLocation();
  const { serviceData } = location.state; // Assuming the state key is 'serviceData'

  console.log(serviceData.id);
  return (
    <div>
      <h1>{serviceData.name}</h1>
      <p>{serviceData.description}</p>
      <Typography
        sx={{
          color: "#222222",
          fontSize: "32px",
          fontWeight: 700,
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
          fontFamily: "Snell Roundhand, cursive",
        }}
      >
        {serviceData.attributes.short_description}
      </Typography>
    </div>
  );
};

export default ServiceCardDetail;
