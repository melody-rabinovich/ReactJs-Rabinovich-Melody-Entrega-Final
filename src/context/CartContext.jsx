
import { createContext, useContext, useState } from "react"
import {useNavigate} from "react-router-dom"

// creo el contexto
const CartContext = createContext();

//custom hook
export const useCart = () => {
    const context = useContext(CartContext);

    if(!context){
        throw new Error("useCart debe ser utilizado por con CartProvider")
    }

    return context;
}

// proveedor
export const CartProvider = ({children}) =>{

    // estado del carrito, que empieza como un carrito vacío
    const [cart, setCart] = useState([]);

    const navigate = useNavigate();

    // una función para chequear si un elemento ya está en el carrito
    const isInCart = (item) => {
        const inCart = cart.some((e) => e.id == item.id);
        return inCart; 
    }

    // función para vaciar el carrito
    const clearCart = () =>{
        setCart([]);
    }

    // función agregar al carrito
    const addItem = (item) =>{
        if(isInCart(item)){
            alert("el producto ya existe en el carrito")
            return;
            // me imagino que idealmente, en vez de hacer esto, usaría un contador para agregar una nueva unidad del producto
        }

        setCart([...cart, item]);
        alert("producto agregado al carrito")
    }

    // función borrar del carrito
    const removeItem = (id) =>{
        // en vez de borrar el id, actualizo el cart, dejando todos los otros elementos
        const updatedCart = cart.filter(element => element.id != id);
        setCart(updatedCart);
        alert("elemento eliminado");
    }

    // función calcular total de items
    const getTotalItems = () =>{
        return cart.length;
        // si yo permitiera que se agreguen más unidades del mismo producto, la programación sería distinta
    }

    // función calcular total a pagar
    const getCartTotal = () =>{
        return cart.reduce((acc, element) => acc + element.price, 0); 
        // acá también cambiaría si tuviera que sumarle el precio de cada unidad
    } 

    // función checkout
    const checkout = () =>{
        alert ("su compra ha sido realizada");
        clearCart();
        navigate("/");
    }

    // todas las funciones se agregan al values, para que se "compartan"
    const values = {cart, clearCart, addItem, removeItem, getTotalItems, getCartTotal, checkout}
    return <CartContext.Provider value={values}>
        {children}
    </CartContext.Provider>
}