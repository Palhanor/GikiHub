import "./style.css";

export default function Usuario() {
  return (
    <section className="usuario">
      <h2 className="titulo">Usuário</h2>
      <div className="card_usuario">
        <img
          src="https://avatars.githubusercontent.com/u/42905311?v=4"
          alt="Imagem do usuario"
          className="imagem_usuario"
        />
        <div>
          <h3 className="nome_usuario">Lucas Palhano</h3>
          <span className="id_usuario">#42905311</span>
          <p>Seguidores: 19</p>
          <p>Seguindo: 19</p>
          <p>Repositorios: 16</p>
          <p>Criado em 02/09/2018</p>
        </div>
      </div>
    </section>
  );
}
