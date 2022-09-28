import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 
import CadastrarProduto from "./pages/admin/CadastroProduto/produto.js";
import PageHome from "./pages/admin/home/homeADM";
import PagePedidos from "./pages/admin/pedidos/pedido";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<  CadastrarProduto/>} />
                <Route path="/admin/home" element={< PageHome />} />
                <Route path="/admin/pedidos" element={< PagePedidos />} />
            </Routes>
        </BrowserRouter>
  </React.StrictMode>
);
