import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {routes} from "./routes"
import Home from "./Pages/Home";
import Cadastro from "./Pages/Cadastro";
import Login from "./Pages/Login";
import CadastroVeiculo from "./Pages/CadastroVeiculo";
import Welcome from "./Pages/Welcome";
import Start from "./Pages/Start";
import NextStep from "./Pages/NextStep";
import Ready from "./Pages/Ready";
import Finish from "./Pages/Finish";
import Criadores from "./Pages/Criadores";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={< Home/>} />
        <Route path={routes.cadastro} element={< Cadastro/>} />
        <Route path={routes.login} element={< Login/>} />
        <Route path={routes.cadastroVeiculo} element={< CadastroVeiculo/>} />
        <Route path={routes.welcome} element={< Welcome/>} />
        <Route path={routes.start} element={< Start/>} />
        <Route path={routes.nextStep} element={< NextStep/>} />
        <Route path={routes.ready} element={< Ready/>} />
        <Route path={routes.finish} element={< Finish/>} />
        <Route path={routes.criadores} element={< Criadores/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
