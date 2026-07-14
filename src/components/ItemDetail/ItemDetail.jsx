import "./ItemDetail.css"
import {Item} from"../Item/Item.jsx"
import {useCart} from "../../context/CartContext.jsx"

export const ItemDetail = ({item}) => {

    const {addItem} = useCart()

    return( 
        <Item {...item}>
            <button className="btn-primary" onClick={() => addItem(item)}>
                Argegar al carrito
            </button>
        </Item>
    )
}