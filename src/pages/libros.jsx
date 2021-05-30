import { useState, useEffect } from "react";
import { axiosBaseURL } from "./../config/axios.ts";
import BookTable from "./../components/tables/BookTable";
import Link from 'next/link';

const Libros = () => {
    const [libros, setLibros] = useState([])
    useEffect(async () => {
        let response = await axiosBaseURL.get("/book")
        setLibros(response.data.data.books)
    }, [])
    return (
        <div className="mt-5">
            <h1 className="mt-4">Todos Libros <Link type="button" href="/addBook" className="btn btn-primary ml-auto">Agregar Libro</Link></h1>
            <BookTable libros={libros} />
        </div>
    )
}

export default Libros;