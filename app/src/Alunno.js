import { useState } from "react";

function Alunno({id, nome, cognome}) {

    return (
        <tr>
            <td>{id}</td>
            <td>{nome}</td>
            <td>{cognome}</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
    )
}

export default Alunno;