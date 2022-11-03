import "./styles.scss";

import gradeLayout from "../../../assets/gradeLayout.png";
import listLayout from "../../../assets/list.png";
import calendar from "../../../assets/calendarT.png";
import clock from "../../../assets/clock.png";

import ProductCardTeacher from "../../../components/ProductCard";
import ListProductCardTeacher from "../../../components/ListProductCard";
import CardContainerNewReserve from "../../../components/cardContainerNewReserve";

import { Key, useState } from "react";

export default function TeacherNewReserve() {
  const [today, setToday] = useState(new Date());
  const [items, setItems] = useState(getItemFromLocalStorage());

  function getItemFromLocalStorage() {
    const listProducts = JSON.parse(
      localStorage.getItem("listProducts") || "[]"
    );
    return listProducts;
  }

  return (
    <div className="teacherNewReserve">
      <header>
        <div className="containerHeaderTeacher">
          <div className="page-title">
            <div className="containerProductsTitle">
              <div className="productTitle">
                <h1 className="h1Produtos">Nova reserva</h1>
              </div>
            </div>
            <div className="todays-date">
              <p>Hoje, {today.toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="containerComponents">
          <div className="containerReserves">
            <div className="reserveHeader">
              <div className="containerProductTitle">
                <h1>Produtos</h1>
              </div>
              <div className="containerQtyProducts">
                <span>{items.length} produto{items.length > 1 && 's'}</span>
              </div>
            </div>
            <div className="reserveMain">
              <div className="containerSubHeader">
                <div className="containerStuff">
                  <div className="containerName">
                    <h1>Nome</h1>
                  </div>
                  <div className="containerQty">
                    <h1>Quantidade</h1>
                  </div>
                </div>
              </div>
              <div className="containerSelectAll">
                <div className="containerText">
                  <h1>Selecionar tudo</h1>
                </div>
                <div className="containerInput">
                  <label>
                    <input type="checkbox" />
                    <span className="checkbox"></span>
                  </label>
                </div>
              </div>
              <div className="containerProductsCard">
                {items.map(
                  (product: {
                    name: string;
                    quantity: number;
                    idEstoque: number;
                    nome: string;
                    quantidade_estoque: number;
                    caracteristica: string | undefined;
                    classificacao: string;
                    detalhes: string | undefined;
                    descartavel: boolean;
                    ativo: boolean;
                    img: string | undefined;
                  }) => (
                    <CardContainerNewReserve
                      idEstoque={product.idEstoque}
                      name={product.name}
                      quantity={product.quantity}
                      characteristic={product.caracteristica}
                      classfication={product.classificacao}
                      details={product.detalhes}
                      descartable={product.descartavel}
                      active={product.ativo}
                      img={product.img}
                    />
                  )
                )}
              </div>
            </div>
          </div>
          <div className="containerConfirmReserve">
            <div className="containerFirstPart">
              <div className="containerWithdrawal">
                <div className="containerWithdrawalDate">
                  <h1>Data de retirada:</h1>
                </div>
                <div className="containerWithdrawalTime">
                  <div className="containerIconCalendar">
                    <img src={calendar} alt="" />
                  </div>
                  <div className="containerInputDate">
                    <input type="date" />
                  </div>
                </div>
              </div>

              <div className="containerWithdrawal">
                <div className="containerWithdrawalDate">
                  <h1>Hora de retirada:</h1>
                </div>
                <div className="containerWithdrawalTime">
                  <div className="containerIconCalendar">
                    <img className="calendarIcon" src={clock} alt="" />
                  </div>
                  <div className="containerInputDate">
                    <input type="time" />
                  </div>
                </div>
              </div>
            </div>
            <div className="containerDottedLine"></div>
            <div className="containerFirstPart">
              <div className="containerWithdrawal">
                <div className="containerWithdrawalDate">
                  <h1>Data de Devolução:</h1>
                </div>
                <div className="containerWithdrawalTime">
                  <div className="containerIconCalendar">
                    <img src={calendar} alt="" />
                  </div>
                  <div className="containerInputDate">
                    <input type="date" />
                  </div>
                </div>
              </div>

              <div className="containerWithdrawal">
                <div className="containerWithdrawalDate">
                  <h1>Hora de Devolução:</h1>
                </div>
                <div className="containerWithdrawalTime">
                  <div className="containerIconCalendar">
                    <img className="calendarIcon" src={clock} alt="" />
                  </div>
                  <div className="containerInputDate">
                    <input type="time" />
                  </div>
                </div>
              </div>
            </div>
            <div className="containerLine"></div>
            <div className="containerButton">
              <button>Solicitar reserva</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
