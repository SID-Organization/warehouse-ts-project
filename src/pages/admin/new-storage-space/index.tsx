import React, { useEffect } from "react";
import "./styles.scss";

import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Tooltip } from "@mui/material";

export default function NewStorageSpace() {
  const [localSpace, setLocalSpace] = React.useState("");
  const [defaultValue, setDefaultValue] = React.useState("");
  const [list, setList] = React.useState<any[]>([]);

  function addValues() {
    if (localSpace !== "" && defaultValue !== "") {
        for(let item of list) {
            if(item.localSpace === localSpace) {
                alert("Local já cadastrado");
                return;
            }
        }
      setList([...list, { localSpace, defaultValue }]);
    } else {
      alert("Preencha todos os campos");
    }
  }

  function getValues() {
    return list.map((item, index) => (
      <div>
        <div className="listItem">
          {item.localSpace} - {item.defaultValue}
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

  const defaultSelectValues = [
    {
      fieldName: "Caixa de papelão",
      label: "Caixa de papelão",
      predefineValues: ["Caixa de papelão", "Caixa de papelão 2"],
    },
    {
      fieldName: "Caixa de madeira",
      label: "Caixa de madeira",
      predefineValues: ["leo troxao", "Caixa de madeira 2"],
    },
    {
      fieldName: "Caixa de plástico",
      label: "Caixa de plástico",
      predefineValues: ["Caixa de plástico", "Caixa de plástico 2"],
    },
    {
      fieldName: "Caixa de metal",
      label: "Caixa de metal",
      predefineValues: ["Caixa de metal", "Caixa de metal 2"],
    },
  ];

  const handleChangeLocalSpace = (event: SelectChangeEvent) => {
    setLocalSpace(event.target.value as string);
  };

  const handleChangeDefaultValue = (event: SelectChangeEvent) => {
    setDefaultValue(event.target.value as string);
  };

  return (
    <div className="new-storage-space-container">
      <div id="div-line-container">
        <div>
          <h1 id="txt-titulo">Espaços organizacionais</h1>
          <div id="div-line" />
        </div>
        <Button
          sx={{
            width: "21rem",
            height: "3rem",
            color: "#fff",
            borderRadius: "1rem",
            cursor: "pointer",
            backgroundColor: "#0047B5",
            "&:hover": {
              backgroundColor: "#0047B5",
            },
          }}
          variant="contained"
          endIcon={<AddBoxIcon />}
        >
          Cadastrar espaço organizacional
        </Button>
      </div>
      <div className="fields-container">
        <TextField
          label="Nome do espaço de armazenamento"
          placeholder="Caixa vermelha"
          sx={{ width: "30rem" }}
        />
        <div className="fieldsSelect">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Localização do espaço
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={localSpace}
              label="Localização do espaço"
              onChange={handleChangeLocalSpace}
              sx={{ width: "30rem" }}
            >
              {defaultSelectValues.map((item) => (
                <MenuItem value={item.fieldName}>{item.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className="waterMaster">
            <div className="defaultInput">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Valor predefinido
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={defaultValue}
                  label="Valor predefinido"
                  onChange={handleChangeDefaultValue}
                  sx={{ width: "30rem" }}
                >
                  {defaultSelectValues
                    .filter((item) => item.fieldName === localSpace)
                    .map((item) =>
                      item.predefineValues.map((predefine) => (
                        <MenuItem value={predefine}>{predefine}</MenuItem>
                      ))
                    )}
                </Select>
              </FormControl>
              <Tooltip title="Adicionar valor">
                <AddBoxIcon
                  onClick={addValues}
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
            </div>
          </div>
        </div>
      </div>
      {getValues()}
    </div>
  );
}
