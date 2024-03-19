import React ,{useState} from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom';
import { GiBoxingGlove } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

export default function Navbar() {
    const[active, setActive]=useState('navBar')
    const showNav =()=>{
        setActive('navBar activeNavbar')
    }
    const removeNav =()=>{
        setActive('navBar')
    }

    const [transparent,setTransparent]=useState('header')
    const addBg = ()=>{
        if(window.scrollY >= 10){
            setTransparent('header activeHeader')
        }
        else{
            setTransparent('header')
        }
    }
    window.addEventListener('scroll',addBg)
  return (
    <div>
      <section className='navbarSection'>
        <div className={transparent}>
            <div className='logoDiv'>
                <a href="#" className='logo'>
                    <h2 className='flex'><GiBoxingGlove className='icon'/>Boxing</h2>
                </a>
            </div>
            <div className={active}>
                <ul className='navLists flex'>
                    <li className='navItem'>
                    <Link to='/' className='navLink'>Home</Link>
                    </li>
                    <li className='navItem'>
                    <Link to='/Ranking' className='navLink'>Ranking</Link>
                    </li>
                    <li className='navItem'>
                    <Link to='/Athletes' className='navLink'>Athletes</Link>
                    </li>
                    <li className='navItem'>
                    <Link to='/CardHolder' className='navLink'>Events</Link>
                    </li>
                    <li className='navItem'>
                    <Link to='/Ticket' className='navLink'>Tickets</Link>
                    </li>
                    <li className='navItem'>
                    <Link to='/Howtowatch' className='navLink'>Watch</Link>
                    </li>
                    <div className='headerBtns flex'>
                        <button className='btn loginBtn'>
                            <Link to='/Login' className='navLink'>Login</Link>
                        </button>
                        <button className='btn '>
                            <Link to='/SignUp' className='navLink'>Sign Up</Link>
                        </button>
                    </div>
                    
                </ul>
                <div onClick={removeNav} className='closeNavbar'>
                    <AiFillCloseCircle className='icon'/>
                </div>
            </div>
            <div onClick={showNav} className='toggleNavbar'>
            <TbGridDots  className='icon' style={{color: "white"}}/>
            </div>
        </div>
      </section>
    </div>
  )
}
