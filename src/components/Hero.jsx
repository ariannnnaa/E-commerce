import { useState, useEffect } from 'react';
import banner from '../assets/images/banner.jpg'; // приветствующая картинка

const Hero = () => {
    const [show, setShow] = useState(false);

    // появление анимации 
    useEffect(() => {
        const id = setTimeout(() => {
            setShow(true);
        }, 500);
        return () => clearTimeout(id);

    }, []);

    const handleScroll = () => {
        window.scrollTo({
            top: 1000,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <section className='min-h-[100vh] pt-36 pb-7 font-thin bg-black flex flex-col lg:flex-row  lg:justify-between items-center gap-6 xl:pr-36'>
            <div className={`text-white flex flex-col gap-1 -translate-x-96 opacity-0 animation ${show && 'translate-x-2 lg:translate-x-32 xl:translate-x-52 opacity-100'}`}>
                <h1 className='font-bold text-gray-100'>
                    Низкие цены
                    <br />
                    Высокое качество
                    <br />
                    Большой выбор
                </h1>
                <p className='w-[300px] mb-8 mt-2 sm:w-[400px]'>
                    Здесь Вы найдете ассортимент на любой вкус.
                    Сеть магазинов работает в режиме онлайн.
                    Доставка к прямо Вашему дому.
                    Быстро и надежно
                </p>
                <button className='bg-white text-black rounded-xl p-2 w-36 border effect hover:underline'
                    onClick={handleScroll}>Ознакомиться</button>
            </div>
            <img src={banner} className={`w-[500px] rounded-full opacity-0 animation ${show && 'opacity-100'}`} alt="banner" />
        </section>
    );
}

export default Hero;
