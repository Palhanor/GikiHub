import React from 'react';
import Usuario from './components/Usuario';
import Projeto from './components/Projeto';
import './App.css';

const github = require('./assets/github.svg')

// Usuario - https://api.github.com/users/Palhanor
// Repositorios - https://api.github.com/users/Palhanor/repos

function App() {
  return (
    <main className='main'>
      <header>
        <h1>GikiHub</h1>
        <img src={github} alt="Logo do Github" />
      </header>
      <input type="text" placeholder="Buscar por usuário" />
      <Usuario />
      <section className="projeto">
        <h2>Repositorios: 17</h2>
        <Projeto /> 
        <Projeto />
      </section>
    </main>
  );
}

export default App;
