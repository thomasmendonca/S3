import Logo from "../../assets/img-logo-dsDS_LOGO_MIN.svg"
import Style from "./WelcomeTitle.module.css"

interface WTitleProps{
    children : string
}

export const WelcomeTitle = ({children} : WTitleProps) => {
    return(
        <>
            <div className={Style.containerTitle}>
                <div className={Style.containerImage}>
                    <img src={Logo} alt="Logo DevSolutions"  className={Style.image}/>
                </div>
                <div className={Style.containerText}>
                    <h1 className={Style.text}> {children} </h1>
                </div>
            </div>
        </>
    )
}