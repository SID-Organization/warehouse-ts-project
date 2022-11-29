import './styles.scss'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function HistReservaId(){

    const { idReserva } = useParams<{ idReserva: string }>()

    return(
        <div>
            {idReserva}
        </div>
    )
}