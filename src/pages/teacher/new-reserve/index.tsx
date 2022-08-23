import "./styles.scss";

import gradeLayout from "../../../assets/gradeLayout.png";
import listLayout from "../../../assets/list.png";
import calendar from "../../../assets/calendarT.png";
import clock from "../../../assets/clock.png";

import ProductCardTeacher from "../../../components/product-card-teacher/productCardTeacher";
import ListProductCardTeacher from "../../../components/list-product-card-teacher/ListProductCardTeacher";
import CardContainerNewReserve from "../../../components/cardContainerNewReserve/CardContainerNewReserve";
import { useState } from "react";

export default function TeacherNewReserve() {
  const [today, setToday] = useState(new Date());

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
                <span>3 produtos</span>
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
                <CardContainerNewReserve />
                <CardContainerNewReserve />
                <CardContainerNewReserve />
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
