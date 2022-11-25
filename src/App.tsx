// TODO: Fazer a versão mobile
// TODO: Criar os sistemas de filtro, busca e ordenamento
// TODO: Verificar o problema de retorno com apenas 30

import React, { useState } from "react";
import Usuario from "./components/Usuario";
import Projeto from "./components/Projeto";
import "./App.css";
import api from "./service/api";
import { AiOutlineSearch } from "react-icons/ai";

function App() {
  const [busca, setBusca] = useState("");
  const [usuario, setUsuario] = useState({});
  const [projetos, setProjetos] = useState<any[]>([]);

  const buscar = async () => {
    try {
      const respostaUsuario = await api.get(`${busca}`);
      setUsuario(respostaUsuario.data);
      try {
        const respostaProjetos = await api.get(`${busca}/repos`);
        setProjetos(respostaProjetos.data);
      } catch (e) {
        setProjetos([]);
      }
    } catch (e) {
      setUsuario({});
      setProjetos([]);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusca(e.target.value);
  };

  const buscaInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") buscar();
  };

  const remover = (id: number) => {
    setProjetos((projetos) => {
      return projetos.filter((projeto) => projeto.id !== id);
    });
  };

  return (
    <main className="main">
      <header className="header">
        <img src={require('./assets/GikiHub.png')} alt="Logo do GikiHub" className="logo"/>
        <h1 className="gikihub">Giki Hub</h1>
      </header>
      <div className="buscador">
        <input
          type="text"
          placeholder="Buscar por usuário"
          value={busca}
          onChange={handleInput}
          className="input"
          onKeyDown={buscaInput}
        />
        <button onClick={buscar} className="buscar">
          <AiOutlineSearch color="#FFFFFF" size={25} />
        </button>
      </div>
      <Usuario usuario={usuario} />
      {projetos.length > 0 && (
        <section className="projeto">
          <h2 className="titulo_projeto">Repositorios: {projetos.length}</h2>
          {/* <div>
            <div>ordenador - nome, data criacao, data atualizacao, acompanhando, forks, estrelas (pra cima ou pra baixo)</div>
            <div>buscador - nome, descricao</div>
            <div>filtro - linguagem</div>
          </div> */}
          {projetos.map((projeto) => (
            <Projeto key={projeto.id} projeto={projeto} remover={remover} />
          ))}
        </section>
      )}
    </main>
  );
}

export default App;
