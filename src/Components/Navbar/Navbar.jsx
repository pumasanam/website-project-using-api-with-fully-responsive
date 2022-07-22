import React, {useState} from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const [icon, setIcon] = useState(false);

    const iconSetFun =()=>{
        setIcon(!icon);
    }
  return (
    <>
        <div className="navbar">
                <h1><Link to="/card" className='logo'>DIT PROJECT</Link></h1>

                <nav>
                    <ul className={icon ? "nav_ul active":"nav_ul"}>
                        <li><Link className="nav_link" to="/">Home</Link></li>
                        <li><Link className="nav_link" to="/createData">Create A Data</Link></li>
                        <li><Link className="nav_link" to="/admin">Admin</Link></li>
                    </ul>
                </nav>

                <div className="icons" onClick={iconSetFun}>
                    {icon ?<CloseIcon style={{color:"white", fontSize:"30px", cursor:"pointer"}}/>: <MenuIcon style={{color:"white", fontSize:"30px", cursor:"pointer"}}/>}
                        
                        
                </div>
        </div>
    </>
  );
};

export default Navbar;
