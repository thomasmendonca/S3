import style from "./ContainerCriadores.module.css";
import Thomas from "../../assets/thomas.svg";
import Gabriel from "../../assets/gabriel.svg";
import MatheusG from "../../assets/matheusG.svg";
import MatheusD from "../../assets/MatheusD.svg";
import Kaue from "../../assets/kaue.svg";
export const ContainerCriadores = () => {
  return (
    <>
      <div className={style.container}>
        <h1 className={style.titleCriadores}>Criadores</h1>
        <p className={style.titleGitHub}>Repositório</p>
        <a
          className={style.linkGitHub}
          href="https://github.com/thomasmendonca/S3.git"
        >
          https://github.com/thomasmendonca/S3.git
        </a>
        <div className={style.groupCriadores}>
          <div className={style.cardCriadores}>
            <div className={style.containerImg}>
              <img src={Thomas} alt="Thomas" className={style.imgCriador} />
            </div>
            <div className={style.contentCriador}>
              <h1 className={style.especialidadeCriador}>
                Desenvolvedor Front End
              </h1>
              <div className={style.textCriador}>
                <p className={style.text}>Thomas Nícolas de Melo Mendonça</p>
                <p className={style.text}>RM:99832</p>
              </div>
            </div>
          </div>
          <div className={style.cardCriadores}>
            <div className={style.containerImg}>
              <img src={Gabriel} alt="Gabriel" className={style.imgCriador} />
            </div>
            <div className={style.contentCriador}>
              <h1 className={style.especialidadeCriador}>
                Desenvolvedor Back End
              </h1>
              <div className={style.textCriador}>
                <p className={style.text}>Gabriel Augusto Fernandes</p>
                <p className={style.text}>RM:98986</p>
              </div>
            </div>
          </div>
          <div className={style.cardCriadores}>
            <div className={style.containerImg}>
              <img src={MatheusG} alt="Matheus" className={style.imgCriador} />
            </div>
            <div className={style.contentCriador}>
              <h1 className={style.especialidadeCriador}>
                Desenvolvedor Front End
              </h1>
              <div className={style.textCriador}>
                <p className={style.text}>Matheus Giusto Lopes</p>
                <p className={style.text}>RM:99969</p>
              </div>
            </div>
          </div>
          <div className={style.cardCriadores}>
            <div className={style.containerImg}>
              <img src={MatheusD} alt="Matheus" className={style.imgCriador} />
            </div>
            <div className={style.contentCriador}>
              <h1 className={style.especialidadeCriador}>
                Desenvolvedor DataBase
              </h1>
              <div className={style.textCriador}>
                <p className={style.text}>Matheus Dantas de Sousa</p>
                <p className={style.text}>RM:98406 </p>
              </div>
            </div>
          </div>
          <div className={style.cardCriadores}>
            <div className={style.containerImg}>
              <img src={Kaue} alt="Kaue" className={style.imgCriador} />
            </div>
            <div className={style.contentCriador}>
              <h1 className={style.especialidadeCriador}>
                Desenvolvedor Back End
              </h1>
              <div className={style.textCriador}>
                <p className={style.text}>Kauê Fernandes Braz</p>
                <p className={style.text}>RM:97768</p>
              </div>
            </div>
          </div>
        </div>
        <button className={style.buttonBlue}>Voltar</button>
      </div>
    </>
  );
};
