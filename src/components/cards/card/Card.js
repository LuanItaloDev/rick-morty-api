import "../card/card.css"
import Avatar from "../../../img/bg.png"

export default function Card() {
    return (
      <div className="card">
        <div>
          <img src={Avatar} alt="Avatar"/>
        </div>
        <div className="conteudoCard">
          <span>
            <h3>Luan Italo</h3>
          </span>
          <span>
            <p>Espécie: Humano</p>
          </span>
          <span>
            <p>Idade: 30</p> 
          </span>
          <span>
            <p>Planeta: Terra</p>
          </span>
          </div>
      </div>
    );
  };
  
  