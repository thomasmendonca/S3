import {StyledContainer} from './Container.Styled'
import {Header} from '../Header/Header'


interface ContainerProps{
    children: React.ReactNode
}


export const Container = ({children}:ContainerProps ) => {
    return (
        <StyledContainer>
            <Header></Header>
        </StyledContainer>
    )
}