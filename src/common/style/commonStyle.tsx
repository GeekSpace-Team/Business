import { BorderRadius, backgroundColor } from "../types/types";

export const radius: BorderRadius = {
  borderRadius: "8px",
};

export const bgColor: backgroundColor = {
  backgroundColor: "#222222",
};

// Home style starts here ............................................................/////////////////////////////////////////////////////////

export const displayLg = {
  lg: "block",
  md: "block",
  sm: "flex",
  xs: "flex",
};

export const typeAnimationStyle = {
  color: "orange",
  fontSize: "2.4em",
  fontWeight: 900,
  lineHeight: "2em",
  width: "70%", // Adjust as needed
  fontFamily: "Trebuchet MS, sans-serif",
};

export const homeTypographyStyle = {
  color: "#fff",
  fontSize: { lg: "16px", md: "16px", sm: "15px", xs: "14px" },
  fontWeight: { lg: 600, md: 600, sm: 500, xs: 400 },
  lineHeight: { lg: "30px", md: "30px", sm: "25px", xs: "22px" },
  width: { md: "80%", lg: "80%", sm: "100%", xs: "100%" },
  fontFamily: "Trebuchet MS, sans-serif",
};

export const boxStyle = {
  width: "100%",
  height: "85vh",
  backgroundSize: "cover",
  backgroundPosition: "0 50px",
  backgroundRepeat: "no-repeat",
  borderRadius: "8px",
  p: 1,
  display: "flex",
  alignItems: "flex-end",
};

export const cardStyle = {
  width: "100%",
  height: "auto",
  p: 1,
  borderRadius: "8px",
  background: "#D9D9D9",
};

export const typographyStyle = {
  color: "#222222",
  fontSize: "20px",
  fontWeight: 700,
  lineHeight: "30px",
  fontFamily: "Trebuchet MS, sans-serif",
};

export const secondaryTypographyStyle = {
  color: "#676767",
  fontSize: "15px",
  fontWeight: 500,
  lineHeight: "18px",
  position: "absolute",
  pl: "40%",
  pt: "2%",
  fontFamily: "Trebuchet MS, sans-serif",
};

export const arrowIconStyle = {
  color: "#828282",
  transform: "rotate(320deg)",
  fontSize: "34px",
  width: "30px",
  position: "absolute",
};

export const homeItemsStyle = {
  position: "absolute",
  bottom: 0,
  background: "#222222",
  borderTopRightRadius: "8px",
  borderTopLeftRadius: "8px",
  alignItems: "center",
  justifyContent: "center",
  p: 1,
};

export const homeItemsStyleXS = {
  background: "#222222",
  borderTopRightRadius: "8px",
  borderTopLeftRadius: "8px",
};
