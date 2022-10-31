import {FiSearch} from 'react-icons/fi';
import { useState } from 'react';
import api from './services/api';

import './styles.css';

const App = () => {
  const [input, setInput] = useState("")
  const [cep, setCep] = useState({})

 const handleSearch = async () =>  {
    // 06255400/json/
    if(input === ''){
      alert("preencha algum cep")
      return
    }

    try{
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput("")
    }catch{
      alert("erro ao buscar")
      setInput("")
    }
    
  }
  return (
    <div className="container"> 
      <h1 className="title">Buscador Cep</h1>
      <div className="containerInput">
        <input 
        type="text"
        placeholder="Digite seu cep"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#fff"/>
        </button>
      </div>

        {Object.keys(cep).length > 0 && (
        <div className="main">
          <h2>Cep: {cep.cep}</h2>

          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </div>
        )}


      </div>

  );
}

export default App;
