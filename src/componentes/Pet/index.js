import './Pet.css'

const Pet = (props) => {
    return (
        <div className='pet'>
            <div className='cabecalho'>
                <img src={props.imagem} alt={props.nome}/>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.idade}</h5>
            </div>
        </div>
    )
}

export default Pet