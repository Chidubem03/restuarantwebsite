import { useState } from 'react';
import Logo from './Images/food_logo.png';
import {Link} from 'react-router-dom';
import Menu from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
const NavBar = () => {
    const [click, setClick]=useState(false);
    const [open, setOpen] = useState(false);
    const handleClick = ()=>{
        setClick(!click);
        setOpen(!open);
    }
    return (  
        <div className="navbar">
            <div className="leftside" id={open ? "open" : "close"}>
                <img src={Logo} alt='Logo'/>
                <div className="hiddenLinks" >
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/contact">Contact</Link>
                </div>
            </div>
            <div className="rightside">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/contact">Contact</Link>
                <button onClick={handleClick}>
                    {click ? <Close/> : <Menu/>}
                </button>
            </div>
        </div>
    );
}
 
export default NavBar;