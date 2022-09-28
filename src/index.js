import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 
import CadastrarProduto from "./pages/admin/CadastroProduto/index.js";
import PageHome from "./pages/admin/home/index.js";
import PagePedidos from "./pages/admin/pedidos/index.js"



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
