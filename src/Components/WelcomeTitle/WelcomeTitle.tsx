import Logo from "../../assets/img-logo-dsDS_LOGO_MIN.svg"

interface WTitleProps{
    children : string
}

export const WelcomeTitle = ({children} : WTitleProps) => {
    return(
        <>
            <div>
                <img src={Logo} alt="Logo DevSolutions" />
                <h1> {children} </h1>
            </div>
        </>
    )
}