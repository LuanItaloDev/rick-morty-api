import Card from "./card/Card";
import "../cards/cards.css"

export default function Cards() {
    return (
      <div className="cards">
        <div className="containerCards">
          <div className="itemsCard">
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
      </div>
    );
  }
  
  