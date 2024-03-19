import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { FC } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const About: FC = () => {
  return (
    <>
      <Stack sx={{ width: "100%", minHeight: "100vh" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            mt: 7,
          }}
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: "36px",
              fontWeight: 700,
            }}
          >
            who we are
          </Typography>
        </Box>
        <Box
          sx={{
            background: "#222222",
            p: 4,
            width: "100%",
            height: "auto",
            borderRadius: "8px 0px 0px 8px",
            mt: 5,
          }}
        >
          <Grid container spacing={1}>
            <Grid item lg={2} md={4} sm={6} xs={12}>
              <img
                src="./images/Rectangle 9.png"
                style={{ width: "90%", borderRadius: "8px", height: "260px" }}
                alt="Rectangle"
              />
            </Grid>
            <Grid item lg={9} md={8} sm={6} xs={12}>
              <Typography
                sx={{
                  fontSize: "32px",
                  fontWeight: 700,
                  lineHeight: "39px",
                  color: "#E7EAFF",
                }}
              >
                Role of Corporate <br /> Trainer
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 600,
                  lineHeight: "25px",
                  color: "#E7EAFF",
                }}
              >
                The reason a coaching business is such a great business model if
                you're <br /> in your 9-5 is that it doesn't require huge
                investments and you don't have <br /> to work 24/7. <br /> The
                reason a coaching business is such a great business model if
                you're <br /> in your 9-5 is that it doesn't require huge
                investments and you don't have <br /> to work 24/7.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={1} mt={5}>
          <Grid item lg={9} md={8} sm={6} xs={12}>
            <Typography
              sx={{
                fontSize: "32px",
                fontWeight: 700,
                lineHeight: "39px",
                color: "#626262",
              }}
            >
              Role of Corporate <br /> Trainer
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "25px",
                color: "#626262",
              }}
            >
              The reason a coaching business is such a great business model if
              you're <br /> in your 9-5 is that it doesn't require huge
              investments and you don't have <br /> to work 24/7. <br /> The
              reason a coaching business is such a great business model if
              you're <br /> in your 9-5 is that it doesn't require huge
              investments and you don't have <br /> to work 24/7.
            </Typography>
          </Grid>
          <Grid item lg={2} md={4} sm={6} xs={12}>
            <img
              src="./images/Rectangle 9.png"
              style={{ width: "90%", borderRadius: "8px", height: "260px" }}
              alt="Rectangle"
            />
          </Grid>
        </Grid>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          mt={5}
        >
          <Button
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
            endIcon={<ArrowRightAltIcon sx={{ color: "#828282" }} />}
            sx={{ textTransform: "none", color: "#828282", fontWeight: 600 }}
          >
            Read more
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default About;
