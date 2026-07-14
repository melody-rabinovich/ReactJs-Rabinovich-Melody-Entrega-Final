import "./Footer.css";

import {Link} from 'react-router-dom'


export const Footer = () => {
    return (
        <footer>
            <p>Sitio desarrollado por Melody Rabinovich</p>
            <nav>
                <ul>
                    <li> <Link to={""}> Whatsapp </Link> </li>
                    <li> <Link to={""}> Instagram </Link></li>
                </ul>
            </nav>
        </footer>
    );
}