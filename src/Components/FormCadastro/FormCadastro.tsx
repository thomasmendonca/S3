import style from '../FormLogin/Form.module.css'
import Logo from '../../assets/logo-dsDS_LOGO_MIN.svg'
export const FormCadastro = () => {
    return (
        
            <div className={style.formContainer}>
                <form className={style.form}>
                <h1 className={style.formTittle}>Criar Conta</h1>
                <p className={style.formText}>Preencha seus dados para criar sua conta</p>
                <div className={style.formInputContainer}>  
                    <input className={style.formInputSmall} type="text" name="" id="cpf" placeholder='Digite seu CPF'/>
                    <input className={style.formInputSmall} type="password" name="" id="email" placeholder='Digite seu email'/>
                </div> 
                <div className={style.formGenderContainer}>
                    <p className={style.formGenderText}>Gênero:*</p>
                    <div className={style.formGenderSelect}>
                        <label htmlFor="fem">Feminino</label>
                        <input type="radio" name='gender' id="fem"/>
                        <label htmlFor="masc">Masculino</label>
                        <input type="radio" name='gender' id="masc"/>
                        <label htmlFor="other">Outros</label>
                        <input type="radio" name='gender' id="other"/>
                    </div>
                </div>

                <div className={style.formInputContainer}>  
                    <input className={style.formInputSmall} type="number" name="" id="tel" placeholder='Digite seu telefone'/>
                    <input className={style.formInputSmall} type="password" name="" id="password" placeholder='Crie sua nova senha'/>
                    <input className={style.formInputSmall} type="password" name="" id="confirmpassword" placeholder='Confirme sua nova senha'/>
                </div> 
                
                
                <a href="" className={style.buttonLarge}>Criar Conta</a>
                </form>
                
                

            </div>
            

        
    )
}