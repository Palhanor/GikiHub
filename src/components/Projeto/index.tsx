import { TbGitFork } from "react-icons/tb";
import { MdOpenInNew } from "react-icons/md";
import { AiOutlineEye, AiFillStar } from "react-icons/ai";
import "./style.css";

export default function Projeto() {
  return (
    <div className="card_projeto">
      <div>
        <div>
          <h3 className="titulo_projeto">Avoid Black Holes</h3>
          <p className="data_projeto">Criado em 02/09/2021</p>
          <p className="data_projeto">Atualizado em 13/07/2022</p>
          <p className="descricao_projeto">
            A simple game based on JavaScript that combines retro dynamics and
            futuristic design
          </p>
        </div>
        <div className="dados_projeto">
          <p className="dado_projeto"><AiOutlineEye /> 2</p>
          <p className="dado_projeto"><TbGitFork /> 0</p>
          <p className="dado_projeto"><AiFillStar /> 0</p>
        </div>
      </div>
      <div className="acoes_projeto">
        <a href="https://github.com/Palhanor/Avoid-Black-Holes" target={'_blanck'}>
          <MdOpenInNew color="#AAAAAA" size={25} />
        </a>
        <br />
        <button className="remover_repo">Remover</button>
      </div>
    </div>
  );
}
