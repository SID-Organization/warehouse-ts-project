import hammerImg from "../../assets/hammer.png";
import interrogation from "../../assets/interrogation.png";
import add from "../../assets/add.png";

import "./styles.scss";

export default function ProductCardTeacher() {
  return (
    <div className="card">
      <div className="cardHeader">
        <div className="containerCardImage">
          <div className="cardImage">
            <img className="imageCard" src={hammerImg} />
          </div>
        </div>
        <div className="containerToolName">
          <div className="toolName">
            <h1 className="h1Tool">Martelo de metal caso o nome for maior</h1>
          </div>
        </div>
        <div className="containerSeeMore">
          <div className="containerIcon">
            <img className="intIcon" src={interrogation} alt="" />
          </div>
        </div>
      </div>
      <div className="cardFooter">
        <div className="descriptionTypeOftool">
          <h1 className="h1TypeTool">Ferramenta manual</h1>
        </div>
        <div className="containerEstoque">
          <div className="containerEstoqueAndQty">
            <h1 className="h1Estoque">Estoque: </h1>
            <h1 className="h1EstoqueQty">17</h1>
          </div>
          <div className="containerQuantityAndAdd">
            <div className="containerQty">
              <div className="containerH1Quantidade">
                <h1 className="h1Qty">Quantidade</h1>
                <input className="inputQty" type="number" />
              </div>
            </div>
          </div>
          <div className="containerIconAddMore">
            <img className="addMoreIcon" src={add} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
