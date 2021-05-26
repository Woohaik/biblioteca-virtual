import { useState, useEffect } from "react";
import axios from "axios"
import BookTable from "./../components/tables/BookTable"

const Libros = () => {
    const [libros, setLibros] = useState([])

    useEffect(async () => {
        let response = await axios.get("http://localhost:4000/api/book")
        console.log(response.data.data.books);
        setLibros(response.data.data.books)
    }, [])

    return (
        <div className="container mt-5">
            <h1 className="mt-4">Todos Libros <button type="button" onClick={() => add()} className="btn btn-primary ml-auto">Agregar</button></h1>
            <BookTable libros={libros} />
        </div>
    )

}

async function add(){
    window.location.href = `/addBooks`;
}

export default Libros