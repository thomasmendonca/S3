import Rocket from "../../assets/rocket.svg";
import Style from "./SlideReady.module.css";

export const SlideReady = () => {
  return (
    <>
      <div className={Style.containerSlide}>
        <div className={Style.containerTitle}>
          <h1> Tudo pronto! </h1>
        </div>

        <div className={Style.containerText}>
          <p className={Style.text}>
            Além disso, oferecemos um chat para um atendimento personalizado e
            ágil. Estamos aqui para ajudar!
          </p>
        </div>
        <div className={Style.containerRocket}>
          <img src={Rocket} alt="Imagem de Foguete" className={Style.rocket} />
        </div>
        <div className={Style.buttonContainer}>
          <button className={Style.buttonRed}> Voltar </button>
          <button className={Style.buttonBlue}> Concluir </button>
        </div>
      </div>
    </>
  );
};
