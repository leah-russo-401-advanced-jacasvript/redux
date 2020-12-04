

const initialState = {
  cart: [],
   total: 0
  }
  
   export const selectCartItems = (stuff) => {
    return {
      type: 'SELECT_CART_ITEMS',
      payload: stuff
    }
  }

  export const addToCart = (stuff) => {
    return {
      type: 'ADD_TO_CART',
      payload: stuff
    }
  }

  export const removeFromCart = (stuff) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: stuff
    }
  }
  
  const cartReducer = (state = initialState, action) => {
    let {payload,type} = action
    switch(type){
      case 'SELECT_CART_ITEMS':
        return state;
      case 'ADD_TO_CART':
        let cart = state.cart;
        if(cart.includes(payload)){

          for(let i = 0; i< cart.length; i++) {
            if(cart[i]==payload && cart[i].inventoryCount > 0){
              cart[i].count++;
              return {total: state.total + 1, cart: [...cart]}
            } else { return {...state} }
          } 
        } else if(!cart.includes(payload)) {
          payload.count = 1;
          return {total: state.total + 1, cart: [...state.cart, payload]}
        }
        
        let newArr = {...state};
        return newArr;
      case 'REMOVE_FROM_CART':
        let removal = state.cart.filter(value => value.name !== payload.name)
       
          return { total: state.total - payload.count, cart: [...removal]};
      default: 
        return state;
    }
  }
  
  export default cartReducer;