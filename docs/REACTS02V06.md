# Componente botón con callback

En este vídeo veremos cómo podemos personalizar un componente para que no sólo reciba textos si no que también reciba funciones para ejecutar (callbacks).

Aprenderemos también a bindear el evento de click en React para que ejecute una función.

Crearemos un componente botón que reciba una función para ejecutar en el click y el texto a mostrar:

```jsx
const showMessage = () => {
  console.log("Hola!!");
}

const showAlert = () => {
  alert("Eyyyy!!");
}

<CustomButton handleClick={showMessage} text="Púlsame!"></CustomButton>
<CustomButton handleClick={showAlert} text="Aceptar"></CustomButton>
```

El componente botón quedará así:

```jsx
import "./CustomButton.css";

const CustomButton = (props) => {
    return (
        <button onClick={props.handleClick} className="custom-button">
            {props.text}
        </button>
    );
}

export default CustomButton;
```

