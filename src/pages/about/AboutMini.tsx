import { FC } from "react";

const AboutMini: FC = () => {
  const imageUrl = "/images/321467.jpg";
  const text =
    "This is a longer text that will wrap and continue below the image.This is a longer text that will wrap and continue below the image.This is a longer text that will wrap and continue below the image.This is a longer text that will wrap and continue below the image.This is a longer text that will wrap and continue below the image.This is a longer text that will wrap and continue below the image.This is a longer text that will wrap and continue below the image.This is a longer text that will wrap and continue below the image.This is a longer text that will wrap and continue below the image.This is a longer text that will wrap and continue below the image.This is a longer text that will wrap and continue below the image.This is a longer text that will wrap and continue below the image.This is a longer text that will wrap and continue below the image.";

  return (
    <>
      <div
        className="image-text-container"
        style={{ display: "flex", flexGrow: "initial" }}
      >
        <img
          src={imageUrl}
          alt="Image description"
          style={{ width: "140px", height: "160px" }}
        />
        <p>{text}</p>
      </div>
    </>
  );
};

export default AboutMini;
