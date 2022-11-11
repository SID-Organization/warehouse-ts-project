import "./styles.scss";
import React, { useState } from "react";

import toast, { Toaster } from "react-hot-toast";

import minus from "../../assets/minus.png";
import plus from "../../assets/plus.png";
import remove from "../../assets/remove.png";

interface productProps {
  name: string;
  quantity: number;
  characteristic?: string;
  classfication: string;
  details?: string;
  descartable: boolean;
  active: boolean;
  img?: string;
  idEstoque: number;
}

export default function CardContainerNewReserve(props: productProps) {
  const notify = () => toast.success("Produto removido com sucesso!");
  const [qtyProduct, setQtyProduct] = useState(props.quantity);

  function increaseValue() {
    setQtyProduct((e) => e + 1);
  }

  function decreaseValue() {
    setQtyProduct(qtyProduct > 0 ? qtyProduct - 1 : 0);
    if (qtyProduct === 0) {
      setQtyProduct(0);
    }
  }

  function removeItem(props: productProps["idEstoque"]) {
    const listProducts = localStorage.getItem("listProducts");
    if (listProducts) {
      const listProductsArray = JSON.parse(listProducts);
      const product = listProductsArray.find(
        (product: productProps) => product.idEstoque === props
      );
      if (product) {
        const index = listProductsArray.indexOf(product);
        listProductsArray.splice(index, 1);
        localStorage.setItem("listProducts", JSON.stringify(listProductsArray));
      }
    }
    notify();
    setInterval(() => {
      window.location.reload();
    }, 500);
  }

  return (
    <div className="containerCard">
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            color: "#ffffff",
            background: "#0047b5",
          },
        }}
      />
      <div className="containerImgAndName">
        <div className="img">
          <img src={'data:image/png;base64,'+ props.img} alt="gradeLayout" />
        </div>
        <div className="name">
          <h1>{props.name}</h1>
        </div>
      </div>
      <div className="containerQty">
        <div className="qtyInput">
          <div className="containerMinus" onClick={decreaseValue}>
            <img src={minus} alt="minus" />
          </div>
          <div className="containerInput">
            <input
              className="inputNumber"
              type="text"
              value={qtyProduct}
              onChange={(e) => setQtyProduct(qtyProduct)}
            />
          </div>
          <div className="containerPlus" onClick={increaseValue}>
            <img src={plus} alt="plus" />
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          removeItem(props.idEstoque);
        }}
        className="containerRemove"
      >
        <img src={remove} alt="remove" />
      </div>
    </div>
  );
}
