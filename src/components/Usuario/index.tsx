import "./style.css";

// Âncora para o perfil no GitHub

export default function Usuario({ usuario }: { usuario: any }) {
  return (
    <section className="usuario">
      {usuario.id ? (
        <h2 className="titulo_usuario">Usuário</h2>
      ) : (
        <h2 className="titulo_usuario-central">Nenhum usuário encontrado...</h2>
      )}
      {usuario.id && (
        <div className="card_usuario">
          <img
            src={usuario.avatar_url}
            alt="Imagem do usuario"
            className="imagem_usuario"
          />
          <div>
            <h3 className="nome_usuario">{usuario.name}&nbsp;</h3>
            <span className="metadado_usuario">#{usuario.id}</span>
            <p className="metadado_usuario">
              Conta criada em {usuario.created_at.slice(0, 10)}
            </p>
            <p className="dado_usuario">{usuario.public_repos} Repositórios</p>
            <p className="dado_usuario">{usuario.following} Seguindo</p>
            <p className="dado_usuario">{usuario.followers} Seguidores</p>
          </div>
        </div>
      )}
    </section>
  );
}
