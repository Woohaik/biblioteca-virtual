import { useState, useEffect } from "react";
import { axiosBaseURL } from "./../config/axios.ts";
import ReservaTable from "./../components/tables/ReservaTable"

const Reservas = () => {
    const [reservas, setReservas] = useState([])
    useEffect(async () => {
        let response = await axiosBaseURL.get("/booking")
        console.log(response);
        setReservas(response.data.data.bookings)
    }, [])

    return (
        <div className=" mt-5">
            <h1 className="mt-4">Todas Reservas </h1>
            <ReservaTable reservas={reservas} />

        </div>
    )

}

export default Reservas