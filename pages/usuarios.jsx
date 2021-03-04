import { useState, useEffect } from "react";
import axios from "axios"
import UserTable from "./../components/tables/UserTable"

const usuarios = () => {
    const [usuarios, setUsuarios] = useState([])

    useEffect(async () => {
        let response = await axios.get("http://localhost:4000/api/user")
        console.log(response);
        setUsuarios(response.data.data.users)
    }, [])

    return (
        <div className="container mt-5">
            <h1 className="mt-4">Todos Usuarios <button type="button" className="btn btn-primary ml-auto">Agregar</button></h1>
            <UserTable usuarios={usuarios} />

        </div>
    )

}

export default usuarios