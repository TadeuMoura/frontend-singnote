import './index.scss'
import AbaLateralADM from '../../../components/adm/aba-lateral-adm/index.js'
import Cabecalho from '../../../components/adm/cabecalho-adm/index.js'

export default function ConsultaAdmin () {
    return(
        <div className='pagina-pedido'>
            <AbaLateralADM/>
            <div className='pagina-pedido2'>
                <Cabecalho/>
                <div className='config-pagina-pedido'>
                    <div className='pagina-pedido-lado'>
                        <div className='tela-pedido'>
                            <div className='descricao-pedido-produto'>
                                <div className='tipo-e-imagem'>
                                    <div><span></span></div><h1>Situação de pedido</h1>
                                    <div className='linha-mini-descricao'>
                                        <p className='mini-descricao'>Produto: <span className='mini-descricao-cinza'>Bateria</span></p>
                                        <p className='mini-descricao'>Produto: <span className='mini-descricao-cinza'>Bateria</span></p>
                                    </div>
                                    <img src='' alt='img-produto' className='imagem-produto'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
