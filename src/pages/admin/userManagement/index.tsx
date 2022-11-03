import { useState } from 'react';

import './style.scss';


import editicon from '../../../assets/edit-icon.png';
import downArrow from '../../../assets/down-arrow.png';
import trashIcon from '../../../assets/trash-icon.png';
import refusedIcon from '../../../assets/refused-icon.png';
import acceptIcon from '../../../assets/accept-icon.png';


function AdminMngmntUsers() {

  const [divFunc, setDivFunc] = useState(true);
  const [divFunc2, setDivFunc2] = useState(true);
  const [func, setFunc] = useState("Professor");
  const [func2, setFunc2] = useState("Professor");


  function showHide() {
    setDivFunc(!divFunc);
  }
  function showHideUser() {
    setDivFunc2(!divFunc2);
  }

  function changeContent(text: string) {
    setFunc(text);
  }

  function changeContentUser(text2: string) {
    setFunc2(text2);
  }

  return (
    <body>
      <main id="main" >
        <div className="admin-gerenc-func" style={{width: '100%'}}>
          <div id='div-separa'></div>
          <div className='div-container'>
            <div className='manage-table'>
              <div className='title-div'>
                <h1 id='table-title'>Usuários do sistema</h1>
              </div>
              <div className='div-sub-title'>
                <div className='div-nothing'>
                </div>
                <div className='div-nome'>
                  <h2 className='sub-titles'>Nome</h2>
                </div>
                <div className='div-email'>
                  <h2 className='sub-titles'>Email</h2>
                </div>
                <div className='div-cadastro'>
                  <h2 className='sub-titles'>Cadastro</h2>
                </div>
                <div className='div-funcao'>
                  <h2 className='sub-titles'>Função/Nível de acesso</h2>
                </div>
              </div>
              <div className='div-itens'>
                <div className='div-nothing'>
                  <h3 className='number-emplys'>1</h3>
                </div>
                <div className='div-nome-func'>
                  <h2 className='emplys-content'>Gustavo Rebelatto Zapella</h2>
                </div>
                <div className='div-email'>
                  <h2 className='emplys-content'>gu.zapella@gmail.com</h2>
                </div>
                <div className='div-cadastro'>
                  <h2 className='emplys-content'>72130</h2>
                </div>
                <div className='div-funcao-content'>
                  {divFunc == true && (
                    <div className='div-func' onClick={() => showHide()}>
                      <h3 id='function' className='emplys-content'>{func}</h3>
                      <img className='down-arrow' src={downArrow} alt="" />
                    </div>
                  )}
                  {divFunc == false && (
                    <div className='div-list' onClick={() => showHide()}>
                      <div className='div-func-list'>
                        <h3 id='function' className='emplys-content'>{func}</h3>
                        <img className='up-arrow' src={downArrow} alt="" />
                      </div>
                      <div className='div-list-content'>
                        <h3 className='list-content' onClick={() => changeContent("Administrador")}>Administrador</h3>
                        <h3 className='list-content' onClick={() => changeContent("Professor")}>Professor</h3>
                        <h3 className='list-content' onClick={() => changeContent("Atendente")}>Atendente</h3>
                        <h3 className='list-content' onClick={() => changeContent("Assistente")}>Assistente</h3>
                      </div>
                    </div>
                  )}
                </div>
                <div className='div-icons'>
                  <div className='div-icon-children'>
                    <img className='edit-icon' src={editicon} alt="" />
                  </div>
                  <div className='div-icon-children'>
                    <img className='edit-icon' src={trashIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id='div-separa2'></div>
          <div className='div-container'>
            <div className='manage-table'>
              <div className='title-div'>
                <h1 id='table-title'>Cadastros pendentes</h1>
              </div>
              <div className='div-sub-title'>
                <div className='div-nothing'>
                </div>
                <div className='div-nome'>
                  <h2 className='sub-titles'>Nome</h2>
                </div>
                <div className='div-email'>
                  <h2 className='sub-titles'>Email</h2>
                </div>
                <div className='div-cadastro'>
                  <h2 className='sub-titles'>Cadastro</h2>
                </div>
                <div className='div-funcao'>
                  <h2 className='sub-titles'>Função/Nível de acesso</h2>
                </div>
              </div>
              <div className='div-itens'>
                <div className='div-nothing'>
                  <h3 className='number-emplys'>1</h3>
                </div>
                <div className='div-nome-func'>
                  <h2 className='emplys-content'>Gustavo Rebelatto Zapella</h2>
                </div>
                <div className='div-email'>
                  <h2 className='emplys-content'>gu.zapella@gmail.com</h2>
                </div>
                <div className='div-cadastro'>
                  <h2 className='emplys-content'>72130</h2>
                </div>
                <div className='div-funcao-content'>
                  {divFunc2 == true && (
                    <div className='div-func-user' onClick={() => showHideUser()}>
                      <h3 id='function' className='emplys-content'>{func2}</h3>
                      <img className='down-arrow' src={downArrow} alt="" />
                    </div>
                  )}
                  {divFunc2 == false && (
                    <div className='div-list' onClick={() => showHideUser()}>
                      <div className='div-func-list'>
                        <h3 id='function' className='emplys-content'>{func2}</h3>
                        <img className='up-arrow' src={downArrow} alt="" />
                      </div>
                      <div className='div-list-content'>
                        <h3 className='list-content' onClick={() => changeContentUser("Administrador")}>Administrador</h3>
                        <h3 className='list-content' onClick={() => changeContentUser("Professor")}>Professor</h3>
                        <h3 className='list-content' onClick={() => changeContentUser("Atendente")}>Atendente</h3>
                        <h3 className='list-content' onClick={() => changeContentUser("Assistente")}>Assistente</h3>
                      </div>
                    </div>
                  )}
                </div>
                <div className='div-icons'>
                  <div className='div-icon-children-actions'>
                    <img className='edit-icon' src={refusedIcon} alt="" />
                  </div>
                  <div className='div-icon-children-actions'>
                    <img className='edit-icon' src={acceptIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </body>
  );
}

export default AdminMngmntUsers;