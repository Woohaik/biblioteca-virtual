import axios from "axios"
import { useState } from "react";

const BookTable = (props) => {

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
                            <button type="button" className="btn btn-warning" onClick={(e) => edit(libro.ID, e)}>Editar</button>
                            <button type="button" className="btn btn-danger" onClick={(e) => deleteBook(libro.ID, e)}>Eliminar</button>
                        </td>
                    </tr>))}
                </tbody>
            </table>

            </div>

    )

}

async function edit(id){
    console.log(id);

    sessionStorage.setItem("id", id);
    window.location.href = `/updateLibros`;
}

async function deleteBook(idBook){

    if(confirm ('¿Está seguro que desea eliminar el libro?')) {
        console.log("//they clicked ok");
        await axios.delete(`http://localhost:4000/api/book/${idBook}`)
        .then(res => {
            console.log(res);
            console.log(res.data.data.books);
            window.location.href = "/libros";
        })
      }
      else {
        console.log("//they clicked cancel");
      }
}

export default BookTable