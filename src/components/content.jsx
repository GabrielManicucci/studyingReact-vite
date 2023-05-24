import styles from './content.module.css'

const products = [
  {title: 'Apple', isFruit: true, id: 1},
  {title: 'Smartphone', isFruit: false, id: 2},
  {title: 'Notebook', isFruit: false, id: 3}
]

// function buttonClick() {
//   alert('you clicked me')
// }

export default function Content({number, setNumber}) {
  /**
   * hook
   - Só é permitido usar hooks no topo de um componente
   */
  

  const listItems = products.map( product => 
      <li 
      // no React, cada item de uma lista deve ter um atributo identificador "key" para usos no react posteriormente
      key={product.id}
      style={{
        color: product.isFruit ? "blue" : 'inherit'
      }}
      >
        {product.title}
      </li>
    )

  return (
    <div className={styles.content}>
      <ul>{listItems}</ul>
      <button 
      // No react, não se chama a função como por exemplo "buttonClick()", quem chama a função é o react, portanto é necessário somente transmiti-la
      onClick={setNumber}
      className={styles.button}
      >Add: {number}</button>
    </div>
  )
}