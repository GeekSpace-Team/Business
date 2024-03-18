import { FC } from "react";
import { Box } from "@mui/material";
import LanguageModal from "../../assets/language/LanguageModal";
import song from "../../assets/mp3/music1.mp3";

const Home: FC = () => {
  return (
    <div>
      <Box
        sx={{
          background: "#E9E9E9",
          borderRadius: "8px",
        }}
      >
        <LanguageModal />
        <audio src={song} controls autoPlay></audio>
      </Box>
    </div>
  );
};

export default Home;
