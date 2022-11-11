import hammerImg from "../../assets/hammer.png";

import add from "../../assets/add.png";
import minus from "../../assets/minus.png";
import plus from "../../assets/plus.png";

import "./styles.scss";
import { useState } from "react";
import { type } from "os";

interface productProps {
  name: string;
  idItem: number;
  quantity: number;
  characteristic?: string;
  classfication: string;
  details?: string;
  descartable: boolean;
  active: boolean;
  img?: string;
  idEstoque: number;
}

export default function ListProductCardTeacher(props: productProps) {
  const [value, setValue] = useState(0);

  function decreaseValue() {
    setValue(value - 1);
    if (value === 0) {
      setValue(0);
    }
  }

  function sendToLocalStorage() {
    const listProducts = localStorage.getItem("listProducts");
    if (listProducts) {
      const listProductsArray = JSON.parse(listProducts);
      const product = listProductsArray.find(
        (product: productProps) => product.idEstoque === props.idEstoque
      );
      if (product) {
        product.quantity = product.quantity + value;
        localStorage.setItem("listProducts", JSON.stringify(listProductsArray));
      } else {
        listProductsArray.push({ ...props, quantity: value });
        localStorage.setItem("listProducts", JSON.stringify(listProductsArray));
      }
    } else {
      localStorage.setItem(
        "listProducts",
        JSON.stringify([{ ...props, quantity: value }])
      );
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(parseInt(e.target.value) > 0) {
    setValue(parseInt(e.target.value));
    }
  };


  return (
    <div className="cardList">
      <div className="containerContentCard">
        <div className="containerSpecifications">
          <div className="containerImage">
            <div className="bgImage">
              <img src={props.img && "data:image/png;base64," + props.img} />
            </div>
          </div>
          <div className="containerTitleAndSubtitle">
            <div className="containerBothH1">
              <div className="containerTitle">
                <h1 className="titleH1">{props.name}</h1>
              </div>
            </div>
            <div className="containerSubtitle">
              <h1 className="subtitleH1">{props.characteristic}</h1>
            </div>
          </div>
        </div>
        <div className="containerQtyAndAdd">
          <div className="containerEstoque">
            <div className="containerEstoqueH1">
              <h1 className="estoqueH1">Estoque:</h1>
            </div>
            <div className="containerQtyH1">
              <h1 className="qtyH1">{props.quantity}</h1>
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
                <input type="number" onChange={e => handleInputChange(e)} value={value} />
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
          <div
            onClick={() => {
              sendToLocalStorage();
            }}
            className="containerAddMore"
          >
            <img src={add} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}