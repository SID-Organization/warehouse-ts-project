import React from "react";

import "./styles.scss";

import SystemUserTRow from "./SystemUserTRow";

const usersMock = [
  {
    name: "João da Silva",
    email: "joaosilva@gmail.com",
    matricula: "65483",
    funcao: "Professor"
  },
  {
    name: "Maria da Silva",
    email: "mariasilva@gmail.com",
    matricula: "65484",
    funcao: "Pendente"
  },
  {
    name: "Carlos Prado",
    email: "carlosprado@gmail.com",
    matricula: "65485",
    funcao: "Pendente"
  }
];

function AdminMngmntUsers() {
  return (
    <React.Fragment>
      <h2>Usuários do sistema</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Matricula</th>
            <th>Função</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {usersMock.filter(user => user.funcao.toUpperCase() == "PROFESSOR").map(user => <SystemUserTRow user={user} />)}
        </tbody>
      </table>

      <h2>Cadastros pendentes</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Matricula</th>
            <th>Função</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {usersMock.filter(user => user.funcao.toUpperCase() == "PENDENTE").map(user => <SystemUserTRow user={user} />)}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default AdminMngmntUsers;
