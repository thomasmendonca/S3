import style from '../FormLogin/Form.module.css'
import styleS from './FormCadastroVeiculo.module.css'
import Logo from '../../assets/logo-dsDS_LOGO_MIN.svg'
export const FormCadastroVeiculo = () =>{
    return(
        <>
            <div className={style.logoContainerStatic}>
                <img className={style.logoStatic}src={Logo} alt="Logo" />
            </div>
            <div className={styleS.formContainerStatic}>
                <h1 className={styleS.formTittle}>Cadastre um novo veículo.</h1>
                <p className={style.formText}>Prencha os dados do seu veículo:</p>
                <form className={styleS.form}>          
                    <div className={style.formSelectGroup}>
                    <select name="" id="marca" className={style.formSelect}>
                        <option disabled selected hidden>Selecione a marca do veículo</option>
                        <option value=""></option>
                    </select>
                    <select name="" id="modelo" className={style.formSelect}>
                        <option disabled selected hidden>Selecione o modelo do veículo</option>
                        <option value=""></option>
                    </select>
                    <select name="" id="peso" className={style.formSelect}>
                        <option disabled selected hidden>Selecione o peso do veículo</option>
                        <option value=""></option>
                    </select>
                    <select name="" id="pesocarga" className={style.formSelect}>
                        <option disabled selected hidden>Selecione a capacidade de carga</option>
                        <option value=""></option>
                    </select>
                    <select name="" id="qtdeixos" className={style.formSelect}>
                        <option disabled selected hidden>Selecione a quantidade de eixos</option>
                        <option value=""></option>
                    </select>
                    <select name="" id="tipocarga" className={style.formSelect}>
                        <option disabled selected hidden>Selecione o tipo de carga</option>
                        <option value=""></option>
                    </select>
                    </div>
                    <button className={style.buttonBlue}>Cadastrar Veículo</button>
                </form>
            </div>

        </>
    )
}