import "react";
import { useState } from "react";
import UploadIcon from "../../../assets/upload-icon.png";

import "./styles.scss";

export default function AdminInsertNewItem() {

  const [image, setImage] = useState<Blob>();
  const [name, setName] = useState("");
  const [storageQty, setStorageQty] = useState(0);
  const [characteristic, setCharacteristic] = useState("");
  const [classification, setClassification] = useState("");
  const [details, setDetails] = useState("");
  const [disposable, setDisposable] = useState(false);

  async function handleItemInsert(){
    console.log("Item inserido com sucesso!");

    const formData = new FormData();
    
    const data = {
    "nomeItem": name,
    "caracteristicaItem": characteristic,
    "classificacaoItem": classification,
    "detalhesItem": details,
    "itemDescartavel": disposable,
    "idEspacoOrganizacional": {"idEspacoOrganizacional": 1}
    }

    formData.append("item", JSON.stringify(data));

    if(image){
      formData.append("image", image);
    }

    const response = await fetch("http://localhost:8080/almoxarifado/itens", {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

    console.log(response);
  }

  function handleInputChange(e:any){
    setImage(e.target.files[0]);
  }

  return (
    <div id="div-screen">
      <div className="div-titulo-header">
        <div id="div-line-container">
          <h1 id="txt-titulo">Cadastrar item</h1>
          <div id="div-line" />
        </div>
      </div>
        <div className="div-container">
          <div id="div-child">
            <div className="div-container-li">
              <div className="div-label-form">
                <label htmlFor="nome" className="label-form">
                  Nome
                </label>
              </div>
              <div className="div-input-form">
                <input type="text" name="nome" value={name} onChange={(e) => {setName(e.target.value)}} className="input-form" />
              </div>
            </div>
            <div className="div-container-li">
              <div>
                <label htmlFor="qtdEstoque" className="label-form">
                  Quantidade em estoque
                </label>
              </div>
              <div className="div-input-form">
                <input type="number" name="qtdEstoque" value={storageQty} onChange={(e: any) => {setStorageQty(e.target.value)}} className="input-form" />
              </div>
            </div>
            <div className="div-container-li">
              <div>
                <label htmlFor="caracteristica" className="label-form">
                  Característica
                </label>
              </div>
              <div className="div-input-form">
                <input
                  type="text"
                  name="caracteristica"
                  className="input-form"
                  value={characteristic} onChange={(e: any) => {setCharacteristic(e.target.value)}}
                />
              </div>
            </div>
            <div className="div-container-li">
              <div>
                <label htmlFor="classificacao" className="label-form">
                  Classificacao
                </label>
              </div>
              <div className="div-input-form">
                <input type="text" className="input-form" value={classification} onChange={(e: any) => {setClassification(e.target.value)}} />
              </div>
            </div>
            <div className="div-container-li">
              <div className="label-form">
                <label htmlFor="detalhes" className="label-form">
                  Detalhes
                </label>
              </div>
              <div className="div-input-form">
                <input type="text" name="detalhes" className="input-form" value={details} onChange={(e: any) => {setDetails(e.target.value)}} />
              </div>
            </div>
            <div className="div-container-li">
              <label htmlFor="descartavel" className="label-form">
                Item descartável?
              </label>
              <div className="div-checkbox-dad">
                <div>
                  <label htmlFor="descartavel" className="label-checkbox">
                    Sim
                  </label>
                  <input
                    type="checkbox"
                    name="descartavel"
                    className="checkbox"
                    checked={disposable} onChange={(e: any) => {setDisposable(e.target.checked)}}
                  />
                </div>
                <div>
                  <label htmlFor="descartavel" className="label-checkbox">
                    Não
                  </label>
                  <input
                    type="checkbox"
                    name="descartavel"
                    className="checkbox"
                    checked={!disposable} onChange={(e: any) => {setDisposable(!e.target.checked)}}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="div-newest-child">
            <div>
              <div>
                <img src={UploadIcon} alt="" />
              </div>
              <div className="div-upload-img">
                <h3 id="upload-txt">Upload imagem do item</h3>
              </div>
              <div>
                <input type="file" onChange={(e: any) => handleInputChange(e)} className="file_upload"/>
              </div>
            </div>
          </div>
        </div>
      <div id="div-button">
        <button onClick={() => handleItemInsert()} id="button">Cadastrar item</button>
      </div>
    </div>
  );
}
