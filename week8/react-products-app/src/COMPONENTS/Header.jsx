import React from 'react'
import {NavLink} from 'react-router'

function Header() {
  return (
    <div className='flex justify-between items-center px-10 bg-gray-400'>
        <img src="https://tse4.mm.bing.net/th/id/OIP.IhBxoU0vKr2Cu4gtDbOqIgHaFU?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" width="50px" className='py-2 rounded-[50%]'/>
        <nav>
        <ul className='flex gap-10 text-4xl'>
            <li>
                <NavLink to="/" className={({isActive})=>isActive?"text-orange-400 bg-blue-400":""}>Home</NavLink>
            </li>
            <li>
                <NavLink to="products"   className={({isActive})=>isActive?"text-orange-400 bg-blue-400":""}>ProductsList</NavLink>
            </li>
            <li>
                <NavLink to="contact"   className={({isActive})=>isActive?"text-orange-400 bg-blue-400":""}>Contact</NavLink>
            </li>
        </ul>
        </nav>
    </div>
  )
}

export default Header