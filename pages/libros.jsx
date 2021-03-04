import { useState, useEffect } from "react";
import axios from "axios"
import BookTable from "./../components/tables/BookTable"

const Libros = () => {
    const [libros, setLibros] = useState([])

    useEffect(async () => {
        let response = await axios.get("http://localhost:4000/api/book")
        console.log(response);
        setLibros(response.data.data.books)
    }, [])

    return (
        <div className="container mt-5">
            <h1 className="mt-4">Todos Libros <button type="button" className="btn btn-primary ml-auto">Agregar</button></h1>
            <BookTable libros={libros} />

        </div>
    )

}

export default Libros