import './App.css';
import Alunno from './Alunno.js';


function App() {

  const alunni = [
    {
      id: 1,
      nome: "Tommaso",
      cognome: "Fortuna"
    },
    {
      id: 2,
      nome: "Diego",
      cognome: "Buonomo"
    },
    {
      id: 3,
      nome: "Aser Abdul Khamid",
      cognome: "Ablahar"
    }
  ];

  return (
    <div>
      <h1 className='center'>Alunni</h1>
      <table className='center'>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Cognome</th>
          <th>Options</th>
        </tr>
      {
        alunni.map((a) => {
          return <Alunno id={a.id} nome={a.nome} cognome={a.cognome}></Alunno>;
        })
      }
      </table>
    </div>
  );
}

export default App;
