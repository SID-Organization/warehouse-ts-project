import hammerImg from "../../assets/hammer.png";
import interrogation from "../../assets/interrogation.png";
import add from "../../assets/add.png";

import toast, { Toaster } from "react-hot-toast";

import "./styles.scss";
import { useState } from "react";

interface productProps {
  name: string;
  storageQuantity: number;
  characteristic?: string;
  classfication: string;
  details?: string;
  descartable: boolean;
  active: boolean;
  img?: string;
  idEstoque: number;
}

interface newProductProps {
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

export default function ProductCardTeacher(props: productProps) {
  const notify = () => toast.success("Produto adicionado com sucesso!");

  const [qtyProduct, setQtyProduct] = useState(0);
  const [informationActive, setInformationActive] = useState(false);

  function sendToLocalStorage() {
    const listProducts = JSON.parse(
      localStorage.getItem("listProducts") || "[]"
    );

    const newProduct: newProductProps = {
      name: props.name,
      quantity: qtyProduct,
      characteristic: props.characteristic,
      classfication: props.classfication,
      details: props.details,
      descartable: props.descartable,
      active: props.active,
      img: props.img,
      idEstoque: props.idEstoque,
    };

    console.log("newProduct", newProduct);

    if (qtyProduct > props.storageQuantity) {
      toast.error("Quantidade de produtos maior que a disponível");
      return;
    }

    if (listProducts) {
      const existingProductIndex = listProducts.findIndex(
        (product: newProductProps) => product.idEstoque === props.idEstoque
      );

      if (existingProductIndex != -1) {
        if (
          listProducts[existingProductIndex].quantity + qtyProduct >
          props.storageQuantity
        ) {
          toast.error("Quantidade de produtos maior que a disponível");
          return;
        }
        listProducts[existingProductIndex].quantity += qtyProduct;

        localStorage.setItem("listProducts", JSON.stringify(listProducts));
        notify();
      } else {
        listProducts.push(newProduct);
        localStorage.setItem("listProducts", JSON.stringify(listProducts));
        notify();
      }
    } else {
      localStorage.setItem("listProducts", JSON.stringify([newProduct]));
      notify();
    }
  }

  function productInformation() {
    if (props.details) {
      return (
        <div className="product-informationClick">
          <div className="product-information__titleClick">
            <p>Informações sobre o produto</p>
          </div>
          <div className="product-information__descriptionClick">
            <p>{props.details}</p>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="card">
      <div className="cardHeader">
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
        <div className="containerCardImage">
          <div className="cardImage">
            <img
              className="imageCard"
              src={"data:image/png;base64," + props.img ?? hammerImg}
            />
          </div>
        </div>
        {informationActive ? productInformation() : ""}
        <div className="containerToolName">
          <div className="toolName">
            <h1 className="h1Tool">{props.name}</h1>
          </div>
        </div>
        <div className="containerSeeMore">
          <div
            onClick={() => {
              setInformationActive(!informationActive);
            }}
            className="containerIcon"
          >
            <img className="intIcon" src={interrogation} alt="" />
          </div>
        </div>
      </div>
      <div className="cardFooter">
        <div className="descriptionTypeOftool">
          <h1 className="h1TypeTool">{props.characteristic}</h1>
        </div>
        <div className="containerEstoque">
          <div className="containerEstoqueAndQty">
            <h1 className="h1Estoque">Estoque: </h1>
            <h1 className="h1EstoqueQty">{props.storageQuantity}</h1>
          </div>
          <div className="containerQuantityAndAdd">
            <div className="containerQty">
              <div className="containerH1Quantidade">
                <h1 className="h1Qty">Quantidade</h1>
                <input
                  onChange={(e) => {
                    if (isNaN(Number(e.target.value))) {
                      setQtyProduct(0);
                    } else {
                      setQtyProduct(Number(e.target.value));
                    }
                  }}
                  value={qtyProduct}
                  className="inputQty"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              sendToLocalStorage();
            }}
            className="containerIconAddMore"
          >
            <img className="addMoreIcon" src={add} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
