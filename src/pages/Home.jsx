import {Link} from 'react-router-dom';
import useFetch from '../utils/useFetch';
import { brands, categories} from '../data/data';
// components 
import Hero from '../components/Hero';
import Loading from '../components/Loading';
import ProductContainer from '../components/ProductContainer';
import Poster from '../components/Poster';
import AboutUs from '../components/AboutUs'

const Home = () => {
  const {data, isLoading} = useFetch('products')
  const shops = categories.filter((item) => item.path !== '/') ;
  
  if(isLoading || !data) return <Loading />;

  return (
    <div>
      <Hero />
      {/* Брендовые значки    */}
      <div className='flex flex-wrap justify-center gap-2 lg:gap-10 my-8'>
        {brands.map((item, index) => {
          return <img src={item} className='w-[80px] sm:w-[140px]' key={index} alt="brand" />
        })}
      </div>
       {/* Все товары  */}
       <h2 className='mt-16'>Наша продукция</h2>
       <ProductContainer items={data} cards={5} />
     {/* Категории магазинов  */}
     <h2 className='mt-24'>Сеть наших магазинов</h2>
       <div className='mt-11 grid grid-cols-1 gap-7 md:gap-16 sm:grid-cols-2 justify-center justify-items-center'>
          {shops.map((item) => {
            return <div key={item.title}
            className='group cursor-pointer'>
           <img src={item.img.type} className='w-[300px] group-hover:scale-105 effect lg:w-[450px] xl:w-[600px]' alt="category img" />
           <div className='flex flex-col gap-6 items-center mt-5'>
             <h3 className='text-gray-800 font-semibold text-xl'>{item.title}</h3>
             <Link to={item.path} 
             className='border-b border-black effect hover:rotate-6'>
              Посмотреть &#8594;
              </Link>
           </div>
            </div>
          })}
       </div>
     {/* Акция */}
     <Poster />
     {/* О нас  */}
   <AboutUs />
    </div>
  );
}

export default Home;
