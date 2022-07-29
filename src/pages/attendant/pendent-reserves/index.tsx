import './styles.scss';

export default function PendentReserves() {
    return (
        <div className="pendent-reserves">
            <div className='page-title'>
                <h1>Reservas pendentes</h1>
            </div>
            {/* <div className="info-container">
                <div className="todays-date">
                    <p>
                        Hoje, {today.toLocaleDateString()}
                    </p>
                </div>
                {openFilter && filterBody()}
                <button className="button-filter" onClick={() => openFilter ? handleSearchClick() : setOpenFilter(true)}>
                    <div className="content">
                        <p id="filter-button-txt">Filtros</p>
                    </div>
                    <div className="sort-icon">
                        <img src={openFilter ? searchIcon : sortIcon} alt="" />
                    </div>
                </button>
            </div> */}
        </div>
    );
}