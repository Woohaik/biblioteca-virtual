import { useState, useEffect } from "react";
import axios from "axios"
import UserForm from "../components/forms/UserForm";

const updateUsuarios = () => {
    const [usuarios, setUsuarios] = useState([])

    useEffect(async () => {
        let idUser = sessionStorage.getItem("id");
        console.log("El ID: "+idUser);
        // getByID(idUser);

        await axios.get(`http://localhost:4000/api/user/${idUser}`)
        .then(res => {
            console.log(res);
            console.log(res.data.data.users);
            setUsuarios(res.data.data.users);
        })

        // let response = await axios.get(`http://localhost:4000/api/user/${idUser}`)
        // console.log(response.data.data.users);
        // setUsuarios(response.data.data.users);


    }, [])

    return (
        <div className="container my-4">
            <h1 className="mt-4">Usuario: {usuarios.Name}</h1>
            <UserForm usuarios={usuarios} />
        </div>
    )

}

async function edit(id){
    console.log(id);

    let ID = document.getElementById('ID').value;
    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastname').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let createdat = document.getElementById('createdat').value;
    let updatedat = document.getElementById('updatedat').value;
    let confirmedemail = document.getElementById('confirmedemail').value;

    let newUser = {
        ID: ID,
        Name: name,
        Lastname: lastname,
        Username: username,
        Email: email,
        CreatedAt: createdat,
        UpdatedAt: updatedat,
        ConfirmedEmail: confirmedemail
    }
}

export default updateUsuarios