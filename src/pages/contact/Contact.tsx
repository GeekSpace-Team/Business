import { FC, useEffect, useState } from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import LanguageModal from "../../assets/language/LanguageModal";
import { radius } from "../../common/style/commonStyle";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";

const Contact: FC = () => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Stack pt={3} width="100%">
        <Stack
          direction="row"
          pt={screenHeight >= 900 ? 3 : 0}
          pb={screenHeight >= 900 ? 11 : 4}
          spacing={1}
          justifyContent="center"
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
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Stack pl={5} pr={5}>
              <form action="contact">
                <Box
                  sx={{
                    background: "#828282",
                    p: "35px 15px 35px 15px",
                    borderRadius: radius,
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
                      height: screenHeight >= 900 ? "55px" : "40px",
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
                      height: screenHeight >= 900 ? "55px" : "40px",
                      borderRadius: "8px",
                      paddingLeft: "15px",
                      border: "none",
                      outline: "none",
                      fontWeight: 600,
                      color: "#222222",
                    }}
                    required
                  />
                  <textarea
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
                    cols={30}
                    rows={screenHeight >= 900 ? 17 : 10}
                    placeholder="Message"
                    required
                  ></textarea>
                  <Button
                    sx={{
                      background: " #222222",
                      color: "#FFF083",
                      fontSize: "20px",
                      fontWeight: 600,
                      height: screenHeight >= 900 ? "55px" : "40px",
                      borderRadius: radius,
                      textTransform: "none",
                      "&:hover": { background: " #222222" },
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
            <Stack
              spacing={2}
              sx={{ height: screenHeight >= 900 ? "62vh" : "55vh" }}
            >
              <Box
                sx={{
                  background: "#828282",
                  borderRadius: radius,
                  // p: "15px 0px 15px 0px",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  height: "60%",
                }}
              >
                <Stack spacing={screenHeight >= 900 ? 4 : 2} width="60%">
                  <Stack spacing={1}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <LocationOnOutlinedIcon sx={{ color: "#E9E9E9" }} />
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: 700,
                          color: "#E9E9E9",
                        }}
                      >
                        Our Address
                      </Typography>
                    </Stack>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: 500,
                        color: "#E9E9E9",
                      }}
                    >
                      123 Main Street, Anytown, USA 12345:
                    </Typography>
                  </Stack>
                  <Stack spacing={1}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <MailOutlineOutlinedIcon sx={{ color: "#E9E9E9" }} />
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: 700,
                          color: "#E9E9E9",
                        }}
                      >
                        Mail
                      </Typography>
                    </Stack>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: 500,
                        color: "#E9E9E9",
                      }}
                    >
                      iskakerim@gmail.com
                    </Typography>
                  </Stack>
                  <Stack spacing={1}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <PhoneEnabledOutlinedIcon sx={{ color: "#E9E9E9" }} />
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: 700,
                          color: "#E9E9E9",
                        }}
                      >
                        Our Phone Number
                      </Typography>
                    </Stack>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: 500,
                        color: "#E9E9E9",
                      }}
                    >
                      +993 62 531104
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
              <img
                src="./images/Rectangle 17.png"
                alt="Rectangle 17.png"
                style={{ width: "100%", height: "48%", borderRadius: "8px" }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Stack>
      <LanguageModal />
    </>
  );
};

export default Contact;
