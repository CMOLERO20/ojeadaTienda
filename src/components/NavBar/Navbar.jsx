import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

function Navbar(){

    return (
        <header className=""> 
        <nav className="">
            <div className="">
           <div><h3>Ojeada Tienda</h3></div>
            
            <div className="">
                <ul>
                    <li>
                        <a href="">Productos</a>
                    </li>
                    <li>
                        <a href="">Envios</a>
                    </li>
                    <li>
                        <a href="">Contacto</a>
                    </li>
                    <li className="cart">
                        <CartWidget />
                    </li>
                </ul>
            </div>
            
            
            </div>

        </nav>
        </header>
    )
}

export default Navbar