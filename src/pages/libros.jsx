import { useState, useEffect } from "react";
import { axiosBaseURL } from "./../config/axios.ts";
import BookTable from "./../components/tables/BookTable";

const Libros = () => {
    const [libros, setLibros] = useState([])
    useEffect(async () => {
        let response = await axiosBaseURL.get("/book")
        setLibros(response.data.data.books)
    }, [])
    return (
        <div className="mt-5">
            <h1 className="mt-4">Todos Libros <button type="button" onClick={() => add()} className="btn btn-primary ml-auto">Agregar</button></h1>
            <BookTable libros={libros} />
        </div>
    )
}

export default Libros;