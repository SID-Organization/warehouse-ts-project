import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import "./styles.scss";

export default function ReservesTeacher() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="page-reserves-teacher">
      <div className="containerProductsTitle">
        <div className="productTitle">
          <h1 className="h1Produtos">Reservas</h1>
        </div>
      </div>
      <div className="filterReserves">
        <h1>À devolver</h1>
        <h1>À retirar</h1>
        <h1>Histórico</h1>
      </div>
      <div className="containerReserves">
        <div className="reserve" onClick={handleOpen}>
          <div className="leftSideReserve">
            <img
              src="
              https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80
              "
              alt=""
            />
            <h1>Professor</h1>
            <div className="retiradoSide">
              <h1>Retirado: </h1>
              <h1 className="dateH1">20/06/2022 15:30</h1>
            </div>
            <div className="returnedSide">
              <h1>Devolvido: </h1>
              <h1 className="dateH1">20/06/2022 15:30</h1>
            </div>
            <div className="returnedSide">
              <h1>Status: </h1>
              <h1 className="dateH1">À retirar</h1>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="modalReserve">
              <div>
                <h1>Lista de itens</h1>
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
