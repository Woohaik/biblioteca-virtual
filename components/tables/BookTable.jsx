const UserTable = (props) => {
    return (
        <div className="table-responsive mt-3">
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Autor</th>
                        <th scope="col">Genero</th>
                        <th scope="col">Editorial</th>
                        <th scope="col">ISBN</th>
                        <th scope="col"> </th>
                    </tr>
                </thead>
                <tbody>
                    {props.libros.map(libro => (<tr>
                        <td>{libro.Nombre}</td>
                        <td>{libro.Autor}</td>
                        <td>{libro.Genero}</td>
                        <td>{libro.ISBN}</td>

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