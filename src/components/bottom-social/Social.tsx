import { FC } from "react";
import { IconButton, Stack, Tooltip } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import { TikTokOutlined } from "@ant-design/icons";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Social: FC = () => {
  return (
    <>
      <Stack direction="row" spacing={1}>
        <Tooltip title="Instagram">
          <IconButton>
            <InstagramIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="TikTok">
          <IconButton>
            <TikTokOutlined />
          </IconButton>
        </Tooltip>
        <Tooltip title="Telegram">
          <IconButton>
            <TelegramIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Linked In">
          <IconButton>
            <LinkedInIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    </>
  );
};

export default Social;
