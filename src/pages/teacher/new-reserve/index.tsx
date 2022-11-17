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
  const [user, setUsers] = useState(
    JSON.parse(localStorage.getItem("user") || "[]")
  );
  const [dataHoraRetirada, setDataHoraRetirada] = useState({
    data: "",
    hora: ""
  });
  const [dataHoraDevolucao, setDataHoraDevolucao] = useState({
    data: "",
    hora: ""
  });

  function getItemsFromLocalStorage() {
    const listProducts = JSON.parse(
      localStorage.getItem("listProducts") || "[]"
    );
    return listProducts;
  }

  async function saveReserveOnDatabase() {
    const reserveToSave = {
      matricula: { matricula: user.matricula },
      status: "ATIVO",
      dataRetirada: dataHoraRetirada.data + "T" + dataHoraRetirada.hora,
      dataRetirado: "",
      dataDevolucao:
        dataHoraDevolucao.data + "T" + dataHoraDevolucao.hora,
      reservaItem: itemsList.map((item: any) => ({
        idItem: { idItem: item.idItem },
        qtdItensReserva: item.quantity
      }))
    };
    await fetch("http://localhost:8080/almoxarifado/reservas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(reserveToSave)
    }).then(response => console.log(response));
    console.log(reserveToSave);
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
              <p>
                Hoje, {today.toLocaleDateString()}
              </p>
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
                <span>
                  {itemsList.length} produto{itemsList.length > 1 && "s"}
                </span>
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
                    <span className="checkbox" />
                  </label>
                </div>
              </div>
              <div className="containerProductsCard">
                {itemsList.map((product: any, index: number) =>
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
                    <input
                      type="date"
                      onChange={e =>
                        setDataHoraRetirada({
                          ...dataHoraRetirada,
                          data: e.target.value
                        })}
                    />
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
                    <input
                      type="time"
                      onChange={e =>
                        setDataHoraRetirada({
                          ...dataHoraRetirada,
                          hora: e.target.value
                        })}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="containerDottedLine" />
            <div className="containerFirstPart">
              <div className="containerWithdrawal">
                <div className="containerWithdrawalDate">
                  <h1>Data de Devolução:</h1>
                </div>
                <div className="containerWithdrawalTime">
                  <div className="containerIconCalendar">
                    <img src={calendar} />
                  </div>
                  <div className="containerInputDate">
                    <input
                      type="date"
                      onChange={e =>
                        setDataHoraDevolucao({
                          ...dataHoraDevolucao,
                          data: e.target.value
                        })}
                    />
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
                    <input
                      type="time"
                      onChange={e =>
                        setDataHoraDevolucao({
                          ...dataHoraDevolucao,
                          hora: e.target.value
                        })}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="containerLine" />
            <div className="containerButton">
              <button onClick={saveReserveOnDatabase}>
                Solicitar reserva
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
