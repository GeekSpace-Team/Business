import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import MailIcon from "@mui/icons-material/Mail";

export const navItems = [
  {
    title: "About us",
    path: "/about",
    icon: <PeopleAltOutlinedIcon />,
  },

  {
    title: "Portfolio",
    path: "/portfolio",
    icon: <WorkOutlineOutlinedIcon />,
  },

  {
    title: "Our service",
    path: "/service",
    icon: <SettingsIcon />,
  },

  {
    title: "Contact us",
    path: "/contact",
    icon: <MailIcon />,
  },
];
