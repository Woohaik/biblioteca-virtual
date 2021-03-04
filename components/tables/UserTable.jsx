const UserTable = (props) => {
    return (
        <div className="table-responsive mt-3">
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

export default UserTable