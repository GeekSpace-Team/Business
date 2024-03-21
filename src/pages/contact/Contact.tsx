import { FC } from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import LanguageModal from "../../assets/language/LanguageModal";

const Contact: FC = () => {
  return (
    <>
      <Stack pt={3} width="100%">
        <Stack direction="row" pb={4} spacing={1} justifyContent="center">
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
        <Grid container spacing={7}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Stack pl={5} pr={5}>
              <form action="contact">
                <Box
                  sx={{
                    background: "#828282",
                    p: "35px 15px 35px 15px",
                    borderRadius: "8px",
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    height: "55vh",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Full Name"
                    style={{
                      background: "#DFDFDF",
                      height: "40px",
                      borderRadius: "8px",
                      paddingLeft: "15px",
                      border: "none",
                      outline: "none",
                      fontWeight: 600,
                      color: "#222222",
                    }}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Mail"
                    style={{
                      background: "#DFDFDF",
                      height: "40px",
                      borderRadius: "8px",
                      paddingLeft: "15px",
                      border: "none",
                      outline: "none",
                      fontWeight: 600,
                      color: "#222222",
                    }}
                    required
                  />
                  {/* <textarea
                    name="message"
                    style={{
                      borderRadius: "8px",
                      padding: "15px",
                      backgroundColor: "#DFDFDF",
                      outline: "none",
                      fontWeight: 600,
                      color: "#222222",
                    }}
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    required
                  ></textarea> */}
                  <Button
                    sx={{
                      background: "#222222",
                      color: "#FFF083",
                      fontSize: "20px",
                      fontWeight: 600,
                      height: "40px",
                      borderRadius: "8px",
                      textTransform: "none",
                      "&:hover": { background: "#222222" },
                    }}
                    variant="contained"
                    type="submit"
                  >
                    Send
                  </Button>
                </Box>
              </form>
            </Stack>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Stack>
              <Box
                sx={{
                  background: "#828282",
                  borderRadius: "8px",
                  p: "15px 0px 15px 0px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Stack spacing={2} width="60%">
                  <Stack>
                    <Stack direction="row"></Stack>
                  </Stack>
                  <Stack>1</Stack>
                  <Stack>2</Stack>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
      <LanguageModal />
    </>
  );
};

export default Contact;
