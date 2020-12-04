const initialState = {

    products: [
      { category: 'staffordshire terrier',name: 'Buster', description: 'lazy but good boi. sleep lot',price:10, inventoryCount: 7}, { category: 'border collie',name: 'Steve', description: 'likes to run',price:10, inventoryCount: 7}
    ]
  }
  
   export const selectProducts = (stuff) => {
    return {
      type: 'products',
      payload: stuff
    }
  }

  export const updateInventory = (stuff) => {
    return {
      type: 'UPDATE',
      payload: stuff
    }
  }
  export const reduceCount = (stuff) => {
    return {
      type: 'REMOVE',
      payload: stuff
    }
  }

  const productsReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch(type) {
      case 'UPDATE':
        for(let i = 0; i < state.products.length; i++) {
          if(state.products[i] == payload) {
            state.products[i].inventoryCount += payload.count;
            state.products[i].count = 0;
            console.log(state.products[i]);
            return {products: [...state.products]}
          }
        }

        case 'REMOVE':
          for(let i = 0; i < state.products.length; i++) {
            if(state.products[i] == payload) {
              state.products[i].inventoryCount--;
              console.log(state.products[i])
              return {products: [...state.products]}
            }
          }

        return {...state}
        default:
          return state;
    }
    
  }
  
  export default productsReducer;