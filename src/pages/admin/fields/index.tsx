import "./styles.scss";
import TextField from "@mui/material/TextField";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";

export default function Fields() {
  const [fieldName, setFieldName] = useState("");
  const [value, setValue] = useState("");
  const [list, setList] = useState<any[]>([]);

  function addValues() {
    setList([...list, { fieldName, value }]);
  }

  function getValues() {
    return list.map((item, index) => (
      <div>
        <div className="listItem">
          {item.fieldName} - {item.value}
          <Tooltip title="Remover valor">
            <DeleteIcon
              onClick={() => {
                const newList = list.filter((_, i) => i !== index);
                setList(newList);
              }}
              sx={{
                width: "1.5rem",
                height: "1.5rem",
                color: "#a3a3a3",
                borderRadius: "1rem",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
            />
          </Tooltip>
        </div>
      </div>
    ));
  }

  async function sendToDatabase() {
    const data = {
      nomeCampo: fieldName,
      valores: [
        {
          valorPredefinido: list,
        },
      ],
    };

    const response = await fetch("http://localhost:8080/almoxarifado/campos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    console.log(response);
  }

  return (
    <div className="FieldsPage">
      <div className="div-titulo-header">
        <div id="div-line-container">
          <h1 id="txt-titulo">Cadastro de novo campo</h1>
          <div id="div-line" />
        </div>
      </div>
      <div className="subHeader">
        <h2 id="txt-titulo">Cadastrar novo campo</h2>
      </div>
      <div className="containerFields">
        <TextField
          id="outlined-basic"
          label="Nome do campo"
          variant="outlined"
          sx={{
            width: "30rem",
            borderRadius: "1rem",
          }}
          onChange={(e) => setFieldName(e.target.value)}
        />
        <div className="containerDefaultValue">
          <div className="defaultInput">
            <TextField
              id="outlined-basic"
              label="Valor predefinido para este campo"
              variant="outlined"
              sx={{
                width: "30rem",
                borderRadius: "1rem",
              }}
              onChange={(e) => setValue(e.target.value)}
            />

            <div className="icons">
              <Tooltip title="Adicionar valor">
                <AddBoxIcon
                  onClick={() => addValues()}
                  sx={{
                    width: "2rem",
                    height: "2rem",
                    color: "#0047B5",
                    borderRadius: "1rem",
                    marginLeft: "1rem",
                    cursor: "pointer",
                  }}
                />
              </Tooltip>
              <Button
                onClick={() => sendToDatabase()}
                variant="contained"
                sx={{
                  width: "30rem",
                  borderRadius: "0.3rem",
                  marginTop: "10rem",
                  marginLeft: "5rem",
                  backgroundColor: "#0047B5",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#0047B5",
                  },
                }}
              >
                Cadastrar campo
              </Button>
            </div>
          </div>
          <div>{getValues()}</div>
        </div>
      </div>
    </div>
  );
}
