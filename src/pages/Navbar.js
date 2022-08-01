import React, { useState }  from 'react'
import { Link, NavLink} from 'react-router-dom';
import { DetailsItem, navItems } from './NavItems';
import "./Navbar.css";
import Dropdown from './Dropdown';

const Navbar = () => {
  const [id, setId]= useState('')
  const [dropdown, setDropdown]= useState(false)
  // const [id, setId]=useState(navItems)
  // console.log(id, 'id')
  
  return (
    <div>
      <nav className='navbar'>
        <ul className='nav-items'>
          {navItems.map((item)=>{
            console.log(item.drop)
              return(
                <li  className={item.cName} onClick={() => setId(item.id)} onMouseEnter={()=> setDropdown(true)} onMouseLeave={()=> setDropdown(false)}>
                  <NavLink activeClassName="active" to={item.path}>{item.title}</NavLink>
                  {id===item.id && dropdown && <Dropdown title={item.sub}/>}
                </li>
              )
            }  
          )}
        
       
        </ul>
      </nav>
    </div>
  )
}

export default Navbar