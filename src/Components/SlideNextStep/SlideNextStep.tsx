import { useNavigate } from "react-router";
import Style from "./SlideNextStep.module.css";
import { routes } from "../../routes";

export const SlideNextStep = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(routes.start);
  };
  
  const handleNext = () => {
    navigate(routes.ready)
  }

  return (
    <>
      <div className={Style.containerSlide}>
        <div className={Style.containerTitle}>
          <h1>Próximos passos!</h1>
        </div>
        <div className={Style.containerText}>
          <p className={Style.text}>
            Após registrar o seu veículo, você terá total autonomia para acionar
            o sinistro quando desejar.
          </p>
          <p className={Style.text}>
            É simples: clique no botão{" "}
            <span className={Style.redText}>"Acionar Sinistro"</span> e
            compartilhe a sua localização. Imediatamente, nossa equipe estará
            pronta para atender você.
          </p>
        </div>

        <div className={Style.buttonContainer}>
          <button className={Style.buttonRed} onClick={handleBack}> Voltar </button>
          <button className={Style.buttonBlue} onClick={handleNext}> Próximo </button>
        </div>
      </div>
    </>
  );
};
