import style from './Form.module.css'
import Logo from '../../assets/logo-dsDS_LOGO_MIN.svg'
export const FormLogin = () => {
    return (
        
            <div className={style.formContainer}>
                <form className={style.form}>
                <h1 className={style.formTittle}>Entrar</h1>
                <p className={style.formText}>Preencha seus dados para efetuar o login</p>
                <div className={style.formInputContainer}>  
                    <input className={style.formInput} type="text" name="" id="cpf" />
                    <input className={style.formInput} type="password" name="" id="senha" />
                </div> 
                <div className={style.forgotPwdContainer}>
                    <a href="" className={style.formLink}>Esqueceu a senha?</a>
                </div>
                <a href="" className={style.buttonLarge}>Entrar</a>
                </form>
                
                <div className={style.or}>
                    <hr /><p>ou</p><hr />
                </div>
                <div className={style.logoContainer}>
                    <img className={style.logo}src={Logo} alt="" />
                </div>
                <div className={style.register}>
                    <p className={style.formText}>Novo no DevSolutions?</p>
                    <a className={style.formLink}href="">Cadastre-se</a>
                </div>

            </div>
            

        
    )
}