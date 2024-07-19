import { FC, useEffect, useState } from "react";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import LanguageModal from "../../assets/language/LanguageModal";
import { radius } from "../../common/style/commonStyle";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import Social from "../../components/bottom-social/Social";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { showError, showSuccess } from "../../components/alert/Alert";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";

interface FormData {
  username: string;
  email: string;
  text: string;
  phone: string;
  theme: string;
}

interface Theme {
  id: number;
  title_tm: string;
  title_ru: string;
  title_en: string;
}

const Contact: FC = () => {
  const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight);
  const [themes, setThemes] = useState<Theme[]>([]);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchThemes = async () => {
      try {
        const response = await axios.get("http://95.85.121.153:6856/data/");
        const filteredThemes = response.data
          .filter((item: any) => item.type === "contact_theme")
          .map((item: any) => ({
            id: item.id,
            title_tm: item.title_tm,
            title_ru: item.title_ru,
            title_en: item.title_en,
          }));
        setThemes(filteredThemes);
      } catch (error) {
        console.error("Error fetching themes:", error);
      }
    };

    fetchThemes();
  }, [i18n.language]); // Refetch themes when the language changes
  // Refetch data when the language changes
  // Add i18n.language as a dependency to refetch when language changes

  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    text: "",
    phone: "",
    theme: "",
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name as string]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://95.85.121.153:6426/send-mail", {
        to_mail: "microsoft7779@gmail.com",
        ...formData,
      });
      console.log("Message sent successfully:", response.data);
      showSuccess(t("contact.success"));
      setFormData({
        username: "",
        email: "",
        text: "",
        phone: "",
        theme: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      showError(t("contact.error"));
    }
  };

  const getThemeTitle = (theme: {
    id: number;
    title_tm: string;
    title_ru: string;
    title_en: string;
  }) => {
    switch (i18n.language) {
      case "tm":
        return theme.title_tm || theme.title_en; // Fallback to English if title_tm is missing
      case "ru":
        return theme.title_ru || theme.title_en; // Fallback to English if title_ru is missing
      case "en":
      default:
        return theme.title_en || theme.title_tm; // Fallback to TM if title_en is missing
    }
  };

  return (
    <>
      <Stack
        pt={3}
        pr={5}
        width={{ md: "100%", lg: "100%", sm: "100%", xs: "100%" }}
      >
        <Stack
          direction="row"
          pt={screenHeight >= 900 ? 3 : 0}
          pb={screenHeight >= 900 ? 11 : 4}
          spacing={1}
          justifyContent="center"
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: {
                lg: i18n.language === "ru" ? "33px" : "36px",
                md: i18n.language === "ru" ? "33px" : "36px",
                sm: "30px",
                xs: "30px",
              },
              fontWeight: 700,
              textAlign: "center",
            }}
            data-aos="fade-right"
            data-aos-delay={"500"}
          >
            {t("contact.contact")}
            <span
              data-aos="fade-left"
              data-aos-delay={"500"}
              style={{ color: "#fff", marginLeft: "10px" }}
            >
              {t("contact.contactC")}
            </span>
          </Typography>
        </Stack>
        <Grid container>
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            mb={3}
            data-aos="fade-up"
            data-aos-delay={"500"}
          >
            <Stack
              pl={{ lg: 5, md: 5, sm: 3, xs: 3 }}
              pr={{ lg: 5, md: 5, sm: 3, xs: 3 }}
            >
              <form onSubmit={handleSubmit}>
                <Box
                  sx={{
                    background: "rgba(10, 10, 14, 0.7)",
                    boxShadow:
                      "-1px -1px 20px 10px rgba(197, 196, 196, 0.2), 6px 6px 12px 2px rgba(0, 0, 0, 0.7)",
                    p: "35px 15px 35px 15px",
                    borderRadius: radius,
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    height: screenHeight >= 900 ? "55vh" : "54.5vh",
                  }}
                >
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder={t("contact.name")}
                    style={{
                      background: "#DFDFDF",
                      height:
                        screenHeight >= 900
                          ? "55px"
                          : screenHeight >= 550
                          ? "40px"
                          : "30px",
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("contact.mail")}
                    style={{
                      background: "#DFDFDF",
                      height:
                        screenHeight >= 900
                          ? "55px"
                          : screenHeight >= 550
                          ? "40px"
                          : "30px",
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
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t("contact.number")}
                    style={{
                      background: "#DFDFDF",
                      height:
                        screenHeight >= 900
                          ? "55px"
                          : screenHeight >= 550
                          ? "40px"
                          : "30px",
                      borderRadius: "8px",
                      paddingLeft: "15px",
                      border: "none",
                      outline: "none",
                      fontWeight: 600,
                      color: "#222222",
                    }}
                    required
                  />
                  <select
                    name="theme"
                    value={formData.theme}
                    onChange={handleChange}
                    style={{
                      background: "#DFDFDF",
                      height:
                        screenHeight >= 900
                          ? "55px"
                          : screenHeight >= 550
                          ? "40px"
                          : "30px",
                      borderRadius: "8px",
                      paddingLeft: "15px",
                      border: "none",
                      outline: "none",
                      fontWeight: 600,
                      color: "#222222",
                    }}
                    required
                  >
                    <option value="" disabled>
                      Tema
                    </option>
                    {themes.map((theme) => (
                      <option key={theme.id} value={theme.id}>
                        {getThemeTitle(theme)}
                      </option>
                    ))}
                    <option value="other">Other</option>
                  </select>

                  <textarea
                    name="text"
                    value={formData.text}
                    onChange={handleChange}
                    style={{
                      borderRadius: "8px",
                      padding: "15px",
                      backgroundColor: "#DFDFDF",
                      outline: "none",
                      fontWeight: 600,
                      color: "#222222",
                    }}
                    cols={30}
                    rows={screenHeight >= 900 ? 10 : 4}
                    placeholder={t("contact.message")}
                    required
                  ></textarea>
                  <Button
                    type="submit"
                    sx={{
                      background: "#222222",
                      color: "#fff",
                      fontWeight: 600,
                      borderRadius: "8px",
                      padding: "10px 15px",
                      cursor: "pointer",
                      "&:hover": {
                        background: "#222222",
                      },
                    }}
                  >
                    {t("contact.send")}
                  </Button>
                </Box>
              </form>
            </Stack>
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            data-aos="fade-down"
            data-aos-delay={"500"}
          >
            <Stack
              spacing={2}
              pl={{ lg: 0, md: 0, sm: 3, xs: 3 }}
              pr={{ lg: 0, md: 0, sm: 3, xs: 3 }}
              sx={{ height: screenHeight >= 900 ? "62vh" : "65vh" }}
            >
              <Box
                sx={{
                  background: "rgba(10, 10, 14, 0.7)",
                  boxShadow:
                    "-1px -1px 20px 10px rgba(197, 196, 196, 0.2), 6px 6px 12px 2px rgba(0, 0, 0, 0.7)",
                  borderRadius: radius,
                  p: "15px 0px 15px 0px",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  height: "60%",
                }}
              >
                <Stack
                  spacing={screenHeight >= 900 ? 4 : 1}
                  width={{ lg: "60%", md: "60%", sm: "90%", xs: "90%" }}
                >
                  <Stack spacing={1}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <LocationOnOutlinedIcon sx={{ color: "#E9E9E9" }} />
                      <Typography
                        sx={{
                          fontSize: screenHeight >= 900 ? "18px" : "16px",
                          fontWeight: screenHeight >= 900 ? 700 : 600,
                          color: "#E9E9E9",
                        }}
                      >
                        {t("contact.address")}
                      </Typography>
                    </Stack>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: 500,
                        color: "#E9E9E9",
                      }}
                    >
                      {t("contact.addressC")}
                    </Typography>
                  </Stack>
                  <Stack spacing={1}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <MailOutlineOutlinedIcon sx={{ color: "#E9E9E9" }} />
                      <Typography
                        sx={{
                          fontSize: screenHeight >= 900 ? "18px" : "16px",
                          fontWeight: screenHeight >= 900 ? 700 : 600,
                          color: "#E9E9E9",
                        }}
                      >
                        {t("contact.mail")}
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
                          fontSize: screenHeight >= 900 ? "18px" : "16px",
                          fontWeight: screenHeight >= 900 ? 700 : 600,
                          color: "#E9E9E9",
                        }}
                      >
                        {t("contact.phone")}
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
              <Box
                sx={{
                  display: {
                    lg: "none",
                    md: "none",
                    sm: "flex",
                    xs: "flex",
                    justifyContent: "center",
                  },
                }}
              >
                <Social />
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
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          position: "absolute",
          bottom: "5%",
          width: "100%",
          display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
        }}
        spacing={2}
      >
        <Button
          onClick={() => navigate("/services")}
          startIcon={
            <ArrowRightAltIcon
              sx={{
                color: "orange",
                transform: "rotate(180deg)",
                fontSize: "34px",
                width: "30px",
              }}
            />
          }
          sx={{
            textTransform: "none",
            color: "orange",
            fontWeight: 600,
            fontFamily: "Trebuchet MS, sans-serif",
          }}
        >
          {t("sidebar.services")}
        </Button>

        <Divider orientation="vertical" flexItem />
        <Button
          onClick={() => navigate("/")}
          endIcon={<ArrowRightAltIcon sx={{ color: "orange" }} />}
          sx={{
            textTransform: "none",
            color: "orange",
            fontWeight: 600,
            fontFamily: "Trebuchet MS, sans-serif",
          }}
        >
          {t("sidebar.home")}
        </Button>
      </Stack>
      <LanguageModal />
    </>
  );
};

export default Contact;
