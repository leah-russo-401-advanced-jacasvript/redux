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
  
  const productsReducer = (state = initialState, action) => {
    let {payload,type} = action
   
        return state;
    
  }
  
  export default productsReducer;