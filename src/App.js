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

  const [pets, setPets] = useState([
    {
      nome: 'Mel',
      descricao: 'Mel é carinhosa, gordinha e fofa',
      imagem: 'https://i.ibb.co/vxTTngf/mel.jpg',
      tipo: 'Gatos'
    },
    {
      nome: 'Cherry',
      descricao: 'Cherry prefere ficar na dela e ama sachês',
      imagem: 'https://i.ibb.co/jfSFn5Q/cherry.jpg',
      tipo: 'Gatos'
    },
    {
      nome: 'Kitty',
      descricao: 'Kitty é bagunceira e ama carinho',
      imagem: 'https://i.ibb.co/gZ7d1M9/kitty.jpg',
      tipo: 'Gatos'
    },
    {
      nome: 'Fred',
      descricao: 'Dentuço que ama legumes',
      imagem: 'https://i.ibb.co/27TPbkD/fred.jpg',
      tipo: 'Coelhos'
    },
    {
      nome: 'Tico e Teco',
      descricao: 'Irmãos inseparáveis :)',
      imagem: 'https://i.ibb.co/XsfDtJ1/ticoeteco.jpg',
      tipo: 'Aves'
    },
    {
      nome: 'Rei Julian',
      descricao: 'Exibido e que gosta de dançar!',
      imagem: 'https://i.ibb.co/fNhsxHh/julian.jpg',
      tipo: 'Exóticos'
    },
    {
      nome: 'Feneco',
      descricao: 'Fofo mas bravo também',
      imagem: 'https://i.ibb.co/Mf1tqwn/feneco.jpg',
      tipo: 'Exóticos'
    },
    {
      nome: 'Juma',
      descricao: 'Corajosa, brava e poderosa',
      imagem: 'https://i.ibb.co/hFtPBgd/juma.jpg',
      tipo: 'Selvagens'
    },
    {
      nome: 'Alex',
      descricao: 'o Rei',
      imagem: 'https://i.ibb.co/8KSS0WR/alex.jpg',
      tipo: 'Selvagens'
    },
    {
      nome: 'Lean',
      descricao: 'Gosta de dormir, correr e brincar muito',
      imagem: 'https://i.ibb.co/whGLh3W/lean.jpg',
      tipo: 'Outros'
    }
  ])

  const aoNovoPetAdicionado = (pet) => {
    setPets([...pets, pet])
  }

  return (
    
    <div className="App">
      <Banner/>
      <Formulario tipos={tipos.map(tipo => tipo.nome)}  aoPetCadastrado= {pet => aoNovoPetAdicionado(pet)}/>
      {tipos.map(tipo => <Tipo key={tipo.nome} nome={tipo.nome} corPrimaria={tipo.corPrimaria} 
      corSecundaria={tipo.corSecundaria} pets={pets.filter(pet => pet.tipo === tipo.nome)} />
      )}
      <Rodape/>
    </div>
  );
}

export default App;
