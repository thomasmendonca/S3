import style from './Form.module.css'


export const FormLogin = () => {
    return (
        <form>
            <div className={style.form}>
                <h1 className={style.formTittle}>Entrar</h1>
                <p className={style.formText}>Preencha seus dados para efetuar o login</p>
                <div className={style.formInputContainer}>  
                    <input className={style.formInput} type="text" name="" id="cpf" />
                    <input className={style.formInput} type="password" name="" id="senha" />
                </div> 
                <a href="" className={style.formLink}>Esqueceu a senha?</a>
                <a href="" className={style.ButtonLarge}>Entrar</a>
            </div>

        </form>
    )
}