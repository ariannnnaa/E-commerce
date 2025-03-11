import { Link } from 'react-router-dom';
import { categories, socials } from '../data/data';
import logo from '../assets/images/white-logo.svg';

const Footer = () => {
    return (
        <div className='bg-zinc-900 py-14 lg:py-20 text-gray-300 flex flex-col gap-12'>
            {/* Первая линия */}
            <div className='flex flex-col lg:flex-row justify-center items-center gap-11 border-b w-11/12 mx-auto pb-12'>
            {/* лого */}
            <div className='flex flex-col lg:flex-row items-center gap-4'>
            <img src={logo} className='w-36' alt="logo" />
            <p className='border-t border-gray-300 lg:border-t-0 lg:border-l lg:pl-3'>Brand Store</p>
            </div>
            {/* ссылки  */}
            <div className='flex flex-col lg:flex-row items-center gap-5 lg:gap-11'>
                {categories.map((item) => {
                    return <Link key={item.title} to={item.path} className='hover:text-white effect'>
                    {item.title}
                    </Link>
                })}
            </div>
            </div>

            {/* Вторая линия */}
       <div className='flex flex-col lg:flex-row-reverse justify-center items-center gap-14 lg:gap-24'>
        {/* соц.сети  */}
        <div className='flex gap-3 cursor-pointer'>
         {socials.map((item,index) => {
            return <img src={item} key={index} alt="icon" />
            })}
        </div>
    {/* права  */}
         <div className='flex flex-col items-center justify-center lg:flex-row-reverse gap-6'>
            <div>
            <span className='text-white mx-3'>Privacy Policy</span>
            <span className='text-white'>Terms of Use</span>
            </div>
            <p>Copyright © 2023 3legant. All rights reserved</p>
         </div>
       </div>
        </div>
    );
}

export default Footer;
