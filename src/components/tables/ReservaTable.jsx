const UserTable = (props) => {
    return (
        <div className="table-responsive text-center mt-3">
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Usuario</th>
                        <th scope="col">Libro</th>
                        <th scope="col">Fecha de Inicio</th>
                        <th scope="col">Fecha de Fin</th>
                        <th scope="col"> </th>
                    </tr>
                </thead>
                <tbody>
                    {props.reservas.map(reserva => (<tr>
                        <td>{reserva.ID}</td>
                        <td>{reserva.User.Username}</td>
                        <td>{reserva.Book.Name}</td>
                        <td>{reserva.StartDate}</td>
                        <td>{reserva.EndDate}</td>
                        <td className="table-buttons">
                            <button type="button" className="btn btn-danger">Cancelar</button>
                        </td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    )

}

export default UserTable