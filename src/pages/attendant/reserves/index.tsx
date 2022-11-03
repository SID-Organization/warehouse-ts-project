import { useEffect, useState } from "react";
import "./styles.scss";

import ReserveCard from "../../../components/ReserveCard";
import GridReserveCard from "../../../components/GridReserveCard";
import Filter from "../../../components/filter";

import gridIcon from "../../../assets/gradeLayout.png";
import listIcon from "../../../assets/list.png";
import sortIcon from "../../../assets/sort-icon.png";
import searchIcon from "../../../assets/search-icon.png";

export default function AttendantReserves() {

  const [today, setToday] = useState(new Date());
  const [listLayout, setListLayout0] = useState(true);
  const [openFilter, setOpenFilter] = useState(false);

  const createDateTitle = () => {
    return (
      <div className="date-title">
        {today.toLocaleDateString()}
      </div>
    )
  }

  const handleSearchClick = () => {
    var scrollDiv = document.getElementById(
      listLayout ? "list-reserve-cards" : "grid-reserve-cards-wrapper"
    )!.offsetTop;

    window.scrollTo({ top: scrollDiv - 60, behavior: "smooth" });
  };  

  const lista = [1, 2, 3, 4, 5];

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
          ? lista.map(e => <ReserveCard />)
          : lista.map(e => <GridReserveCard />)}
      </div>
    </div>
  );
}
