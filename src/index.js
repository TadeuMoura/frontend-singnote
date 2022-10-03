import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import ConsultaAdmin from "./pages/admin/ConsultaAdmin";
import CadastrarProduto from "./pages/admin/CadastroProduto/index.js";
import PageHome from "./pages/admin/home/index.js";
import PagePedidos from "./pages/admin/pedidos/index.js"
import BuscaUsuario from "./pages/usuario/busca";

import AbaLateralUSU from "./components/usuario/aba-lateral-usu";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/admin/consulta" element={<  ConsultaAdmin/>} />
                <Route path="/" element={<  CadastrarProduto/>} />
                <Route path="/admin/home" element={< PageHome />} />
                <Route path="/admin/pedidos" element={< PagePedidos />} />
                <Route path="/abausu" element={< AbaLateralUSU />} />
                <Route path="/cabeusu" element={< BuscaUsuario />} />
            </Routes>
        </BrowserRouter>
  </React.StrictMode>
);
