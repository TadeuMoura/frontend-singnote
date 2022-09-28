import './index.scss'
import { Link } from 'react-router-dom'

export default function AbaLateralADM() {

return(

<div className="aba-lateral"> {/*Começo da aba lateral*/} 
            
            <div className="opcoes"> {/*Começo das opções*/}
                <Link className="icone-opcoes"><img src="/image/silhueta-negra-de-casa-sem-porta 2.png" alt="opcao"/><a href='http://localhost:3000/admin/home' className="nome-icones">Home</a></Link> 
                <Link className="icone-opcoes"><img src="/image/lupa 2.png" alt="opcao"/><p className="nome-icones">Consulta</p></Link>
                <Link className="icone-opcoes"><img src="/image/add-button.png" alt="opcao"/><a href="http://localhost:3000/admin/produto" className="nome-icones">Cadastro</a></Link>
                <Link className="icone-opcoes"><img src="/image/carrinho-carrinho 2.png" alt="opcao"/><p className="nome-icones">Pedidos</p></Link>
            </div> {/*Fim das opções*/}
        
        <div className="icone-opcoes"><img src="/image/Vector.png" alt="opcao"/><p className="nome-icones">Sair</p></div> 

</div> /*Fim da aba lateral*/
)}