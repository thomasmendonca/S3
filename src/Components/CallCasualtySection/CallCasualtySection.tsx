import Style from "./CallCasualtySection.module.css";
import CarCrash from "../../assets/carcrash-icon.svg";

export const CallCasualty = () => {
  return (
    <>
      <div className={Style.contentContainer}>
        <div className={Style.subtitleContainer}>
          <h2 className={Style.subtitle}>
            Em caso de acidente ou problemas mecânicos, estamos aqui para
            ajudar.
          </h2>
        </div>
        <div className={Style.imageContainer}>
          <img src={CarCrash} alt="Acidente de carro" className={Style.image} />
        </div>
        <div className={Style.textContainer}>
          <p className={Style.text}>
            Para acionar o sinistro, clique no botão abaixo:
          </p>
        </div>
        <div className={Style.buttonContainer}>
          <button type="button" className={Style.buttonRed}>
            Acionar sinistro
          </button>
        </div>
      </div>
    </>
  );
};
