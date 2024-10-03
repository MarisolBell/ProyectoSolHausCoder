import "./ItemListContainer.css"

const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <div className="wrapper">
            <h3 className="greeting-title">{greeting}</h3>
        </div>
    </div>
  )
}

export default ItemListContainer