import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './Components/Header/Header'
import {Container} from './Components/Container/Container'
import { Login } from './Pages/Login'
import { Cadastro } from './Pages/Cadastro'
import { CadastroVeiculo } from './Pages/CadastroVeiculo'
import './App.css'

function App() {


  return (
    <>
        {/* <Cadastro></Cadastro> */}
        <CadastroVeiculo></CadastroVeiculo>
        
        
      
    </>
  )
}

export default App
