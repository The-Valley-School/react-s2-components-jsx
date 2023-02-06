# Video 04 - JSX 3 y primer componente

En este vídeo crearemos nuestro primer componente de React.

La estrutura mínima de un componente de React sería esta:

```jsx
const SampleComponent = () => {
  return <div>Hola!</div>
}

export default SampleComponent;
```

Se trata simplemente de una función que devuelve JSX, la cual exportamos para poder hacer uso de ella fuera de este fichero. 

Para usarlo dentro de App debemos importar el componente:

```jsx
import SampleComponent from './components/SampleComponent';
```

Y pintarlo como una etiqueta HTML:

```jsx
<SampleComponent></SampleComponent>
```
