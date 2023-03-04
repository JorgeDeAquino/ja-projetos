import Styles from './Menu.module.css'

export default function Menu() {
  return (
    <header>
        <nav className={Styles.navegacao}>
            <a className={Styles.link} href="/" > Inicio </a>
            <a className={Styles.link} href="/sobremim" > Sobre Mim</a>
        </nav>
    </header>
  )
}
