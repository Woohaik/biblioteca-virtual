import axios from "axios"

const BookForm = ({libros}) => {
    console.log("Props: "+libros);

    return (
        <div className="mt-2 pb-0">
            <div className="container pl-4 editCcontainer">
                <div className="editField">
                    <div>
                        <label>Nombre:</label>
                    </div>                
                     <div className="text-center"> 
                        {libros != ""? <input type="text" id="name" defaultValue={libros.Name}/> : <input type="text" id="name"/> }
                    </div>  
                </div>

                <div className="form-row editField">
                    <div>
                        <label>Autor:</label>
                    </div>                
                     <div className="text-center"> 
                        {libros != ""? <input type="text" id="author" defaultValue={libros.Author}/>: <input type="text" id="author"/> }
                        
                    </div>  
                </div>

                <div className="form-row editField">
                    <div>
                        <label>Año de Publicación:</label>
                    </div>                
                     <div className="text-center"> 
                        {libros != ""? <input type="text" id="publicationYear" defaultValue={libros.PublicationYear}/>: <input type="text" id="publicationYear"/> }
                        
                    </div>  
                </div>

                <div className="form-row editField">
                    <div>
                        <label>Género:</label>
                    </div>                
                     <div className="text-center"> 
                        {libros != ""? <input type="text" id="genre" defaultValue={libros.Genre}/>: <input type="text" id="genre"/> }
                        
                    </div>  
                </div>

                {/* <div className="form-row editField">
                    <div>
                        <label>Calificación:</label>
                    </div>                
                     <div className="text-center">
                        {libros != ""? <input type="text" id="rate" defaultValue={libros.Rate}/>: <input type="text" id="rate"/> } 
                        
                    </div>  
                </div> */}

                <div class="form-row editField">
                  <div>
                    <label for="">Calificación:</label>
                  </div>
                  
                  <div className="number-wrapper number-input text-center"> 
                    <input type="button" onClick={() => substract("minus")} id="minus" className="operation btn btn-light" value="-"/>
                    {libros != ""? <input type="number" id="rate" defaultValue={libros.Rate} min="1" max="10" />: <input type="number" defaultValue="1" id="rate" min="1" max="10" /> } 
                    <input type="button" onClick={() =>add("plus")} id="plus" className="operation btn" value="+"/>

                  </div>
                </div>

                <div className="form-row editField">
                    <div>
                        <label>ISBN:</label>
                    </div>                
                     <div className="text-center">
                        {libros != ""? <input type="text" id="ISBN" defaultValue={libros.ISBN}/>: <input type="text" id="ISBN"/> } 
                        
                    </div>  
                </div>

                <div className="form-row editField">
                    <div>
                        <label>Editorial:</label>
                    </div>                
                     <div className="text-center">
                        {libros != ""? <input type="text" id="editorial" defaultValue={libros.Editorial}/>: <input type="text" id="editorial"/> } 
                        
                    </div>  
                </div>

                <div className="form-row editField">
                    <div>
                        <label>Sinopsis:</label>
                    </div>                
                     <div className="text-center">
                        {libros != ""? <input type="text" id="synopsis" defaultValue={libros.Synopsis}/>: <input type="text" id="synopsis"/> } 
                    </div>  
                </div>

                {/* <label>Autor:</label><input type="text" value={libros.Author}/>
                <label>Género:</label><input type="text" value={libros.Genre}/>
                <label>ISBN:</label><input type="text" value={libros.ISBN}/> */}
                {libros != ""? 
                <button type="button" className="btn btn-warning editBtn" onClick={(e) => editBook(libros.ID, e)}>Editar</button> :
                <button type="button" className="btn btn-warning editBtn" onClick={(e) => addBook()}>Agregar</button>
                }
            </div>

        </div>
    )
}

function add(id){
   document.getElementById(id).parentNode.querySelector('input[type=number]').stepUp();
}

function substract(id){
    document.getElementById(id).parentNode.querySelector('input[type=number]').stepDown();
}

async function editBook(id){
    console.log(id);

    let name = document.getElementById('name').value;
    let author = document.getElementById('author').value;
    let publicationYear = document.getElementById('publicationYear').value;
    let genre = document.getElementById('genre').value;
    let ISBN = document.getElementById('ISBN').value;
    let rate = document.getElementById('rate').value;
    let editorial = document.getElementById('editorial').value;
    let synopsis = document.getElementById('synopsis').value;

    const newBook = {
        "Name": name,
        "Author": author,
        "PublicationYear": publicationYear,
        "Genre": genre,
        "Rate": rate,
        "ISBN": ISBN,
        "Editorial": editorial,
        "Synopsis": synopsis
    }
    
    console.log(newBook);

    await axios.post(`http://localhost:4000/api/book/updateBook/${id}`, newBook)
    .then(res => {
        console.log(res);
        console.log(res.data);
    })
    //setLibros(response.data.data.books)
    window.location.href = "/libros";
}

async function addBook(){

    let name = document.getElementById('name').value;
    let author = document.getElementById('author').value;
    let publicationYear = document.getElementById('publicationYear').value;
    let genre = document.getElementById('genre').value;
    let ISBN = document.getElementById('ISBN').value;
    let rate = document.getElementById('rate').value;
    let editorial = document.getElementById('editorial').value;
    let synopsis = document.getElementById('synopsis').value;

    const newBook = {
        "Name": name,
        "Author": author,
        "PublicationYear": publicationYear,
        "Genre": genre,
        "Rate": rate,
        "ISBN": ISBN,
        "Editorial": editorial,
        "Synopsis": synopsis
    }
    
    console.log(newBook);

    await axios.post(`http://localhost:4000/api/book`, newBook)
    .then(res => {
        console.log(res);
        console.log(res.data);
    })
    //setLibros(response.data.data.books)
    window.location.href = "/libros";
}

export default BookForm