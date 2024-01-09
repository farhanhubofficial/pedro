import React,{ useState } from 'react'
import Logo from '../assets/pedro.jpg';
import {Link} from "react-router-dom"
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'

export default function Navbar() {
  const[openLinks, setOpenLinks]=useState(false) ;
  return (
    <div className='navbar'>
        <div className='leftSide'id={openLinks? "open":"close"}>
            <img src={Logo}/>
            <div className='hiddenLinks'>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contacts</Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contacts</Link>
            <button>
              <ReorderIcon/>
            </button>
        </div>

    </div>
  )
}
