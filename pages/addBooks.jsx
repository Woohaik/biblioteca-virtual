import BookForm from "../components/forms/BookForm";

const addBooks = () => {
    return (
        <div className="container mt-5">
            <h1 className="mt-4">Crear Libro</h1>
            <BookForm libros="" />
        </div>
    )

}

export default addBooks