import { useContext } from "react"
import { MenuContext } from "../../Context.jsx"
import "./menu.scss"

export const Menu= () => {

const {menuOpen, setMenuOpen} = useContext(MenuContext)

  return (
    <div className={'menu ' + (menuOpen && 'active')} >
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#about">About</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#portfolio">Projects</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu