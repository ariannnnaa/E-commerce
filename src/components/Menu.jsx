import { NavLink } from 'react-router-dom';
import {categories} from '../data/data';
import { FaTimes } from "react-icons/fa";     // закрыть меню

const Menu = ({ menuOpen,handleMenu }) => {
 
    return (
        <nav className={`fixed top-0 h-screen -left-[170px] w-[170px] effect ${menuOpen && 'translate-x-[170px]'}
         flex flex-col bg-black
        md:static md:flex-row md:h-auto md:w-auto md:bg-transparent md:gap-5 lg:gap-14 lg:font-semibold`}>
         <FaTimes onClick={handleMenu} className='size-6 my-6 ml-3 text-white md:hidden'/>
          {categories.map((item,index) => {
            return <NavLink key={index} to={item.path} 
            className={({isActive})=>(isActive ? 'text-gray-500 md:underline text-center py-5' :
          'text-center text-white border-y border-dotted border-gray-600 py-5 md:text-black md:border-0'
            )}>
            {item.title}
            </NavLink>
          })}
        </nav>
    );
}

export default Menu;
