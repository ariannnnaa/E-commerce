import { createContext, useContext, useReducer } from "react";
import { initial } from "../features/cartReducer";
import reducer from "../features/cartReducer";

const CartContext = createContext();

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer,initial);

    return (
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(CartContext);
}

export {AppProvider,useGlobalContext}