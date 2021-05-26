import { useState, useEffect } from "react";
import axios from "axios"
import BookForm from "../components/forms/BookForm";

const updateLibros = () => {
    const [libros, setLibros] = useState([])

    useEffect(async () => {
        let idBook = sessionStorage.getItem("id");
        console.log("El ID: "+idBook);
        // getByID(idBook);

        await axios.get(`http://localhost:4000/api/book/${idBook}`)
        .then(res => {
            console.log(res);
            console.log(res.data.data.books);
            setLibros(res.data.data.books);
        })

        // let response = await axios.get(`http://localhost:4000/api/book/${idBook}`)
        // console.log(response.data.data.books);
        // setLibros(response.data.data.books);


    }, [])

    return (
        <div className="container my-4">
            <h1 className="mt-4">Libro: {libros.Name}</h1>
            <BookForm libros={libros} />
        </div>
    )

}

async function edit(id){
    console.log(id);

    let name = document.getElementById('name');
    let author = document.getElementById('author');
    let publicationYear = document.getElementById('publicationYear');
    let genre = document.getElementById('genre');
    let ISBN = document.getElementById('ISBN');
    let rate = document.getElementById('rate');
    let editorial = document.getElementById('editorial');
    let synopsis = document.getElementById('synopsis');

    let newBook = {
        Name: name,
        Author: author,
        PublicationYear: publicationYear,
        Genre: genre,
        Rate: rate,
        ISBN: ISBN,
        Editorial: editorial,
        Synopsis: synopsis
    }
}

export default updateLibros