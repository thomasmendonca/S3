import style from './Footer.module.css'
import FooterLogo from '../../assets/footerLogo.svg'
import FacebookLogo from '../../assets/facebookLogo.svg'
import InstagramLogo from '../../assets/instagramLogo.svg'
export const Footer = ()=>{
    return(
    <>
        <div className={style.footer}>
            <div className={style.footerLogoContainer}>
                <img className={style.footerLogo}src={FooterLogo} alt="" />
            </div>
                <ul className={style.footerList}>
                    <li><a className={style.footerLinkDefault}>Quem Somos</a></li>
                    <li><a className={style.footerLinkDefault}>Whatsapp</a></li>
                    <li><a className={style.footerLinkDefault}>Chat Online</a></li>
                    <li><a className={style.footerLinkDefault}>E-mail</a></li>
                    <li><a className={style.footerLinkDefault}>Endereço</a></li>
                    <li><a className={style.footerLinkDarkBlue}>Perguntas Frequentes</a></li>
                </ul>
                <div className={style.footerSocialMedia}>
                    <a href=""><img src={InstagramLogo} alt="Instagram" /></a>
                    <a href=""><img src={FacebookLogo} alt="Facebook" /></a>
                </div>
            
        </div>
    </>
    )
}