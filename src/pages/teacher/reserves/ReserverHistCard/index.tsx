
import './styles.scss'

interface ReserveData {
    reserve: {
        idReserva: number;
        matricula: {
            matricula: string;
            nome: string;
            sobrenome: string;
            email: string;
            cargo: string;
            senha: string;
        };
        status: string;
        dataRetirada: string;
        dataRetirado: string;
        dataDevolucao: string;
    }
  }

export default function ReserveHistCard(props : ReserveData) {

    function getBorderColor(){
        if(props.reserve.status === 'ATIVO'){
            return 'green';
        }else if(props.reserve.status === 'ATRASADO'){
            return 'red';
        }else if(props.reserve.status === 'CANCELADO'){
            return 'gray';
        }else{
            return 'lightblue';
        }
    }

    function getDate(){
        const formattedDate = new Date(props.reserve.dataRetirada);
        return <h5 className="date">{formattedDate.toLocaleDateString() + " - " + formattedDate.getHours() + ":" + formattedDate.getMinutes()}</h5>
        
    }

    return (
        <div className='reserve-card' style={{width: "18rem", border: `1px solid ${getBorderColor()}`, borderRadius: 5, padding: "15px"}}>
            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "10px"}}>
                <h5>ID da Reserva: </h5>
                <p>{props.reserve.idReserva}</p>
            </div>
            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "10px"}}>
                <h5>Status: </h5>
                <p>{props.reserve.status}</p>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h5>Data da devolução: </h5>
                <p>{getDate()}</p>
            </div>

        </div>
    )

}