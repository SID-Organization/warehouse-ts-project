import { Link } from "react-router-dom";

import '../../styles/administrator/Admin-home.scss';

function AdminHome() {
  return <div className="admin-home">
    <div className="containerAdminHomeMain">
      <div className='div-bemv-container'>
        <div id='div-bemv'>
          <h1 id='bem-vindotxt'>Bem-vindo</h1>
        </div>
        <div id='div-gerenc'>
          <p>ao gerenciamento do almoxarifado</p>
        </div>
      </div>
      <div className='div-logos-container'>
        <div id='div-logos-child'>
          <Link className="link" to="/admin/manage-users">
            <div className='modal-logo'>
              <div>
                <img className='logos-img' src='../../assets/logo-users.png' alt='' />
              </div>
              <div>
                <h1 className='txt-logos'>Gerenciar Usuários</h1>
              </div>
            </div>
          </Link>
          <Link className="link" to="/admin/manage-emplys">
            <div className='modal-logo'>
              <div>
                <img className='logos-img' src='../../assets/logo-funcionarios.png' alt='' />
              </div>
              <div>
                <h1 className='txt-logos'>Gerenciar Funcionários</h1>
              </div>
            </div>
          </Link>
          <Link className="link" to="/admin/manage-prods">
            <div className='modal-logo'>
              <div>
                <img className='logos-img' src='../../assets/logo-gerenc-prod.png' alt='' />
              </div>
              <div>
                <h1 className='txt-logos'>Gerenciar Produtos</h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>;
  </div>
}

export default AdminHome;