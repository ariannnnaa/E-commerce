import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa"; //значок крестика
// reducer 
import { useGlobalContext } from '../context/useCartContext'
import { GET_TOTAL, PRODUCT_QUANTITY, REMOVE, RESET } from "../features/cartActions";

const Cart = ({ cartOpen, handleCart }) => {
    const { state, dispatch } = useGlobalContext();


    const handleMinus = (id, amount) => {
        if (amount === 1) {
            dispatch({ type: REMOVE, payload: { id } });
            return
        }
        dispatch({ type: PRODUCT_QUANTITY, payload: { id, operation: 'minus' } })
    }

    return (
        <div className={`fixed top-0 h-screen -right-[280px] w-[280px]  shadow-lg shadow-black effect
        bg-white text-gray-700 md:w-[400px] md:-right-[400px] 
        ${cartOpen && '-translate-x-[280px] md:-translate-x-[400px]'}`}>
            <FaTimes onClick={handleCart} className='size-6 float-right my-5 cursor-pointer' />
            <h2 className="border-b mt-10 xl:ml-12">Ваша корзина</h2>
            <div>
                {!state.cart.length ? (
                    <>
                        {/* //   Корзина пуста : */}
                        <p className="text-center text-slate-900 font-bold mt-32">
                            Пусто. Вы можете добавить сюда товары, для дальнейших покупок
                        </p>
                    </>
                ) :
                    //   Корзина наполнена содержимым :
                    (
                        <>
                            {/* товары */}
                            <div className="mt-14 font-semibold overflow-y-scroll h-[40vh] flex flex-col gap-11 border-b-2 border-gray-400">
                                {state.cart.map((item) => {
                                    return <div key={item.id}
                                        className="flex justify-between px-1 md:px-2 text-black border-b pb-2 gap-2 hover:bg-slate-100">
                                        <img src={item.image} className="size-12" alt="product" />
                                        <div className="flex flex-col gap-6">
                                            <Link to={`/${item.id}`}
                                                className="text-sm w-48 md:w-64">
                                                {item.title}
                                            </Link>
                                            <div className="flex justify-between">
                                                <div className="border-2 border-gray-400 rounded-sm px-2">
                                                    <button onClick={() => handleMinus(item.id, item.amount)}>
                                                        -
                                                    </button>
                                                    <i className="px-4">{item.amount}</i>
                                                    <button 
                                                    onClick={() => dispatch({ type: PRODUCT_QUANTITY, payload: { id: item.id, operation: 'plus' } })}>
                                                        +
                                                    </button>
                                                </div>
                                                <i>{item.price}$</i>
                                            </div>
                                        </div>
                                        <FaTimes className="text-gray-600 cursor-pointer"
                                         onClick={() => dispatch({ type: REMOVE, payload: { id: item.id } })} />
                                    </div>
                                })}
                            </div>
                            {/* сумма */}
                            <div className="flex flex-col items-center gap-5 mt-5">
                                <div className="flex justify-between border-t w-4/5 pt-3">
                                    <p>Сумма:</p>
                                    <i>{state.total.toFixed(2)}</i>
                                </div>
                                <button onClick={() => dispatch({ type: GET_TOTAL })}
                                    className="w-4/5 bg-black py-2 rounded-md text-white effect hover:bg-gray-600">Посчитать</button>
                                <button onClick={() => dispatch({ type: RESET })}
                                    className="w-4/5 bg-gray-800 py-2 rounded-md text-white effect hover:text-gray-300">Очистить корзину</button>
                            </div>
                        </>
                    )}
            </div>
        </div >
    );
}

export default Cart;
