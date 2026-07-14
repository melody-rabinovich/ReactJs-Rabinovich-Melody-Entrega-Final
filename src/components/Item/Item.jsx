import "./Item.css"
export const Item = ({name, price, description, img, category, children}) => {

    return(
        <article className="card">
            <img src={img} alt={`foto de ${name}`} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>${price}</p>
            <p>{category}</p>
            {children}
        </article>
    )
} 