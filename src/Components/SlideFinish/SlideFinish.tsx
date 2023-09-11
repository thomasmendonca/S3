import Style from "./SlideFinish.module.css";
import Tick from "../../assets/correct.svg";

export const SlideFinish = () => {
  return (
    <>
      <div className={Style.containerSlide}>
        <div className={Style.containerTitle}>
          <h1>
            Tudo certo!{" "}
            <span className={Style.containerTick}>
              <img src={Tick} alt="Sinal de correto" className={Style.tick} />
            </span>
          </h1>
        </div>
        <div className={Style.containerText}>
          <p className={Style.text}>
            Estamos encaminhando seus dados para o nosso atendente virtual, que
            irá entrar em contato para obter mais informações sobre o ocorrido e
            oferecer a melhor assistência possível.
          </p>
        </div>

        <div className={Style.buttonContainer}>
          <button className={Style.buttonBlue}> Continuar </button>
        </div>
      </div>
    </>
  );
};
