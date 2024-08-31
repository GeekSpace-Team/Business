import { useTranslation } from "react-i18next";
import "../../common/style/service.css";
import { ServiceheaderProps } from "./types/serviceTypeAndInterface";

const Serviceheader: React.FC<ServiceheaderProps> = ({ slide }) => {
  const { i18n } = useTranslation();

  // Dynamic keys for title and description
  const titleKey = `title_${i18n.language}`;
  const descriptionKey = `description_${i18n.language}`;

  return (
    <div className="serviceHeaderContainer">
      <img
        src={
          slide.asset.url || "/images/Default_Role_of_Corporate_Trainer_3.jpg"
        }
        alt="Service Header"
      />
      <div className="texts">
        <h1>{slide[titleKey]}</h1>

        <p
          dangerouslySetInnerHTML={{
            __html: slide[descriptionKey],
          }}
        ></p>
      </div>
    </div>
  );
};

export default Serviceheader;
