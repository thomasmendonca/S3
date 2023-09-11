import Style from "./Slidewelcome.module.css";
import Logo from "../../assets/brand-logodevsolutions.svg";
import Guincho from "../../assets/guincho.svg";
import StyleF from "../FormLogin/Form.module.css";

export const SlideWelcome = () => {
  return (
    <>
      <div className={Style.containerSlide}>
        <div className={Style.containerTitle}>
          <h1>
            Bem-vindo(a) à
            <span className={Style.containerLogo}>
              <img src={Logo} alt="Logo DevSolutions" className={Style.logo} />
            </span>
          </h1>
        </div>
        <div className={Style.containerTextBold}>
          <p className={Style.textBold}>
            Aqui buscamos a melhor solução para o seu atendimento!
          </p>
        </div>
        <div className={Style.containerText}>
          <p className={Style.text}>
            Nós facilitamos o seu processo de atendimento, escolhendo o melhor
            modal para o seu veículo!
          </p>
        </div>
        <div className={Style.containerGuincho}>
          <img
            src={Guincho}
            alt="Imagem de Guincho"
            className={Style.guincho}
          />
        </div>
        <div className={Style.buttonContainer}>
          <button className={StyleF.buttonBlueSmall}>Começar</button>
        </div>
      </div>
    </>
  );
};
