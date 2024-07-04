import React, { useState } from 'react';
import axios from 'axios';
import './CepSearch.css';
const CepSearch = () => {

  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setError('');
    setAddress(null);

    try {
      const response = await axios.get(`http://viacep.com.br/ws/${cep}/json/`);
      if (response.data.erro) {
        setError('CEP não encontrado');
      } else {
        setAddress(response.data);
      }
    } catch (err) {
      setError('Erro na busca do CEP');
    }
  };

  return (
    <div className="cep-search">
      <h1>Buscar Endereço por CEP</h1>
      <input
        type="text"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        placeholder="Digite o CEP"
      />
      <button onClick={handleSearch}>Buscar</button>
      {error && <p className="error">{error}</p>}
      {address && (
        <div className="address">
          <p><strong>Rua:</strong> {address.logradouro}</p>
          <p><strong>Bairro:</strong> {address.bairro}</p>
          <p><strong>Cidade:</strong> {address.localidade}</p>
          <p><strong>Estado:</strong> {address.uf}</p>
        </div>
      )}

<div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </div>
  );
};

export default CepSearch;
