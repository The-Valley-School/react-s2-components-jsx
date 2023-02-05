

const ArraysComponent = () => {

  const motorcycles = ["Honda", "Yamaha", "BMW", "Ducati"];
  const cars = ["Volkswagen", "Nissan", "Mazda", "Peugeot"];

  return <div>
    <h2>Arrays:</h2>
    <p>La moto en segunda posición es {motorcycles[1]}</p>
    
    <p>Motos:</p>
    <ul>
      {motorcycles.map((motorcycle) => {
        return <li key={motorcycle}>{motorcycle}</li>
      })}
    </ul>
    
    <p>Coches:</p>
    <ol>
      {cars.map(car => <li key={car}>{car}</li>)}
    </ol>
  </div>
}

export default ArraysComponent;