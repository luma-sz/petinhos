import './TipoPet.css'

const Tipo = (props) => {

    const css = {backgroundColor: props.corSecundaria}

    return (
        <section className='tipo' style={css} >
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
        </section>
    )
}

export default Tipo