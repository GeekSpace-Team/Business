import {
  Card,
  CardActionArea,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {
  arrowIconStyle,
  cardStyle,
  secondaryTypographyStyle,
  typographyStyle,
} from "../../common/style/commonStyle";

const HomeCard = () => {
  return (
    <div style={{ width: "96%" }}>
      <Card data-aos="fade-left" data-aos-delay={"700"} sx={cardStyle}>
        <CardActionArea>
          <CardContent>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ position: "relative" }}
            >
              <Typography sx={typographyStyle}>
                Iskander <br /> Kerimov
              </Typography>
              <Typography sx={secondaryTypographyStyle}>
                Business Couch <br /> with 7 years of experience
              </Typography>
              <IconButton>
                <ArrowRightAltIcon sx={arrowIconStyle} />
              </IconButton>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default HomeCard;
