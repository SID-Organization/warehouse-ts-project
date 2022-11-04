import "./styles.scss";
import TextField from "@mui/material/TextField";
import AddBoxIcon from "@mui/icons-material/AddBox";

export default function Fields() {
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
            />
            <AddBoxIcon
              sx={{
                width: "2.5rem",
                height: "2.5rem",
                color: "#0047B5",
                borderRadius: "1rem",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
