import React, {useState} from 'react'
import { DetailsItem } from './NavItems';
import { Link } from "react-router-dom";
import "./Dropdown.css";

const Dropdown = ({title}) => {
  // const [click, setClick]= useState(false)
  // console.log(title, 'yto')

  return (
    <div>
        <ul className={'submenu'} >
        
          {title.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={item.cName}
                >
                  {item.title}
                </Link>
              </li>
            );
          })
        }
      
      </ul>
    </div>
  )
}

export default Dropdown