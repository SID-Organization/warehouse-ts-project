import { useEffect, useState } from "react";

import "./styles.scss";

import SystemUserTRow from "./SystemUserTRow";

interface IUsers{
    nome: string,
    sobrenome: string,
    email: string,
    senha: string,
    matricula: string,
    cargo: string
}


function AdminUsersManagement() {
  const [users, setUsers] = useState<IUsers[]>();

  useEffect(() => {
    fetch('http://localhost:8080/almoxarifado/pessoas')
    .then(response => response.json())
    .then(data => {
      setUsers(data);
    })
  },[])

  useEffect(() => {
    console.log(users);
  },[users])



  return (
    <div className="manage-users-container">
      <h2>USUÁRIOS DO SISTEMA</h2>
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
          {users?.filter(user => user.cargo != "PENDENTE").map((user, index) => <SystemUserTRow key={index} user={user} />)}
        </tbody>
      </table>

      <h2>CADASTROS PENDENTES</h2>
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
          {users?.filter(user => user.cargo == "PENDENTE").map((user, index) => <SystemUserTRow key={index} user={user} />)}
        </tbody>
      </table>
    </div>
  );
}

export default AdminUsersManagement;
