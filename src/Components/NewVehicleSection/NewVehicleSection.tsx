import { useNavigate } from "react-router";
import Style from "./NewVehicleSection.module.css";
import { routes } from "../../routes";

export const NewVehicle = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(routes.cadastroVeiculo)
  }
  return (
    <>
      <div className={Style.contentContainer}>
        <div className={Style.subtitleContainer}>
          <h2 className={Style.subtitle}>Novo veículo</h2>
        </div>
        <div className={Style.textContainer}>
          <p className={Style.text}>Para cadastrar um novo veículo, basta clicar no botão abaixo:</p>
        </div>
        <div className={Style.buttonContainer}>
          <button type="button" 
          className={Style.buttonBlue}
          onClick={handleClick}>
            Cadastrar veículo
          </button>
        </div>
      </div>
    </>
  );
};
