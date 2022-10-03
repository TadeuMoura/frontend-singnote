import './index.scss'
import CaixaProdutoUsuario from '../../../components/usuario/caixa-produto-usuario'
import AbaLateralUSU from '../../../components/usuario/aba-lateral-usu'
import CabecalhoUSU from '../../../components/usuario/cabecalho-usu'

export default function BuscaUsuario () {
    return(
        <main className='page-consulta-usu'>
            <AbaLateralUSU/>
            <div className='elementos-consulta-usu'>
                <div className='elemento-cabecalho'>
                    <CabecalhoUSU/>
                </div>
                <div/>
                    <div className='elementos-pesquisa-usu'>  
                        <input className='input-pesquisa-usu' type="search" placeholder='Buscar por nome' ></input>
                        <button className='btn-buscar'>Buscar</button>
                    </div>
                    <div className='cards-produto-usu'>
                        <CaixaProdutoUsuario/>
                        <CaixaProdutoUsuario/>
                        <CaixaProdutoUsuario/>
                        <CaixaProdutoUsuario/>
                        <CaixaProdutoUsuario/>
                        <CaixaProdutoUsuario/>
                        <CaixaProdutoUsuario/>
                        <CaixaProdutoUsuario/>
                    </div>
            </div>
            
        </main>
    )
}