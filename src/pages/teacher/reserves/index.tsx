import "./styles.scss";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReserveHistCard from "./ReserverHistCard"; 

export default function TeacherHome() {
  const [filterSelected, setFilterSelected] = useState(0);
  const [today, setToday] = useState(new Date());
  const [reservesList, setReservesList] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/almoxarifado/reservas")
      .then((response) => response.json())
      .then((data) => setReservesList(data));
  }, [])

  useEffect(() => {
    console.log(reservesList);
  }, [reservesList])

  const getReserves = () => {
    let reserves;
    if (filterSelected === 0) {
      reserves = reservesList;
    } else if (filterSelected === 1) {
      reserves = reservesList.filter(e => e.status === "RETIRAR");
    } else if (filterSelected === 2) {
      reserves = reservesList.filter(e => e.status === "ATIVO" || e.status === "ATRASADO");
    } else if (filterSelected === 3) {
      reserves = reservesList.filter(e => e.status === "CANCELADO");
    }

    return (
      reserves?.map(e => (
        <Link to={`/professor/reserva/${e.idReserva}`} key={e.id}>
          <ReserveHistCard reserve={e} />
        </Link>
    )))
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
              setFilterSelected(0);
            }}
          >
            Todas as reservas
          </div>
          <div
            className="filters"
            onClick={() => {
              setFilterSelected(1);
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