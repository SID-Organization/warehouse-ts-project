import "./styles.scss";

import gradeLayout from "../../../assets/gradeLayout.png";
import listLayout from "../../../assets/list.png";

import ProductCardTeacher from "../../../components/ProductCard";
import ListProductCardTeacher from "../../../components/ListProductCard";
import React, { useEffect, useState } from "react";

export default function TeacherProducts() {
  const [listFormatClicked, setListFormatClicked] = useState(false);
  const [today, setToday] = useState(new Date());

  const [products, setProducts] = useState<any[]>([]);

  async function getProducts() {
      const response = await fetch("http://localhost:8080/almoxarifado/itens");
      const data = await response.json();
      
      console.log(data);
      setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  // const products = [
  //   {
  //     nome: "Machado gigas",
  //     quantidade_estoque: 29,
  //     caracteristica: "Ferramenta manual",
  //     classificacao: "Ferramenta manual",
  //     detalhes: "Machada",
  //     descartavel: false,
  //     ativo: true,
  //     img: "https://i.imgur.com/6rRmSo6_d.webp?maxwidth=520&shape=thumb&fidelity=high",
  //     idEstoque: 3,
  //   },
  //   {
  //     nome: "Picareta",
  //     quantidade_estoque: 321,
  //     caracteristica: "Ferramenta manual",
  //     classificacao: "Ferramenta manual",
  //     detalhes: "Picareta",
  //     descartavel: false,
  //     ativo: true,
  //     img: "https://i.imgur.com/6rRmSo6_d.webp?maxwidth=520&shape=thumb&fidelity=high",
  //     idEstoque: 4,
  //   },
  // ];

  const listFormat = () => {
    return (
      <React.Fragment>
        {products.map((product, index) => (
          <ListProductCardTeacher
            key={index}
            name={product.nomeItem}
            quantity={product.quantidade_estoque}
            characteristic={product.caracteristicaItem}
            classfication={product.classificacaoItem}
            details={product.detalhesItem}
            descartable={product.itemDescartavel}
            active={product.ativo}
            img={product.fotoIlustrativa}
            idEstoque={product.idEstoque}
          />
        ))}
      </React.Fragment>
    );
  };

  const gridFormat = () => {
    return (
      <React.Fragment>
        {products.map((product, index) => (
          <ProductCardTeacher
            key={index}
            name={product.nomeItem}
            storageQuantity={product.idEspacoOrganizacional.qtdItemEspacoOrganizacional}
            characteristic={product.caracteristicaItem}
            classfication={product.classificacaoItem}
            details={product.detalhesItem}
            descartable={product.itemDescartavel}
            active={product.ativo}
            img={product.fotoIlustrativa}
            idEstoque={product.idEstoque}
          />
        ))}
      </React.Fragment>
    );
  };

  return (
    <div className="teacherProductPage">
      <header>
        <div className="containerHeaderTeacher">
          <div className="page-title">
            <div className="containerProductsTitle">
              <div className="productTitle">
                <h1 className="h1Produtos">Produtos</h1>
              </div>
            </div>
            <div className="todays-date">
              <p>Hoje, {today.toLocaleDateString()}</p>
            </div>
          </div>
          <div className="containerSearchInput">
            <div className="inputSearch">
              <form className="form">
                <button>
                  <svg
                    width="17"
                    height="16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-labelledby="search"
                  >
                    <path
                      d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                      stroke="currentColor"
                      strokeWidth="1.333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <input
                  className="input"
                  placeholder="Pesquise por produtos"
                  type="text"
                />
                <button className="reset" type="reset">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="containerProductsCard">
          <div className="changeLayout">
            <div className="containerIconChange">
              <div className="ballIcon">
                <img
                  className="iconGrade"
                  src={listFormatClicked ? gradeLayout : listLayout}
                  onClick={() => setListFormatClicked(!listFormatClicked)}
                />
              </div>
            </div>
          </div>
          <div
            className={
              listFormatClicked ? "containerListCards" : "containerGridCards"
            }
          >
            {listFormatClicked ? listFormat() : gridFormat()}
          </div>
        </div>
      </main>
    </div>
  );
}
