import React, { FC, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import useSWR from "swr";
import LoadingComponent from "../../components/loading/LoadingComponent";
import { useTranslation } from "react-i18next";

interface ContentData {
  id: number;
  title_tm: string;
  title_ru: string;
  title_en: string;
  description_tm: string;
  description_ru: string;
  description_en: string;
  short_tm: string;
  short_ru: string;
  short_en: string;
  type: string;
  order: number;
  url: string;
  assetId: number;
  created_at: string;
  updated_at: string;
  asset: {
    id: number;
    url: string;
    type: string;
    blurhash: string;
  };
}

type LanguageKey = "title" | "description" | "short";
type LanguageSuffix = "_tm" | "_ru" | "_en";
type TranslatableKeys = `${LanguageKey}${LanguageSuffix}`;

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const AboutMini: FC = () => {
  const { i18n } = useTranslation();

  const { data, error, isLoading, mutate } = useSWR<ContentData[]>(
    `http://95.85.121.153:6856/data`,
    fetcher
  );

  useEffect(() => {
    mutate();
  }, [i18n.language, mutate]);

  if (isLoading)
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LoadingComponent />
      </div>
    );
  if (error) return <div>An error occurred: {error.message}</div>;

  const getTextByLanguage = (item: ContentData, key: LanguageKey) => {
    const langSuffix: LanguageSuffix =
      i18n.language === "tm" ? "_tm" : i18n.language === "ru" ? "_ru" : "_en";
    const translatableKey = `${key}${langSuffix}` as TranslatableKeys;
    return item[translatableKey];
  };

  return (
    <>
      <Stack
        sx={{
          display: { lg: "none", md: "none", sm: "flex", xs: "flex" },
          height: "100%",
          overflow: "auto",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            color: "#fff",
            fontSize: "24px",
            fontWeight: 700,
            fontFamily: "Trebuchet MS, sans-serif",
            textTransform: "uppercase",
          }}
        >
          who we are
        </Typography>
        {data?.map((item) => (
          <React.Fragment key={item.id}>
            {item.type === "about_title" && (
              <Stack
                direction="row"
                key={`about_mini-${item.id}`}
                width="100%"
                justifyContent="flex-end"
              >
                <Box
                  sx={{
                    background: "rgba(10, 10, 14, 0.7)",
                    p: 1,
                    width: "92%",
                    borderRadius: "8px 0px 0px 8px",
                    color: "#E7EAFF",
                  }}
                >
                  {item.asset?.url && (
                    <img
                      className="aboutImage"
                      style={{
                        width: "140px",
                        height: "160px",
                        borderRadius: "8px",
                        marginRight: 10,
                      }}
                      src={item.asset.url}
                      alt="Image"
                    />
                  )}
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "20px",
                      fontWeight: 700,
                      lineHeight: "30px",
                      width: "80%",
                      fontFamily: "Trebuchet MS, sans-serif",
                    }}
                  >
                    {getTextByLanguage(item, "title")}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: 600,
                      lineHeight: "25px",
                      fontFamily: "Trebuchet MS, sans-serif",
                    }}
                  >
                    {getTextByLanguage(item, "description")}
                  </Typography>
                </Box>
              </Stack>
            )}
            {item.type === "about_description" && (
              <Stack p={2}>
                <Box
                  sx={{
                    p: 1,
                    width: "92%",
                    height: "auto",
                  }}
                >
                  {item.asset?.url && (
                    <img
                      className="aboutImageRight"
                      style={{
                        width: "140px",
                        height: "160px",
                        borderRadius: "8px",
                        marginLeft: 10,
                      }}
                      src={item.asset.url}
                      alt="Image"
                    />
                  )}
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "20px",
                      fontWeight: 700,
                      lineHeight: "30px",
                      fontFamily: "Trebuchet MS, sans-serif",
                      width: "50%",
                    }}
                  >
                    {getTextByLanguage(item, "title")}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: 600,
                      lineHeight: "25px",
                      fontFamily: "Trebuchet MS, sans-serif",
                    }}
                  >
                    {getTextByLanguage(item, "short")}
                  </Typography>
                </Box>
              </Stack>
            )}
          </React.Fragment>
        ))}
      </Stack>
    </>
  );
};

export default AboutMini;
