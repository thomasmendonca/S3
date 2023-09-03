import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './Components/Header/Header'
import {Container} from './Components/Container/Container'
import { FormLogin } from './Components/FormLogin/FormLogin'
import './App.css'

function App() {


  return (
    <>
        <Header></Header>
        {/* <Container></Container> */}
        <FormLogin/>
        
        
        
      
    </>
  )
}

export default App
