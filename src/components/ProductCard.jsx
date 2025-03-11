import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";// значок звездочки
// reducer 
import { useGlobalContext } from '../context/useCartContext'
import { ADD } from "../features/cartActions";

const ProductCard = (product) => {
    const { id, title, image, price, category, rating } = product;
    const { state, dispatch } = useGlobalContext();
    //  наличие продукта в корзине 
    const [isAdded, setIsAdded] = useState(false);
    useEffect(() => {
        const current = state.cart.find((item) => item.id === id);
        if (current) {
            setIsAdded(true);
        }else{
            setIsAdded(false);
        }
    }, [state.cart]);

  
    const addToCart = () => {
        if (!isAdded) {
            setIsAdded(!isAdded);
            dispatch({ type: ADD, payload: { product } })
        }
        return;
    }

    return (
        <div className="relative group cursor-pointer w-56 hover:border p-5">
            <img src={image} className="size-48 shadow-md mb-4 group-hover:opacity" alt="product image" />
            {/* добавление в корзину  */}
            <div className="absolute xl:opacity-0 effect group-hover:opacity-100 top-36  left-5">
                <button 
                className={`w-40 text-center rounded-lg effect p-2 hover:-translate-y-2 effect ${!isAdded ? 'bg-black text-white' 
                    : 'text-black bg-gray-100 font-bold border'}`}
                    onClick={addToCart}>
                    {!isAdded ? 'В корзину' : 'Уже в корзине'}
                </button>
            </div>
            {/* информация о товаре */}
            <div className="flex flex-col gap-1">
                <h3>{title}</h3>
                <div className="flex items-center gap-2">
                    <FaStar className="text-orange-600" />
                    {rating.rate}
                </div>
                <p className="text-gray-500">{category}</p>
                <i className="font-medium">{price} $</i>
                <Link to={`/${id}`}
                    className="mt-2 underline effect hover:translate-x-2">Подробнее</Link>
            </div>
        </div>
    );
}

export default ProductCard;
