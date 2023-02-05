import './App.css';

function App() {
  const name = "Fran";
  const user = {
    name: "Fran",
    address: {
      street: "Calle de Prueba, 25",
      city: "Madrid"
    }
  }

  return (
    <div className="App">
      <h1>Este es el componente App</h1>
      <p className='hi'>Hola {name}</p>
      <p>Tu ciudad es {user.address.city}</p>
      <p>Dos más dos son: {2 + 2}</p>
    </div>
  );
}

export default App;
