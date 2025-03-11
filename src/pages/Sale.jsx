import { Link } from "react-router-dom";
import useFetch from "../utils/useFetch";
import Loading from "../components/Loading";

const Sale = () => {
    const {data, isLoading} = useFetch('products/14');
    
    if(isLoading || !data)return <Loading />

    return (
        <div className="pt-36 text-center mb-16">
            <h2 className="uppercase text-blue-700 mb-2">Супер акция. скидка 35%</h2>
             <h3 className="uppercase text-blue-500">Поторопись. Успей до конца недели</h3>
         {/* товар  */}
         <div className="mt-8 flex flex-col items-center font-semibold gap-6 md:px-16 xl:px-28 text-gray-700">
            <img src={data.image} alt="sale product" />
            <h3 className="font-extrabold">{data.title}</h3>
             <p>{data.description}</p>
             <Link to={`/${data.id}`}
             className="text-blue-700 effect hover:translate-x-4 hover:text-blue-800">О товаре &#8594;</Link>
         </div>
        </div>
    );
}

export default Sale;
