import { FC } from "react";
import { IconButton, Stack, Tooltip } from "@mui/material";
import axios from "axios";
import { useQuery } from "react-query";

interface SocialMediaData {
  id: number;
  title_tm: string;
  title_ru: string;
  title_en: string;
  url: string;
  asset: {
    id: number;
    url: string;
  };
}

const Social: FC = () => {
  const { data, isLoading, error } = useQuery<SocialMediaData[]>(
    "socialMediaData",
    async () => {
      const response = await axios.get("https://ikmaslahat.com/api/data/");
      return response.data.data;
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div>Error: {(error as Error)?.message || "An error occurred."}</div>
    );

  if (!Array.isArray(data)) {
    return <div>Data is not in the expected format.</div>;
  }

  return (
    <>
      <Stack direction="row" spacing={{ lg: 0, md: 0, sm: 2, xs: 2 }}>
        {data.map((socialMedia) => {
          const { title_en, url, asset } = socialMedia;
          const iconUrl = asset?.url;
          if (title_en && url && iconUrl) {
            return (
              <Tooltip key={socialMedia.id} title={title_en}>
                <IconButton href={url} target="_blank">
                  <img
                    data-aos="fade-down"
                    data-aos-delay={`${socialMedia.id * 200}`}
                    src={iconUrl}
                    alt={title_en}
                    style={{ width: 32, height: 32, color: "#fff" }}
                  />
                </IconButton>
              </Tooltip>
            );
          }
          return null;
        })}
      </Stack>
    </>
  );
};

export default Social;
