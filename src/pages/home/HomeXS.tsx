import { FC } from "react";
import {
  Stack,
  Box,
  Typography,
  Card,
  IconButton,
  CardActionArea,
  CardContent,
} from "@mui/material";
import Social from "../../components/bottom-social/Social";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const HomeXS: FC = () => {
  return (
    <>
      <Typography
        sx={{
          color: "#222222",
          fontSize: "24px",
          lineHeight: "30px",
          textAlign: "center",
          fontWeight: 700,
        }}
      >
        Role of Corporate Trainer in Educating the Workface
      </Typography>
      <Typography
        sx={{
          color: "#6B6B6B",
          fontSize: "16px",
          lineHeight: "20px",
          textAlign: "center",
          fontWeight: 600,
          mt: 3,
        }}
      >
        Identify new business opportunities in order to improve profitability
        and help the business grow. Identify new business profitability and help
        the business grow.
      </Typography>
      <Stack direction="row" justifyContent="center" mt={2}>
        <Social />
      </Stack>
      <Box
        sx={{
          width: "100%",
          height: "470px",
          background: "url(/images/321467.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "8px",
          p: 1,
          display: "flex",
          alignItems: "flex-end",
          mt: 3,
        }}
      >
        <Card
          sx={{
            width: "100%",
            height: "auto",
            p: 1,
            borderRadius: "8px",
            background: "#D9D9D9",
          }}
        >
          <CardActionArea>
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ position: "relative" }}
              >
                <Typography
                  sx={{
                    color: "#222222",
                    fontSize: "20px",
                    fontWeight: 700,
                    lineHeight: "30px",
                  }}
                >
                  Iskander <br /> Kerimov
                </Typography>
                <Typography
                  sx={{
                    color: "#676767",
                    fontSize: "15px",
                    fontWeight: 500,
                    lineHeight: "18px",
                    position: "absolute",
                    pl: "40%",
                    pt: "2%",
                  }}
                >
                  Business Couch <br /> with 7 years of experience
                </Typography>
                <IconButton>
                  <ArrowRightAltIcon
                    sx={{
                      color: "#828282",
                      transform: "rotate(320deg)",
                      fontSize: "34px",
                      width: "30px",
                      position: "absolute",
                      top: 0,
                    }}
                  />
                </IconButton>
              </Stack>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </>
  );
};

export default HomeXS;
