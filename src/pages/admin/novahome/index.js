import './index.scss'
import AbaLateralADM from '../../../components/adm/aba-lateral-adm'
import Cabecalho from '../../../components/adm/cabecalho-adm'


export default function NovaHome () {
    return(
        <div className='parte-principal'>
            <AbaLateralADM/>
            <div className='pagina'>
                <Cabecalho/>
                <div className='fundo'><span></span></div>
            </div>
        </div>
    )
}
