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

                    </tr>
                </thead>
                <tbody>
                    {props.usuarios.map(usuario => (<tr>
                        <td>{usuario.Name}</td>
                        <td>{usuario.LastName}</td>
                        <td>{usuario.Username}</td>
                        <td>{usuario.Email}</td>
                        <td>{usuario.ConfirmedEmail.toString()}</td>

                    </tr>))}
                </tbody>
            </table>
        </div>
    )
}

export default UserTable;