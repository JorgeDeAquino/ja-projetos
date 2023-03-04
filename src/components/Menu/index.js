import { Link, useLocation } from 'react-router-dom'
import Styles from './Menu.module.css'

export default function Menu() {
    const localizacao = useLocation();

    console.log(localizacao);

  return (
    <header>
        <nav className={Styles.navegacao}>
            <Link className={Styles.link} to="/" >
                Inicio
            </Link>
            <Link className={Styles.link} to="/sobremim" >
                Sobre Mim
            </Link>
        </nav>
    </header>
  )
}
