import { useState } from 'react'
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Tipo from './componentes/Tipo';

function App() {

  const tipos = [{
    nome: 'Gatos',
    corPrimaria: '#57C278',
    corSecundaria: '#D9F7E9'
  },
  {
    nome: 'Cachorros',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8F8FF'
  },
  {
    nome: 'Coelhos',
    corPrimaria: '#A6D157',
    corSecundaria: '#F0F8E2'
  },
  {
    nome: 'Aves',
    corPrimaria: '#E06B69',
    corSecundaria: '#FDE7E8'
  },
  {
    nome: 'Exóticos',
    corPrimaria: '#DB6EBF',
    corSecundaria: '#FAE9F5'
  },
  {
    nome: 'Selvagens',
    corPrimaria: '#FFBA05',
    corSecundaria: '#FFF5D9'
  },
  {
    nome: 'Outros',
    corPrimaria: '#FF8A29',
    corSecundaria: '#FFEEDF'
  }
]

  const [pets, setPets] = useState([])

  const aoNovoPetAdicionado = (pet) => {

    setPets([...pets, pet])
  }

  return (
    
    <div className="App">
      <Banner/>
      <Formulario tipos={tipos.map(tipo => tipo.nome)}  aoPetCadastrado= {pet => aoNovoPetAdicionado(pet)}/>

      {tipos.map(tipo => <Tipo 
      key={tipo.nome} 
      nome={tipo.nome}  
      corPrimaria={tipo.corPrimaria} 
      corSecundaria={tipo.corSecundaria}
      pets={pets.filter(pet => pet.tipo === tipo.nome)} 
      />
      )}
      <Rodape/>

    </div>
  );
}

export default App;
