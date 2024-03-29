import { FC } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box, Button, Divider } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const AboutMini: FC = () => {
  const navigate = useNavigate();
  const imageUrl = "/images/321467.jpg";
  const text =
    "The reason a coaching business is such a great business model if you're in your 9-5 is that it doesn't require huge investments and you don't have to work 24/7. The reason a coaching business is such a great business model if you're in your 9-5 is that it doesn't require huge investments and you don't have to work 24/7.";

  const maxLength = 182;
  const textInsideStack = text.slice(0, maxLength);
  const textOutsideStack = text.slice(maxLength);

  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          color: "#222222",
          fontSize: "24px",
          fontWeight: 700,
        }}
      >
        WHO WE ARE
      </Typography>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{
          width: "100%",
        }}
        speed={5000}
        loop={true}
      >
        <SwiperSlide>
          <Stack direction="row" width="100%" justifyContent="flex-end">
            <Box
              sx={{
                background: "#222222",
                p: 1,
                width: "92%",
                borderRadius: "8px 0px 0px 8px",
                color: "#E7EAFF",
              }}
            >
              <Stack direction="row" spacing={2}>
                <img
                  src={imageUrl}
                  alt="Image description"
                  style={{
                    width: "140px",
                    height: "160px",
                    borderRadius: "8px",
                  }}
                />
                <Stack>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 700,
                      lineHeight: "30px",
                      width: "80%",
                    }}
                  >
                    Role of Corporate Trainer
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 600,
                      lineHeight: "25px",
                    }}
                  >
                    {textInsideStack}
                  </Typography>
                </Stack>
              </Stack>
              {textOutsideStack.length > 0 && (
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "25px",
                  }}
                >
                  {textOutsideStack}
                </Typography>
              )}
            </Box>
          </Stack>
          <Stack p={3}>
            <Stack direction="row" spacing={2}>
              <Stack>
                <Typography
                  sx={{
                    color: "#222222",
                    fontSize: "20px",
                    fontWeight: 700,
                    lineHeight: "30px",
                    width: "80%",
                  }}
                >
                  Role of Corporate Trainer
                </Typography>
                <Typography
                  sx={{
                    color: "#222222",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "25px",
                  }}
                >
                  {textInsideStack}
                </Typography>
              </Stack>
              <img
                src={imageUrl}
                alt="Image description"
                style={{ width: "140px", height: "160px", borderRadius: "8px" }}
              />
            </Stack>
            {textOutsideStack.length > 0 && (
              <Typography
                sx={{
                  color: "#222222",
                  fontSize: "16px",
                  fontWeight: 600,
                  lineHeight: "25px",
                }}
              >
                {textOutsideStack}
              </Typography>
            )}
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack direction="row" width="100%" justifyContent="flex-end">
            <Box
              sx={{
                background: "#222222",
                p: 1,
                width: "92%",
                borderRadius: "8px 0px 0px 8px",
                color: "#E7EAFF",
              }}
            >
              <Stack direction="row" spacing={2}>
                <img
                  src={imageUrl}
                  alt="Image description"
                  style={{
                    width: "140px",
                    height: "160px",
                    borderRadius: "8px",
                  }}
                />
                <Stack>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 700,
                      lineHeight: "30px",
                      width: "80%",
                    }}
                  >
                    Role of Corporate Trainer
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 600,
                      lineHeight: "25px",
                    }}
                  >
                    {textInsideStack}
                  </Typography>
                </Stack>
              </Stack>
              {textOutsideStack.length > 0 && (
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "25px",
                  }}
                >
                  {textOutsideStack}
                </Typography>
              )}
            </Box>
          </Stack>
          <Stack p={3}>
            <Stack direction="row" spacing={2}>
              <Stack>
                <Typography
                  sx={{
                    color: "#222222",
                    fontSize: "20px",
                    fontWeight: 700,
                    lineHeight: "30px",
                    width: "80%",
                  }}
                >
                  Role of Corporate Trainer
                </Typography>
                <Typography
                  sx={{
                    color: "#222222",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "25px",
                  }}
                >
                  {textInsideStack}
                </Typography>
              </Stack>
              <img
                src={imageUrl}
                alt="Image description"
                style={{ width: "140px", height: "160px", borderRadius: "8px" }}
              />
            </Stack>
            {textOutsideStack.length > 0 && (
              <Typography
                sx={{
                  color: "#222222",
                  fontSize: "16px",
                  fontWeight: 600,
                  lineHeight: "25px",
                }}
              >
                {textOutsideStack}
              </Typography>
            )}
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack direction="row" width="100%" justifyContent="flex-end">
            <Box
              sx={{
                background: "#222222",
                p: 1,
                width: "92%",
                borderRadius: "8px 0px 0px 8px",
                color: "#E7EAFF",
              }}
            >
              <Stack direction="row" spacing={2}>
                <img
                  src={imageUrl}
                  alt="Image description"
                  style={{
                    width: "140px",
                    height: "160px",
                    borderRadius: "8px",
                  }}
                />
                <Stack>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 700,
                      lineHeight: "30px",
                      width: "80%",
                    }}
                  >
                    Role of Corporate Trainer
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 600,
                      lineHeight: "25px",
                    }}
                  >
                    {textInsideStack}
                  </Typography>
                </Stack>
              </Stack>
              {textOutsideStack.length > 0 && (
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "25px",
                  }}
                >
                  {textOutsideStack}
                </Typography>
              )}
            </Box>
          </Stack>
          <Stack p={3}>
            <Stack direction="row" spacing={2}>
              <Stack>
                <Typography
                  sx={{
                    color: "#222222",
                    fontSize: "20px",
                    fontWeight: 700,
                    lineHeight: "30px",
                    width: "80%",
                  }}
                >
                  Role of Corporate Trainer
                </Typography>
                <Typography
                  sx={{
                    color: "#222222",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "25px",
                  }}
                >
                  {textInsideStack}
                </Typography>
              </Stack>
              <img
                src={imageUrl}
                alt="Image description"
                style={{ width: "140px", height: "160px", borderRadius: "8px" }}
              />
            </Stack>
            {textOutsideStack.length > 0 && (
              <Typography
                sx={{
                  color: "#222222",
                  fontSize: "16px",
                  fontWeight: 600,
                  lineHeight: "25px",
                }}
              >
                {textOutsideStack}
              </Typography>
            )}
          </Stack>
        </SwiperSlide>
      </Swiper>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Button
          onClick={() => navigate("/")}
          startIcon={
            <ArrowRightAltIcon
              sx={{
                color: "#828282",
                transform: "rotate(180deg)",
                fontSize: "34px",
                width: "30px",
              }}
            />
          }
          sx={{ textTransform: "none", color: "#828282", fontWeight: 600 }}
        >
          Previous
        </Button>

        <Divider orientation="vertical" />
        <Button
          onClick={() => navigate("/portfolio")}
          endIcon={<ArrowRightAltIcon sx={{ color: "#828282" }} />}
          sx={{ textTransform: "none", color: "#828282", fontWeight: 600 }}
        >
          Read more
        </Button>
      </Stack>
    </>
  );
};

export default AboutMini;
