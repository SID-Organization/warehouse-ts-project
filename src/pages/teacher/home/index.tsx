import "./styles.scss";

export default function TeacherHome() {
  return (
    <div className="teacherHomePage">
      <header>
        <div className="containerHeaderTeacher">
          <div className="containerProductsTitle">
            <div className="productTitle">
              <h1 className="h1Produtos">Produtos</h1>
            </div>
          </div>
          <div className="containerSearchInput">
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
                      stroke-width="1.333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
                <input
                  className="input"
                  placeholder="Pesquise por produtos"
                  type="text"
                />
                <button className="reset" type="reset">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="containerProductsCard">
          <div className="changeLayout">
            <div className="containerIconChange"></div>
          </div>
          <div className="card">
            <div className="cardHeader">
              <div className="containerCardImage">
                <div className="cardImage"></div>
                <div className="descriptionTypeOftool"></div>
              </div>
              <div className="containerToolName">
                <div className="toolName">
                  <h1 className="h1Tool">
                    Martelo de metal caso o nome for maior
                  </h1>
                </div>
              </div>
              <div className="containerSeeMore">
                <div className="containerIcon">{/* icon here */}</div>
              </div>
            </div>
            <div className="cardFooter">
                <div className="containerEstoque">
                    <h1 className="h1Estoque">Estoque</h1>
                </div>
                <div className="containerQuantityAndAdd">
                    <div className="containerQty">
                        <div className="containerH1Quantidade">
                            <h1 className="h1Qty">Quantidade</h1>
                        </div>
                        <div className="containerIconAddMore">
                            {/* icon here */}
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
