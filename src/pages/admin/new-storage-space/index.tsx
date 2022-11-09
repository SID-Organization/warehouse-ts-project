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
  const [storageLocationList, setStorageLocationList] = React.useState<any[]>([]);
  const [defaultSelectValues, setDefaultSelectValues] = React.useState<any[]>();
  const [newOrgSpaces, setNewOrgSpace] = React.useState<any[]>([]);
  const [newOrgSpaceName, setNewOrgSpaceName] = React.useState("");



  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if(defaultSelectValues){
      
      const fieldNamesList = defaultSelectValues.filter((item, i) => i % 2 === 0);
      const fieldValuesList = defaultSelectValues.filter((item, i) => i % 2 !== 0);

      const newArray = [];

      for(let i = 0; i < fieldNamesList.length; i++){
        newArray.push({
          field: fieldNamesList[i],
          values: fieldValuesList[i]
        });
      }
      setStorageLocationList(newArray);
    }
  }, [defaultSelectValues]);


  async function registerOrgSpaceOnDB() {
    const dataToBeSent = {
      nomeEspacoOrganizacional: newOrgSpaceName,
      localizacoes:
        newOrgSpaces.map((item) => ({
          idCampo: {idCampo: parseInt(getLocalSpaceId(item.localSpace))},
          idValorPredefinido: {idValorPredefinido : parseInt(getDefaultValueId(item.localSpace, item.defaultValue))}
        })),
    }

    console.log(dataToBeSent);

    const registeredData = await fetch("http://localhost:8080/almoxarifado/espaco-organizacional/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToBeSent),
    })
    .then(response => response.json())
    .catch(error => console.log(error));

    alert("Espaço organizacional cadastrado com sucesso!");
    console.log("RegisteredData", registeredData);
  }
  
  const getValoresPredefinidos = (fieldId: string) => {
    const list = storageLocationList.find((item) => item.field.idCampo === fieldId);
    if (list) {
      return list.values;
    }
    return [];
  };

  /**
   * Faz o fetch para o banco e retorna os dados alternando entre os campos e os valores dos campos
   * [
   *  {idCampo: 1, nomeCampo: "gaveta"},
   *  [{valor: "1"}, {valor: "2"}, {valor: "3"}]
   * ]
   */
  async function getData(){
    await fetch(
      "http://localhost:8080/almoxarifado/campos"
    ).then(response => response.json())
    .then(data => {
      setDefaultSelectValues(data);
    });
  }

  function addValues() {
    if (localSpace !== "" && defaultValue !== "") {
      for (let item of newOrgSpaces) {
        if (item.localSpace === getLocalSpace(localSpace)) {
          alert("Local já cadastrado");
          return;
        }
      }
      setNewOrgSpace([...newOrgSpaces, { localSpace: getLocalSpace(localSpace), defaultValue: getDefaultValue(localSpace, defaultValue) }]);
    } else {
      alert("Preencha todos os campos");
    }
  }

  function getLocalSpace(id: string) {
    const localSpace = storageLocationList.find((item) => item.field.idCampo === id);
    return localSpace.field.nomeCampo;
  }

  function getDefaultValue(id: string, valueId: string) {
    const defaultValue = storageLocationList.find((item) => item.field.idCampo === id);
    const value = defaultValue.values.find((item:any) => item.idValorPredefinido === valueId);
    return value.valorPredefinido;
  }

  function getLocalSpaceId(name: string) {
    const localSpace = storageLocationList.find((item) => item.field.nomeCampo === name);
    return localSpace.field.idCampo;
  }

  function getDefaultValueId(name: string, value: string) {
    const defaultValue = storageLocationList.find((item) => item.field.nomeCampo === name);
    const valueId = defaultValue.values.find((item:any) => item.valorPredefinido === value);
    return valueId.idValorPredefinido;
  }

  function getValues() {
    return newOrgSpaces.map((item, index) =>
        <div className="listItem" key={index}>
          {item.localSpace} - {item.defaultValue}
          <Tooltip title="Remover valor">
            <DeleteIcon
              onClick={() => {
                const newList = newOrgSpaces.filter((_, i) => i !== index);
                setNewOrgSpace(newList);
              }}
              sx={{
                width: "1.5rem",
                height: "1.5rem",
                color: "#a3a3a3",
                borderRadius: "1rem",
                marginLeft: "1rem",
                cursor: "pointer"
              }}
            />
          </Tooltip>
        </div>
    );
  }

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
              backgroundColor: "#0047B5"
            }
          }}
          variant="contained"
          endIcon={<AddBoxIcon />}
          onClick={() => {registerOrgSpaceOnDB()}}
        >
          Cadastrar espaço organizacional
        </Button>
      </div>
      <div className="fields-container">
        <TextField
          label="Nome do espaço de armazenamento"
          placeholder="Caixa vermelha"
          sx={{ width: "30rem" }}
          value={newOrgSpaceName}
          onChange={(e:any) => setNewOrgSpaceName(e.target.value)}
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
              {storageLocationList?.map(item =>
                <MenuItem value={item.field.idCampo}>
                  {item.field.nomeCampo}
                </MenuItem>
              )}
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
                  {
                    getValoresPredefinidos(localSpace).map((value:any) => (
                      <MenuItem value={value.idValorPredefinido}>
                        {value.valorPredefinido}
                      </MenuItem>
                    ))
                  }
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
                    cursor: "pointer"
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
