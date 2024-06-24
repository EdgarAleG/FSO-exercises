const Hello = (props) => {
    return (
      <>
      <hr />
        <h2>Esto es un componente dentro de otro</h2>
        <h3>La referencia pasada es {props.name}</h3>
        <h4>La edad obtenida es {props.edad}</h4>
        <hr />
      </>
    )
  }

export default Hello;