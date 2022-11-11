import "./styles.scss";

import gradeLayout from "../../../assets/gradeLayout.png";
import listLayout from "../../../assets/list.png";
import calendar from "../../../assets/calendarT.png";
import clock from "../../../assets/clock.png";

import ProductCardTeacher from "../../../components/ProductCard";
import ListProductCardTeacher from "../../../components/ListProductCard";
import CardContainerNewReserve from "../../../components/CardContainerNewReserve";

import { Key, useState } from "react";

export default function TeacherNewReserve() {
  const [today, setToday] = useState(new Date());
  const [itemsList, setItems] = useState(getItemsFromLocalStorage());

  function getItemsFromLocalStorage() {
    const listProducts = JSON.parse(
      localStorage.getItem("listProducts") || "[]"
    );
    console.log(listProducts);
    return listProducts;
  }

  function saveReserveOnDatabase(){
  //   {
  //     "matricula": {"matricula": 72130},
  //     "status": "ATIVO" ,
  //     "dataRetirada": "2022-11-20" ,
  //     "dataRetirado": "",
  //     "dataDevolucao": "2022-11-30",
  //     "reservaItem": [
  //         {
  //             "idItem": {"idItem" : 3},
  //             "qtdItensReserva": 1
  //         }
  //     ]
  // }
    console.log(itemsList);
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
                <span>{itemsList.length} produto{itemsList.length > 1 && 's'}</span>
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
                {itemsList.map(
                  (product: any, index: number) => (
                    <CardContainerNewReserve
                    key={index}
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
              <button
                onClick={() => saveReserveOnDatabase()}
              >Solicitar reserva</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
