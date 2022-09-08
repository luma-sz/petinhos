import Pet from '../Pet'
import './Tipo.css'

const Tipo = (props) => {

    const css = {backgroundColor: props.corSecundaria}

    return (
        <section className="tipo" style={css} >
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>

            <div className="petsAdicionados">
                {props.pets.map(pet => <Pet nome={pet.nome} 
                idade={pet.idade} imagem={pet.imagem}/>)}
            </div>
        </section>
    )
}

export default Tipo