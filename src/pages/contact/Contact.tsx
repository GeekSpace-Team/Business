import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import LanguageModal from "../../assets/language/LanguageModal";

const Contact: FC = () => {
  return (
    <>
      <Stack
        direction="row"
        spacing={1}
        pt={10}
        justifyContent="center"
        width="100%"
      >
        <Typography
          sx={{ color: "#222222", fontSize: "36px", fontWeight: 700 }}
        >
          Contact Us
        </Typography>
        <Typography
          sx={{ color: "#828282", fontSize: "36px", fontWeight: 700 }}
        >
          to strategize about your business
        </Typography>
      </Stack>
      <LanguageModal />
    </>
  );
};

export default Contact;
