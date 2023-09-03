import React from 'react'
import {StyledHeader, StyledHeaderContainer,ImgLogoContainer,ImgLogo} from './Header.Styled.ts'
import Logo from '../../assets/resqaiLogo.png'



export const Header = () => {
    return (
        <StyledHeader>
            <StyledHeaderContainer>
                <ImgLogoContainer>
                    <ImgLogo src={Logo}></ImgLogo>
                </ImgLogoContainer>    
            </StyledHeaderContainer>
        </StyledHeader>
    )
}