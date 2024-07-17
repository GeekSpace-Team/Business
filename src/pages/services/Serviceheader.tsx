import "../../common/style/service.css";

interface ServiceheaderProps {
  slide: {
    title_en: string;
    description_en: string;
    asset: {
      url: string;
    };
  };
}

const Serviceheader: React.FC<ServiceheaderProps> = ({ slide }) => {
  return (
    <div className="serviceHeaderContainer">
      <img
        src={
          slide.asset.url || "/images/Default_Role_of_Corporate_Trainer_3.jpg"
        }
        alt=""
      />
      <div className="texts">
        <h1>{slide.title_en}</h1>
        <p>{slide.description_en}</p>
      </div>
    </div>
  );
};

export default Serviceheader;
