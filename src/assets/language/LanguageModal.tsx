import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "rgba(10, 10, 14, 10)",
  boxShadow: 24,
  p: 4,
  borderRadius: "6px",
  color: "#fff",
};

export default function LanguageModal() {
  const [open, setOpen] = React.useState(false);
  const { i18n } = useTranslation();

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("languageModalShown", "true");
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    handleClose();
  };

  React.useEffect(() => {
    const hasModalBeenShown = localStorage.getItem("languageModalShown");
    if (!hasModalBeenShown) {
      setOpen(true);
    }
  }, []);

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack direction="row" spacing={2}>
            <Stack
              onClick={() => changeLanguage("tm")}
              direction="row"
              sx={{
                width: "auto",
                height: "auto",
                padding: 2,
                borderRadius: "8px",
                cursor: "pointer",
                "&:hover": {
                  background: "#1e1e1e",
                  color: "orange",
                },
              }}
              spacing={1}
              alignItems="center"
            >
              <img
                style={{ width: "30px" }}
                src="./images/tm.png"
                alt="tm flag"
              />
              <Typography>Turkmen</Typography>
            </Stack>
            <Stack
              onClick={() => changeLanguage("en")}
              direction="row"
              sx={{
                width: "auto",
                height: "auto",
                padding: 2,
                borderRadius: "8px",
                cursor: "pointer",
                "&:hover": {
                  background: "#1e1e1e",
                  color: "orange",
                },
              }}
              spacing={1}
              alignItems="center"
            >
              <img
                style={{ width: "30px" }}
                src="./images/uk.svg"
                alt="tm flag"
              />
              <Typography>English</Typography>
            </Stack>
            <Stack
              onClick={() => changeLanguage("ru")}
              direction="row"
              sx={{
                width: "auto",
                height: "auto",
                padding: 2,
                borderRadius: "8px",
                cursor: "pointer",
                "&:hover": {
                  background: "#1e1e1e",
                  color: "orange",
                },
              }}
              spacing={1}
              alignItems="center"
            >
              <img
                style={{ width: "30px" }}
                src="./images/ru.svg"
                alt="tm flag"
              />
              <Typography>Russian</Typography>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
