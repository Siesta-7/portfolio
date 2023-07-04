import "./topbar.scss"

import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useContext} from "react";
import { MenuContext } from "../../Context";

function Topbar() {
  const {menuOpen, setMenuOpen} = useContext(MenuContext)


  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <GitHubIcon className="icon" /><a href="https://github.com/Siesta-7" className="logo">Siesta-7</a>
            <div className="itemContainer">
              <MailIcon className="icon"/>
              <span>burhanavci.work@gmail.com</span>
            </div>
          </div>
          <div className="right">
            <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default Topbar