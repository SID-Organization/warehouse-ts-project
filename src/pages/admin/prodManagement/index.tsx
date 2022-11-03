import "./style.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

import addProd from "../../../assets/add-prod.png";
import filterIcon from "../../../assets/filter.png";
import orderAZ from "../../../assets/ordenar-a-z.png";
import sortIcon from "../../../assets/sort-blue.png";
import recentOrders from "../../../assets/ordenar-recentes.png";

function AdminProdManagement() {
  const [modal, setModal] = useState(false);
  const [buttonClass, setButtonClass] = useState(false);
  const [buttonQtnd, setButtonQtnd] = useState(false);

  function dotTitle() {
    return <h3 className="point-filter">•</h3>;
  }

  const Checkbox = (label: string) => {
    return (
      <div className="div-checkboxs">
        <label>
          <input
            onClick={() => setButtonClass(!buttonClass)}
            id="checkbox"
            type="checkbox"
          />
          <span>{label}</span>
        </label>
      </div>
    );
  };

  return (
    <div className="admin-gerenc-prod">
      <div id="div-separa"></div>
      <div className="div-container1">
        <Link className="link" to="/attendant/product-register">
          <div className="div-container-btn">
            <div className="div-children">
              <div className="div-button">
                <img src={addProd} alt="" id="plus-logo" />
                <h1 id="txt-add-prod">Adicionar produto</h1>
              </div>
            </div>
          </div>
        </Link>
        <div className="div-titulo">
          <h1 id="titulo-txt">Gerenciamento de Produtos</h1>
        </div>
      </div>
      <div id="div-separa-filter"></div>
      <div className="div-filter-search">
        <div className="div-space-filter"></div>
        <div id="div-filter" onClick={() => setModal(!modal) }>
          <img id="filter" src={filterIcon} alt="" />
          <div id="div-filter-txt">Filtros</div>
          <div id="filters-number">0</div>
        </div>
      </div>
      {modal ? (

      <div id="container-modal-filter">
        <div className="div-space-filter"></div>
        <div id="div-modal-filter">
          <div id="header-modal">
            <div className="header-modal-txts">
              <h3 id="filter-title">Filtros</h3>
            </div>
            <div className="header-modal-txts">
              <h3 id="save-title">Salvar</h3>
            </div>
          </div>
          <div id="div-input-name">
            <input
              type="text"
              name=""
              id="input-name"
              placeholder="Exemplo: alicate de bico"
            />
          </div>
          <div>
            <div className="div-checkboxs">
              <label>
                <input
                  onClick={() => setButtonClass(!buttonClass)}
                  id="checkbox"
                  type="checkbox"
                />
                <span>Classificação</span>
              </label>
            </div>
            {buttonClass ? (
              <div className="input-group">
                <input
                  type="text"
                  className="input-checkbox"
                  placeholder="Exemplo: material elétrico"
                ></input>
              </div>
            ) : null}
            <div className="div-checkboxs">
              <label>
                <input
                  onClick={() => setButtonQtnd(!buttonQtnd)}
                  id="checkbox"
                  type="checkbox"
                />
                <span>Quantidade</span>
              </label>
            </div>
            {buttonQtnd ? (
              <div className="select-menu">
                <select name="order" id="number-order">
                  <option value="cresc">Crescente</option>
                  <option value="decresc">Decrescente</option>
                </select>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      ): null}
    </div>
  );
}

export default AdminProdManagement;
