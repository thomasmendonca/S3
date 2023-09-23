import { useNavigate } from 'react-router';
import Style from './SlideStart.module.css'
import { routes } from '../../routes';

export const SlideStart = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(routes.welcome);
  };
  
  const handleNext = () => {
    navigate(routes.nextStep)
  }
  return (
    <>
      <div className={Style.containerSlide}>
        <div className={Style.containerTitle}>
          <h1>Vamos iniciar!</h1>
        </div>
        <div className={Style.containerTextBold}>
          <p className={Style.textBold}>Primeiros passos</p>
        </div>
        <div className={Style.containerText}>
          <p className={Style.text}>
            <span className={Style.whiteText}>
              Para registrar o seu veículo, é possível acessar a página
              designada para o{" "}
              <span className={Style.redText}>Cadastro do veículo</span>, onde
              você terá a oportunidade de inserir todas as informações
              pertinentes e detalhadas sobre o seu automóvel.
            </span>
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
