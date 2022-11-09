import hammerImg from "../../assets/hammer.png";

import add from "../../assets/add.png";
import minus from "../../assets/minus.png";
import plus from "../../assets/plus.png";

import "./styles.scss";
import { useState } from "react";

export default function ListProductCardTeacher() {
  const [value, setValue] = useState(0);

  function decreaseValue() {
    if (value > 0) {
      setValue(value - 1);
    }
  }

  return (
    <div className="cardList">
      <div className="containerContentCard">
        <div className="containerSpecifications">
          <div className="containerImage">
            <div className="bgImage">
              <img src={hammerImg} alt="hammer" />
            </div>
          </div>
          <div className="containerTitleAndSubtitle">
            <div className="containerBothH1">
              <div className="containerTitle">
                <h1 className="titleH1">
                  Martelo de metal caso o nome for maior
                </h1>
              </div>
            </div>
            <div className="containerSubtitle">
              <h1 className="subtitleH1">Ferramenta manual</h1>
            </div>
          </div>
        </div>
        <div className="containerQtyAndAdd">
          <div className="containerEstoque">
            <div className="containerEstoqueH1">
              <h1 className="estoqueH1">Estoque:</h1>
            </div>
            <div className="containerQtyH1">
              <h1 className="qtyH1">17</h1>
            </div>
          </div>
          <div className="containerQty">
            <div className="containerH1Qty">
              <h1>Quantidade</h1>
            </div>
            <div className="containerButtonsAndInput">
              <div className="containerRemove">
                <div className="containerBallRemove">
                  <div className="containerMinus" onClick={decreaseValue}>
                    <img src={minus} alt="" />
                  </div>
                </div>
              </div>
              <div className="containerInput">
                <input type="text" value={value} />
              </div>
              <div className="containerAdd">
                <div className="containerBallAdd">
                  <div
                    className="containerPlus"
                    onClick={() => {
                      setValue(value + 1);
                    }}
                  >
                    <img src={plus} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="containerAddMore">
            <img src={add} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
