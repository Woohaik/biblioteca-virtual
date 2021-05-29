import { useState, useEffect } from "react";
import UserTable from "./../components/tables/UserTable"
import { axiosBaseURL } from "./../config/axios.ts";

const usuarios = () => {
    const [usuarios, setUsuarios] = useState([])
    useEffect(async () => {
        let response = await axiosBaseURL.get("/user")
        console.log(response);
        setUsuarios(response.data.data.users)
    }, [])
    return (
        <div className="mt-5">
            <h1 className="mt-4">Todos Usuarios</h1>
            <UserTable usuarios={usuarios} />
        </div>
    )
}

export default usuarios