import "./Greeting.css";

const Greeting = (props) => {

    return <p className="greeting">Hola {props.name}!</p>
}

export default Greeting;