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
        let newArr = {count: state.total +1, cart: [...state.cart, payload]};
        return newArr;
      case 'REMOVE_FROM_CART':
        let removal = state.cart.filter(value => value.name !== payload.name)
          return removal;
      default: 
        return state;
    }
  }
  
  export default cartReducer;