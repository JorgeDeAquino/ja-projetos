import MenuLink from '../MenuLink'
import Styles from './Menu.module.css'

export default function Menu() {
  return (
    <header>
        <nav className={Styles.navegacao}>
            <MenuLink to="/" >
                Inicio
            </MenuLink>
            <MenuLink to="/sobremim" >
                Sobre Mim
            </MenuLink>
        </nav>
    </header>
  )
}
