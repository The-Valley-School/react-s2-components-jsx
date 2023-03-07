# Componentes y props

En este vídeo hemos trabajado con las props de los componentes de React. Las props en React son una forma de pasar datos de un componente padre a sus componentes hijos. Las props se utilizan para compartir información y para personalizar los componentes.

Cada componente React puede tener su propio conjunto de props que se definen como un objeto JavaScript y se pasan como un argumento al componente cuando se renderiza. Los componentes hijos pueden acceder a estas props mediante una propiedad especial de JavaScript llamada props.

Crearemos un componente Greeting que reciba en sus props el nombre a mostrar:

```jsx

<Greeting name="Gonzalo"></Greeting>
<Greeting name="Laura"></Greeting>
<Greeting name="Edu"></Greeting>
```

Y lo utilice para mostrar un mensaje:

```jsx
import "./Greeting.css";

const Greeting = (props) => {

    return <p className="greeting">Hola {props.name}!</p>
}

export default Greeting;
```

Haremos también un componente Profile que reciba dos props (nombre y desripción):

```jsx
<Profile nombre="Maria" descripcion="Soy programadora de webs"></Profile>
<Profile nombre="Carlos" descripcion="Soy mecánico en un taller de coches"></Profile>
```

Y lo muestre dentro de su template:

```jsx
import "./Profile.css";

const Profile = (props) => {

    return (
        <div className="profile">
            <h3 className="profile__name">{props.nombre}</h3>
            <p className="profile__description">{props.descripcion}</p>
        </div>
    );
}

export default Profile;
```
