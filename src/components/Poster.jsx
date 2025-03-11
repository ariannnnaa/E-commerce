import {Link }from 'react-router-dom';
import useFetch from "../utils/useFetch";
import Loading from "./Loading";

const Poster = () => {
const {data, isLoading} = useFetch('products/14');

if(isLoading || !data) return <Loading />

    return (
        <section className="my-20 py-5 flex flex-col lg:flex-row items-center gap-20 px-10 border border-gray-700">
    <img src={data.image} className="lg:w-[500px]" alt="product" />
       {/* инфо  */}
       <div className="text-gray-800">
        <h3 className="text-blue-700 uppercase text-center mb-3 text-lg">Супер акция. Скидка 35%</h3> 
       <h2 className="ml-9 sm:ml-20 xl:ml-28 uppercase">Только до конца недели.</h2> 
      <h2 className="ml-9 sm:ml-20 xl:ml-28 uppercase">Успейте приобрести.</h2>
       <p className="my-6 font-medium">{data.description}</p>
    <Link to='/sale'
    className="ml-9 border-b pb-1 border-blue-900 sm:ml-20 xl:ml-28 text-blue-700 effect hover:text-blue-300">Перейти  &#8594;</Link>
       </div>
        </section>
    );
}

export default Poster;
