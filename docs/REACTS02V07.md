# Video 07 - Prop para variar el template

En este vídeo haremos uso de una prop para personalizar el componente Greeting, de manera que si recibe esa prop renderizará un template u otro:

```jsx
import "./Greeting.css";

const Greeting = (props) => {

  return (
      props.variant === "cool" ?
        <p className="greeting cool">Hola <strong>{props.name}!</strong></p> :
        <p className="greeting">Hola {props.name}!</p>
  );
}

export default Greeting;
```

Desde nuestro componente App haremos uso de este componente pudiendo pasarle la variante cool o no, según nos interese:

```jsx
<Greeting name="Gonzalo" variant="cool"></Greeting>
<Greeting name="Laura"></Greeting>
```

Recuerda que el código que hemos visto durante los vídeos puedes encontrarlo en el siguiente repositorio:

<https://github.com/The-Valley-School/react-s2-components-jsx>
