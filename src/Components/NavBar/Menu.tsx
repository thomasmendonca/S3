import {GiHamburgerMenu} from 'react-icons/gi'
import {FaRocketchat} from 'react-icons/fa'
import {IoPersonCircleSharp} from 'react-icons/io5'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../routes'

export const Menu = () => {

    const [open, setOpen] = useState(false)
    const [menuColor, setMenuColor] = useState("#003049")
    const closeMenu = () => { setOpen(false) }

    return(
        <nav className="Navigation NaviOpen">
            <GiHamburgerMenu 
                className="Hamburger" 
                size="40px" 
                color={menuColor}
                onClick = {() => {
                    setOpen(!open)
                    {open ? setMenuColor("#003049") : setMenuColor("#669BBC")}
                }}/>
            
            {open && 
            <>
                <ul className='List'>
                    <li>
                        Minha Conta
                        <IoPersonCircleSharp
                        className="PersonCircle"
                        size="3rem"
                        />
                    </li>
                    <li>Meus Veículos</li>
                    <li><Link to={routes.welcome}> Dúvidas Frequentes </Link></li>
                    <li><Link to={routes.criadores}> Criadores </Link></li>
                    <li>
                        Chat Rápido 
                        <FaRocketchat 
                        className="RocketChat"
                        size="3rem"
                        /> 
                    </li>
                    <li onClick={closeMenu}>Sair</li>
                </ul>
            </>
            }
        </nav>
    )
}