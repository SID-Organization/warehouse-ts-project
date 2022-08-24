import { Link } from "react-router-dom";

import "./style.scss";

import CheckListItem from "../../../components/checklist-item";

function AtendentReservationScreen() {

    return (
        <div className="attendant">
            <div id="main">
                <main>
                    <div className="subheader">
                        <div className="go-back-btn-container">

                        </div>
                        <div className="teacher-name">
                            <p>Reserva do(a) professor(a) Carlinhos</p>
                        </div>
                    </div>
                    <div className="data-container">
                        <div className="table-container">
                            <div className="titles-container">
                                <div className="titles">
                                    <p>Material</p>
                                    <p>Quantidade</p>
                                    <p>Localização</p>
                                </div>
                            </div>
                            <div className="items-container">
                                <div className="items-checklist">
                                    <s>
                                        <CheckListItem />
                                    </s>
                                    <hr />
                                    <CheckListItem />
                                    <hr />
                                    <CheckListItem />
                                    <hr />
                                    <CheckListItem />
                                    <hr />
                                    <CheckListItem />
                                    <hr />
                                    <CheckListItem />
                                    <hr />
                                    <CheckListItem />
                                    <hr />
                                    <CheckListItem />
                                    <hr />
                                    <CheckListItem />
                                    <hr />
                                    <CheckListItem />
                                    <hr />
                                    <CheckListItem />
                                    <hr />
                                    <CheckListItem />
                                    <hr />
                                    <CheckListItem />
                                    <hr />
                                    <CheckListItem />
                                    <hr />
                                    <CheckListItem />
                                    <hr />
                                    <CheckListItem />
                                    <hr />
                                    <CheckListItem />
                                </div>
                            </div>
                        </div>
                        <div className="action-buttons">
                            <div className="confirm-btn-container">
                                <button>Confirmar retirada</button>
                            </div>
                            <div className="cancel-btn-container">
                                <button>Cancelar retirada</button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default AtendentReservationScreen;