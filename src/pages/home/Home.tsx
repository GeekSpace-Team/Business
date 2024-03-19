import { FC } from "react";
import { Box, Stack } from "@mui/material";
import LanguageModal from "../../assets/language/LanguageModal";

const Home: FC = () => {
  return (
    <>
      <Stack width="100%">
        <Box
          sx={{
            background: "#E9E9E9",
            borderRadius: "8px",
          }}
        >
          <LanguageModal />
        </Box>
      </Stack>
    </>
  );
};

export default Home;
