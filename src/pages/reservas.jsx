import { useState, useEffect } from "react";
import { axiosBaseURL } from "./../config/axios.ts";
import ReservaTable from "./../components/tables/ReservaTable"
import Link from 'next/link';

const Reservas = () => {
    const [reservas, setReservas] = useState([])
    useEffect(async () => {
        let response = await axiosBaseURL.get("/booking")
        console.log(response);
        setReservas(response.data.data.bookings)
    }, [])

    return (
        <div className=" mt-5">
            <h1 className="mt-4">Todas Reservas <Link type="button" href="/addBooking" className="btn btn-primary ml-auto">Crear Reserva</Link></h1>
            <ReservaTable reservas={reservas} />
        </div>
    )

}

export default Reservas