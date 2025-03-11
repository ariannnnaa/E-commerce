import { useEffect, useState } from 'react';
// значки 
import logo from '../assets/images/logo.svg';
import { FaAlignLeft } from "react-icons/fa"; // открыть меню
import { IoBagHandleOutline } from "react-icons/io5"; // корзина
// reducer 
import { useGlobalContext } from '../context/useCartContext';
import { GET_AMOUNT } from '../features/cartActions';
// components 
import Menu from './Menu';
import Cart from './Cart';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const {state, dispatch} = useGlobalContext();

    // кол-во продуктов в корзине 
    useEffect(() => {
     dispatch({type : GET_AMOUNT})
    }, [state.cart]);


   const handleMenu = () => {
      setMenuOpen(!menuOpen);
    }

    const handleCart = () => {
      setCartOpen(!cartOpen);
    }
 
    return (
        <div className='flex justify-between fixed bg-white w-full z-20 items-center px-3 xl:px-24 py-6 shadow-xl shadow-black'>
          <div className='flex items-center gap-3'>
           <FaAlignLeft className='size-6 md:hidden' onClick={handleMenu}/>
           <img src={logo} alt="logo" className={`effect ${menuOpen && 'translate-x-32'}`}/>         
          </div>
          {/* мобильное меню  */}
        <Menu menuOpen={menuOpen} handleMenu={handleMenu}/>
       
        {/* корзина  */}
        <div>
          <div className='relative' onClick={handleCart}>
          <IoBagHandleOutline className='size-8 lg:size-11 cursor-pointer'/>
                <span className='absolute bg-black top-6 lg:top-8 text-white text-xs opacity-70 rounded-full size-5 lg:size-7 px-[5px] lg:p-2'>
                  {state.amount}
                  </span> 
            </div>
           <Cart cartOpen={cartOpen} handleCart={handleCart}/>
        </div>
        </div>
    );
}

export default Header;
