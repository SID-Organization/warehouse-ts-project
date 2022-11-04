import React, { useEffect } from "react";
import "./styles.scss";

import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

export default function NewStorageSpace() {
  const [fieldSelected, setFieldSelected] = React.useState("");
  const [fields, setFields] = React.useState<any[]>([]);
    const [fieldValues, setFieldValues] = React.useState<string[]>([]);

  function handleFieldSelectChange(e: SelectChangeEvent) {
    setFieldSelected(e.target.value as string);
  }

  useEffect(() => {
    //api call
    setFields([
      {
        id: 1,
        fieldName: "Parede",
        valores: ["Azul", "Vermelho", "Verde"]
      },
      {
        id: 2,
        fieldName: "Gaveta",
        valores: ["1", "2", "3"]
      }
    ]);
  }, []);

  return (
    <div className="new-storage-space-container">
      <div id="div-line-container">
        <h1 id="txt-titulo">Cadastrar item</h1>
        <div id="div-line" />
      </div>
      <div className="fields-container">
        <TextField
          label="Nome do espaço de armazenamento"
          placeholder="Caixa vermelha"
          sx={{ width: "30rem" }}
        />
        <FormControl>
          <div className="flex">
            <InputLabel id="select-labelId">Localização</InputLabel>
            <Select
              id="select-id"
              labelId="select-labelId"
              sx={{ width: "15rem", marginRight: "2rem" }}
              value={fieldSelected}
              onChange={(e: SelectChangeEvent) => handleFieldSelectChange(e)}
            >
              {fields.map((field, index) =>
                <MenuItem key={index} value={field}>
                  {field.fieldName}
                </MenuItem>
              )}
            </Select>
            <InputLabel id="select-value-labelId">Valores</InputLabel>
            <Select
              id="select-value-id"
              labelId="select-value-labelId"
              sx={{ width: "15rem" }}
              value={fieldSelected}
            //   onChange={(e: SelectChangeEvent) => handleValueSelectChange(e)}
            />
          </div>
        </FormControl>
      </div>
    </div>
  );
}
