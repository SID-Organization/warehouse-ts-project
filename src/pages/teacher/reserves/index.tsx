import "./styles.scss";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function TeacherHome() {
  const [listFormatClicked, setListFormatClicked] = useState(false);
  const [filterSelected, setFilterSelected] = useState(0);
  const [today, setToday] = useState(new Date());

  const reservesMock = {
    reserves: [
      {
        status: "À RETIRAR",
        date: "SEGUNDA-FEIRA, 13/06/2022",
        seeReserve: "VER RESERVA",
        listTools: [
          { name: "- Martelo" },
          { name: "- Prego" },
          { name: "- Prego" },
          { name: "- Prego" },
        ],
      },
      {
        status: "A DEVOLVER",
        date: "SEGUNDA-FEIRA, 13/06/2022",
        seeReserve: "VER RESERVA",
        listTools: [{ name: "Martelo" }, { name: "Prego" }],
      },
      {
        status: "CANCELADA",
        date: "SEGUNDA-FEIRA, 13/06/2022",
        seeReserve: "VER RESERVA",
        listTools: [{ name: "Martelo" }, { name: "Prego" }],
      },
      {
        status: "CANCELADA",
        date: "SEGUNDA-FEIRA, 13/06/2022",
        seeReserve: "VER RESERVA",
        listTools: [{ name: "Martelo" }, { name: "Prego" }],
      },
    ],
  };

  const getReserves = () => {
    let texto = "";
    let reserves: any[] = [];

    if (filterSelected === 0) {
      texto = "Reservas à retirar";
      reserves = reservesMock.reserves.filter(
        (reserve) => reserve.status === "À RETIRAR"
      );
    } else if (filterSelected === 1) {
      texto = "Todas as reservas";
      reserves = reservesMock.reserves;
    } else if (filterSelected === 2) {
      texto = "Reservas à devolver";
      reserves = reservesMock.reserves.filter(
        (reserva) => reserva.status === "A DEVOLVER"
      );
    } else if (filterSelected === 3) {
      texto = "Histórico das reservas";
      reserves = reservesMock.reserves.filter(
        (reserva) => reserva.status === "CANCELADA"
      );
    }
    console.log(reserves);
    return (
      <>
        <div className="reserves">
          {reserves?.map((reserva) => (
            <>
              {listFormatClicked ? (
                <div className="reserve">
                  <div className="reserve">
                    <div className="containerStatusCard">
                      <div className="reserve-status">{reserva.status}</div>
                      {reserva.status === "À RETIRAR" ? (
                        <div className="containerStatusProp">
                          <div className="status retirar"></div>
                        </div>
                      ) : reserva.status === "A DEVOLVER" ? (
                        <div className="containerStatusProp">
                          <div className="status devolver"></div>
                        </div>
                      ) : (
                        <div className="containerStatusProp">
                          <div className="status cancelada"></div>
                        </div>
                      )}
                    </div>
                    <div className="reserve-date">{reserva.date}</div>
                    <div className="reserve-see">{reserva.seeReserve}</div>
                    <div className="reserve-tools">
                      <div className="containerTools">
                        {reserva.listTools?.map((tool: { name: string }) => (
                          <div className="reserve-tool">{tool.name}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="reserve">
                  <div className="containerStatusCard">
                    <div className="reserve-status">{reserva.status}</div>
                    {reserva.status === "À RETIRAR" ? (
                      <div className="containerStatusProp">
                        <div className="status retirar"></div>
                      </div>
                    ) : reserva.status === "A DEVOLVER" ? (
                      <div className="containerStatusProp">
                        <div className="status devolver"></div>
                      </div>
                    ) : (
                      <div className="containerStatusProp">
                        <div className="status cancelada"></div>
                      </div>
                    )}
                  </div>
                  <div className="reserve-date">{reserva.date}</div>
                  <Link
                    to={{
                      pathname: "/professor/historico-reservas",
                    }}
                  >
                    <div className="reserve-see">{reserva.seeReserve}</div>
                  </Link>
                  <div className="reserve-tools">
                    <div className="containerTools">
                      {reserva.listTools?.map((tool: { name: string }) => (
                        <div className="reserve-tool">{tool.name}</div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="teacherHomePage">
      <header>
        <div className="containerHeaderTeacher">
          <div className="page-title">
            <div className="containerProductsTitle">
              <div className="productTitle">
                <h1 className="h1Produtos">Histórico de reservas</h1>
              </div>
            </div>
            <div className="todays-date">
              <p>Hoje, {today.toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="filters-container">
          <div
            className="filters"
            onClick={() => {
              setFilterSelected(1);
            }}
          >
            Todas as reservas
          </div>
          <div
            className="filters"
            onClick={() => {
              setFilterSelected(0);
            }}
          >
            Reservas à retirar
          </div>
          <div
            className="filters"
            onClick={() => {
              setFilterSelected(2);
            }}
          >
            A devolver
          </div>
          <div
            className="filters"
            onClick={() => {
              setFilterSelected(3);
            }}
          >
            Canceladas
          </div>
        </div>
        <div className="reserve-cards">{getReserves()}</div>
      </main>
    </div>
  );
}