import axios from "axios"
import { useState } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link';

const BookTable = (props) => {

    const router = useRouter()

    async function edit(books){
        console.log(books);
        const response = await axios.get(`http://localhost:4000/api/book/${books.ID}`);
        //setSubmitting(false);
        // console.log(response.data.data.books);
        if (response.data.Errors.length > 0) {
            response.data.Errors.forEach(err => {
                if (!err.message.includes("Invalid login")) window.alert(err.message);
            })
        }
        
        router.push(`/updateBook?id=${books.ID}`);
        // router.push({
        //     pathname: `/updateBook?userName=${books.ID}`,
        //     query: books
        //   });
        // router.push({
        //     pathname: '/updateBook',
        //     state: { book: books }
        // });
        // router.push(`/updateBook/:id`);
    }

    return (
        <div className="table-responsive text-center mt-3">
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Autor</th>
                        <th scope="col">Genero</th>
                        <th scope="col">Editorial</th>
                        <th scope="col">ISBN</th>
                        <th scope="col">Calificación</th>
                        <th scope="col"> </th>
                    </tr>
                </thead>
                <tbody>
                    {props.libros.map(libro => (<tr>
                        <td>{libro.Name}</td>
                        <td>{libro.Author}</td>
                        <td>{libro.Genre}</td>
                        <td>{libro.Editorial}</td>
                        <td>{libro.ISBN}</td>
                        <td>{libro.Rate}</td>
                        <td className="table-buttons">
                            <button type="button" onClick={(e) => edit(libro, e)} className="btn btn-warning">Editar</button>
                            {/* <Link href="/updateBook/[id]" as={`/updateBook/${libro.ID}`}>Editar Libro</Link> */}
                            {/* to={{pathname: "/updateBook", state: libro}} */}
                            <button type="button" className="btn btn-danger">Eliminar</button>
                        </td>
                    </tr>))
                    }
                </tbody>
            </table>

        </div>

    )

}
export default BookTable