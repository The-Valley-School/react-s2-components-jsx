# JSX 2

En este vídeo hemos visto más ejemplos de JSX, en concreto cómo podemos llamar a funciones en JSX:

```jsx
<p>La dirección es: {toUpperCase(user.address.street)}</p>
```

Cómo podemos recorrer y pintar los elementos de un array:

```jsx
<ul>
  {motorcycles.map((motorcycle) => {
    return <li>{motorcycle}</li>
  })}
</ul>
```

O cómo podemos hacer condicionales:

```jsx
{userIsLogged ? <p>El usuario está logado.</p> : <p>No está logado.</p>}

<p>El usuario {userIsLogged ? "SI" : "NO"} está logado</p>
```
