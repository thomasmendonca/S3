import Style from "./CallCasualtySection.module.css";
import CarCrash from "../../assets/carcrash-icon.svg";
import { useNavigate } from "react-router";
import { routes } from "../../routes";

export const CallCasualty = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(routes.cadastroVeiculo)
  }
  
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
          <button type="button" 
          className={Style.buttonRed}
          onClick={handleClick}>
            Acionar sinistro
          </button>
        </div>
      </div>
    </>
  );
};
