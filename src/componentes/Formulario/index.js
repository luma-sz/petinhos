import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {
    
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [imagem, setImagem] = useState('')
    const [tipo, setTipo] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoPetCadastrado({
            nome, idade, imagem, tipo
        })
        setNome('')
        setIdade('')
        setImagem('')
        setTipo('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card pet!</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o nome do seu pet"
                 valor={nome} aoAlterado={valor => setNome(valor)}/>
                <CampoTexto obrigatorio={true} label="Idade" placeholder="Digite a idade do seu pet"
                 valor={idade} aoAlterado={valor => setIdade(valor)}/>
                <CampoTexto obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem"
                 valor={imagem} aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa  obrigatorio={true} label="Tipo" itens={props.tipos}
                 valor={tipo} aoAlterado={valor => setTipo(valor)}/>
                <Botao> Criar card </Botao>
            </form>
        </section>
    )
}


export default Formulario