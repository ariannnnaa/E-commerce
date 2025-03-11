import setLocalStorage from "../utils/setLocalStorage";
import { ADD, REMOVE, PRODUCT_QUANTITY, RESET, GET_AMOUNT, GET_TOTAL } from "./cartActions";


const local = JSON.parse(localStorage.getItem('commerce'));

export const initial = {
    cart: local?.cart || [],
    amount: 0,
    total: 0,
}

const reducer = (state, action) => {

    switch(action.type){
        case ADD: 
       let product = action.payload.product;
        product = {...product, amount: 1}

        setLocalStorage({...state, cart: [...state.cart, product]})
       return {
        ...state,
        cart: [...state.cart,product]
       }

       case REMOVE:
       const filtered = state.cart.filter((item) => item.id !== action.payload.id);
      
      setLocalStorage({...state, cart: filtered})
       return {
        ...state, 
        cart: filtered,
       }

       case PRODUCT_QUANTITY:
        const newCart = state.cart.map((item) => {
            if(item.id === action.payload.id){
                // прибавить или отнять 
                if(action.payload.operation === 'plus'){
                    item.amount++;
                }else{
                    item.amount--;
                }
            }
            return item;
        })
        setLocalStorage({...state, cart: newCart})
        return {
            ...state,
            cart: newCart
        }

        case RESET:
            localStorage.removeItem('commerce');
            return {
                cart: [],
                amount:0,
                total: 0,
            }

            case GET_AMOUNT:
          const quantity = state.cart.reduce((totalAmount, item) => totalAmount += item.amount, 0);
          setLocalStorage({...state, amount: quantity});
          return {
            ...state,
            amount: quantity
          }

          case GET_TOTAL:
            const total = state.cart.reduce((sum,item) => sum += item.amount * item.price, 0);
           setLocalStorage({...state, total})
            return {
                ...state,
                total
            }
        }
}

export default reducer;