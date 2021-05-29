import axios from "axios"

const UserForm = ({usuarios}) => {
    console.log("Props: "+usuarios);

    return (
        <div className="mt-2 pb-0">
            <div className="container pl-4 editCcontainer">
                <div className="editField">
                    <div>
                        <label>Nombre:</label>
                    </div>                
                     <div className="text-center"> 
                        {usuarios != ""? <input type="text" id="name" defaultValue={usuarios.Name}/> : <input type="text" id="name"/> }
                    </div>  
                </div>

                {/* <div className="form-row editField">
                    <div>
                        <label>Calificación:</label>
                    </div>                
                     <div className="text-center">
                        {usuarios != ""? <input type="text" id="rate" defaultValue={usuarios.Rate}/>: <input type="text" id="rate"/> } 
                        
                    </div>  
                </div> */}

                <div className="form-row editField">
                    <div>
                        <label>Apellidos:</label>
                    </div>                
                    <div className="text-center"> 
                        {usuarios != ""? <input type="text" id="lastname" defaultValue={usuarios.Lastname}/> : <input type="text" id="lastname"/> }
                    </div>  
                </div>

                <div className="form-row editField">
                    <div>
                        <label>Nombre de  Usuario:</label>
                    </div>                
                    <div className="text-center"> 
                        {usuarios != ""? <input type="text" id="username" defaultValue={usuarios.Username}/> : <input type="text" id="username"/> }
                    </div>  
                </div>

                <div className="form-row editField">
                    <div>
                        <label>ID:</label>
                    </div>                
                     <div className="text-center">
                        {usuarios != ""? <input type="text" id="ID" defaultValue={usuarios.ID}/>: <input type="text" id="ID"/> } 
                        
                    </div>  
                </div>

                <div className="form-row editField">
                    <div>
                        <label>Correo:</label>
                    </div>                
                     <div className="text-center">
                        {usuarios != ""? <input type="text" id="email" defaultValue={usuarios.ID}/>: <input type="text" id="email"/> } 
                        
                    </div>  
                </div>

                <div className="form-row editField">
                    <div>
                        <label>Fecha de Creacion:</label>
                    </div>                
                     <div className="text-center">
                        {usuarios != ""? <input type="text" id="createdat" defaultValue={usuarios.ID}/>: <input type="text" id="createdat"/> } 
                        
                    </div>  
                </div>

                <div className="form-row editField">
                    <div>
                        <label>Fecha de Actualizacion:</label>
                    </div>                
                     <div className="text-center">
                        {usuarios != ""? <input type="text" id="updatedat" defaultValue={usuarios.ID}/>: <input type="text" id="updatedat"/> } 
                        
                    </div>  
                </div>

                <div className="form-row editField">
                    <div>
                        <label>Email confirmado:</label>
                    </div>                
                     <div className="text-center">
                        {usuarios != ""? <input type="text" id="confirmedemail" defaultValue={usuarios.ID}/>: <input type="text" id="confirmedemail"/> } 
                        
                    </div>  
                </div>


                {/* <label>Autor:</label><input type="text" value={usuarios.Author}/>
                <label>Género:</label><input type="text" value={usuarios.Genre}/>
                <label>ID:</label><input type="text" value={usuarios.ID}/> */}
                {usuarios != ""? 
                <button type="button" className="btn btn-warning editBtn" onClick={(e) => editUser(usuarios.ID, e)}>Editar</button> :
                <button type="button" className="btn btn-warning editBtn" onClick={(e) => addUser()}>Agregar</button>
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

async function editUser(id){
    console.log(id);

    let ID = document.getElementById('ID').value;
    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastname').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let createdat = document.getElementById('createdat').value;
    let updatedat = document.getElementById('updatedat').value;
    let confirmedemail = document.getElementById('confirmedemail').value;

    const newUser = {
        "ID": ID,
        "Name": name,
        "Lastname": lastname,
        "Username": username,
        "Email": email,
        "CreatedAt": createdat,
        "UpdatedAt": updatedat,
        "ConfirmedEmail": confirmedemail
    }
    
    console.log(newUser);

    await axios.post(`http://localhost:4000/api/User/updateUser/${id}`, newUser)
    .then(res => {
        console.log(res);
        console.log(res.data);
    })
    //setUsuarios(response.data.data.users)
    window.location.href = "/usuarios";
}

async function addUser(){

    let ID = document.getElementById('ID').value;
    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastname').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let createdat = document.getElementById('createdat').value;
    let updatedat = document.getElementById('updatedat').value;
    let confirmedemail = document.getElementById('confirmedemail').value;

    const newUser = {
        "ID": ID,
        "Name": name,
        "Lastname": lastname,
        "Username": username,
        "Email": email,
        "CreatedAt": createdat,
        "UpdatedAt": updatedat,
        "ConfirmedEmail": confirmedemail
    }
    
    console.log(newUser);

    await axios.post(`http://localhost:4000/api/user`, newUser)
    .then(res => {
        console.log(res);
        console.log(res.data);
    })
    //setUsuarios(response.data.data.users)
    window.location.href = "/usuarios";
}

export default UserForm