import { useEffect, useState } from "react";
import "./styles.scss";

import ReserveCard from "../../../components/ReserveCard";
import GridReserveCard from "../../../components/GridReserveCard";
import Filter from "../../../components/Filter";

import gridIcon from "../../../assets/gradeLayout.png";
import listIcon from "../../../assets/list.png";
import sortIcon from "../../../assets/sort-icon.png";
import searchIcon from "../../../assets/search-icon.png";

export default function AttendantReserves() {

  const [today, setToday] = useState(new Date());
  const [listLayout, setListLayout] = useState(true);
  const [openFilter, setOpenFilter] = useState(false);
  const [reservesList, setReservesList] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/almoxarifado/reservas")
    .then(response => response.json())
    .then(data => setReservesList(data));
  }, [])

  useEffect(() => {
    console.log(reservesList);
  }, [reservesList])

  const getReservesInList = () => {
    return reservesList.map(e => <ReserveCard reserve={e}/>);
  };

  const getReservesInGrid = () => {
    return reservesList.map(e => <GridReserveCard reserve={e}/>);
  };

  const handleSearchClick = () => {
    var scrollDiv = document.getElementById(
      listLayout ? "list-reserve-cards" : "grid-reserve-cards-wrapper"
    )!.offsetTop;

    window.scrollTo({ top: scrollDiv - 60, behavior: "smooth" });
  };  


  return (
    <div className=" attendant-reserves-container">
      <div className="page-title">
        <h1>Reservas</h1>
      </div>
      <div className="info-container">
        <div className="todays-date">
          <p>
            Hoje, {today.toLocaleDateString()}
          </p>
        </div>
        {openFilter && <Filter setOpenFilter={setOpenFilter} />}
        <div>
          <button
            className="button-filter"
            onClick={() =>
              openFilter ? handleSearchClick() : setOpenFilter(true)}
          >
            <div className="content">
              <p id="filter-button-txt">
                {openFilter ? "Consultar" : "Filtros"}
              </p>
            </div>
            <div className="sort-icon">
              <img src={openFilter ? searchIcon : sortIcon} alt="" />
            </div>
          </button>
          <div className="changeLayout">
            <div className="containerIconChange">
              <div className="ballIcon">
                <img
                  className="iconGrade"
                  src={listLayout ? gridIcon : listIcon}
                  onClick={() => setListLayout(!listLayout)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id={listLayout ? "list-reserve-cards" : "grid-reserve-cards-wrapper"}
      >
        {listLayout
          ? getReservesInList()
          : getReservesInGrid()}
      </div>
    </div>
  );
}
