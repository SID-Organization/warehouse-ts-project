import "./styles.scss";

import { useState } from "react";

export default function TeacherHome() {
  const [today, setToday] = useState(new Date());

  return (
    <div className="teacherHomePage">
      <header>
        <div className="containerHeaderTeacher">
          <div className="page-title">
            <div className="containerProductsTitle">
              <div className="productTitle">
                <h1 className="h1Produtos">Suas reservas</h1>
              </div>
            </div>
            <div className="todays-date">
              <p>Hoje, {today.toLocaleDateString()}</p>
            </div>
          </div>
          {/* <div className="containerSearchInput">
            <div className="inputSearch">
              <form className="form">
                <button>
                  <svg
                    width="17"
                    height="16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-labelledby="search"
                  >
                    <path
                      d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                      stroke="currentColor"
                      strokeWidth="1.333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <input
                  className="input"
                  placeholder="Pesquise por produtos"
                  type="text"
                />
                <Filter />
                <button className="reset" type="reset">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </form>
            </div>
          </div> */}
        </div>
      </header>
      <main></main>
    </div>
  );
}
