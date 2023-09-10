import Style from "./SlideWelcome.module.css";
import Logo from "../../assets/brand-logodevsolutions.svg";
import Guincho from "../../assets/guincho.svg"

export const SlideWelcome = () => {
  return (
    <>
      <div className={Style.containerTitle}>
        <h1>
          Bem-vindo(a) à
          <span className={Style.containerLogo}>
            <img src={Logo} alt="Logo DevSolutions" />
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
            Nós facilitamos o seu processo de atendimento, escolhendo o melhor modal para o seu veículo!
        </p>
      </div>
      <div className={Style.containerGuincho}>
        <img src={Guincho} alt="Imagem de Guincho" className={Style.guincho}/>
      </div>
    </>
  );
};
