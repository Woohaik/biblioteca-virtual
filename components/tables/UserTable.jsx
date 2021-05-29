import axios from "axios"
import { useState } from "react";
import { useRouter } from 'next/router'

const UserTable = (props) => {
    return (
        <div className="table-responsive text-center mt-3">
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellidos</th>
                        <th scope="col">Username</th>
                        <th scope="col">Correo electrónico</th>
                        <th scope="col">Email Validated</th>
                        <th scope="col"> </th>
                    </tr>
                </thead>
                <tbody>
                    {props.usuarios.map(usuario => (<tr>
                        <td>{usuario.Name}</td>
                        <td>{usuario.LastName}</td>
                        <td>{usuario.Username}</td>
                        <td>{usuario.Email}</td>
                        <td>{usuario.ConfirmedEmail.toString()}</td>
                        <td className="table-buttons">
                            <button type="button" className="btn btn-warning">Editar</button>
                            <button type="button" className="btn btn-danger">Eliminar</button>
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
    //window.location.href = `/updateUsuarios`;
    const router = useRouter()
    router.push('/test')
}

async function deleteUser(idUser){

    if(confirm ('¿Está seguro que desea eliminar el usuario?')) {
        console.log("//they clicked ok");
        await axios.delete(`http://localhost:4000/api/user/${idUser}`)
        .then(res => {
            console.log(res);
            console.log(res.data.data.users);
            window.location.href = "/usuarios";
        })
      }
      else {
        console.log("//they clicked cancel");
      }
}

export default UserTable