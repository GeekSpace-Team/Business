import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { Box, Button } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#fff",
  boxShadow: 24,
  width: 300,
  p: 4,
  borderRadius: "6px",
  display: "flex",
  justifyContent: "center",
};

const MusicPlayer: React.FC = () => {
  const [open, setOpen] = React.useState(true);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    setPlaying(true);
    setOpen(false);
  };

  console.log(playing);
  return (
    <>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button
            startIcon={<MusicNoteIcon />}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              background: "#222222",
              "&:hover": { background: "#222222" },
            }}
            onClick={togglePlay}
          >
            Play
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default MusicPlayer;
