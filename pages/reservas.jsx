import { useState, useEffect } from "react";
import axios from "axios"
import ReservaTable from "./../components/tables/ReservaTable"

const Reservas = () => {
    const [reservas, setReservas] = useState([])

    useEffect(async () => {
        let response = await axios.get("http://localhost:4000/api/booking")
        console.log(response);

    }, [])

    return (
        <div className="container mt-5">
            <h1 className="mt-4">Todas Reservas <button type="button" className="btn btn-primary ml-auto">Agregar</button></h1>
            <ReservaTable reservas={reservas} />

        </div>
    )

}

export default Reservas