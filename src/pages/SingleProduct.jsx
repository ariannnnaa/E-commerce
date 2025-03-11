import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useFetch from "../utils/useFetch";
import { categories } from "../data/data";
import { FaStar } from "react-icons/fa"; //значок звездочки
// reducer 
import { useGlobalContext } from "../context/useCartContext";
import { ADD } from "../features/cartActions";
// componenets
import Loading from "../components/Loading";
import Poster from "../components/Poster";
import AboutUs from "../components/AboutUs";

const SingleProduct = () => {
    const { productId } = useParams();
    const { data, isLoading } = useFetch(`products/${productId}`);
    const {state, dispatch} = useGlobalContext();
// наличие продукта в корзине 
const [isAdded,setIsAdded] = useState(false);
useEffect(() => {
    const current = state.cart.find((item) => item.id == productId);
    if(current){
    setIsAdded(true);
}else{
    setIsAdded(false);
}
},[state.cart]);



const addToCart = () => {
    if(!isAdded){
        setIsAdded(!isAdded);
        dispatch({type:ADD, payload: {product: data}})
    }
}

    if (isLoading || !data) return <Loading />
    const category = categories.find((item) => item.category == data.category);

    return (
        <div className="pt-36">
            {/* Карта товара  */}
            <section className="md:my-20 flex flex-col md:flex-row gap-16 items-center md:items-start px-6">
                <img src={data.image} className="size-72 md:w-1/4 rounded-md shadow-xl shadow-black" alt="product" />
                {/* характеристика */}
                <div className="text-gray-800 2xl:px-24">
                    <h2>{data.title}</h2>
                    <p className="my-6">{data.description}</p>
                    <p className="mb-3 text-gray-500 font-semibold">Стоимость: <i className="text-gray-700">{data.price} $</i></p>
                    <p className="text-gray-500 font-semibold">Категория: <i className="text-gray-700">{category.title}</i></p>
                    <div className="flex items-center gap-4 m-3">
                        <FaStar className="text-orange-600" />
                        {data.rating.rate}
                    </div>
                    <button className={`rounded-md border p-2 font-semibold ${isAdded && 'bg-black text-white'}`}
                    onClick={addToCart}>
                        {!isAdded ? 'Добавить в корзину' : 'Уже в корзине'}
                    </button>
                </div>
            </section>
            {/* О нас  */}
            <AboutUs />
            {/* Акция  */}
            <Poster />
        </div>
    );
}

export default SingleProduct;
