import Style from "../styles/Home.module.css";
import { NewVehicle } from "../Components/NewVehicleSection/NewVehicleSection";
import { WelcomeTitle } from "../Components/WelcomeTitle/WelcomeTitle";
import { CallCasualty } from "../Components/CallCasualtySection/CallCasualtySection";
import { NavBar } from "../Components/NavBar/NavBar";

export default function Home () {
  return (
    <>
      <div className={Style.contentContainer}>
        <div className={Style.menuContainer}>
          <NavBar />
        </div>
        <div className={Style.containerWelcome}>
          <WelcomeTitle>Usuário(a)</WelcomeTitle>
        </div>
        <div className={Style.containerNewVehicle}>
          <NewVehicle />
        </div>
        <div className={Style.containerCasualty}>
          <CallCasualty />
        </div>
      </div>
    </>
  );
};
