# Video 02 - JSX

**JSX** es una syntax sugar (abreviatura sintáctica) que permite escribir HTML dentro de código JavaScript. Fue creado por Facebook como parte de su librería React para facilitar la creación de componentes de interfaz de usuario.

Con **JSX**, los componentes de React se pueden escribir como elementos HTML en lugar de escribir su representación en JavaScript. 

Por ejemplo, en lugar de escribir:

```jsx
var div = document.createElement("div");
div.className = "my-div";

var h1 = document.createElement("h1");
var text = document.createTextNode("Hello, World!");
h1.appendChild(text);

div.appendChild(h1);
```

Se puede escribir directamente:

```jsx
<div className="my-div">
  <h1>Hello, World!</h1>
</div>
```

Además **JSX** permite que interpolemos valores de variables, es decir que pintemos el valor de una variable dentro del HTML o que hagamos cálculos.

Por ejemplo.

```jsx
const name = "Fran";
const user = {
  name: "Fran",
  address: {
    street: "Calle de Prueba, 25",
    city: "Madrid"
  }
}

return (
  <div>
    <p className='hi'>Hola {name}</p>
    <p>Tu ciudad es {user.address.city}</p>
    <p>Dos más dos son: {2 + 2}</p>
  </div>
);
```
