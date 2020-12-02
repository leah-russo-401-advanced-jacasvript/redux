const initialState = {
active: '',
  category: [
    {displayName: 'Staffordshire terrier', name:'staffordshire terrier', description: 'a dog'}, {displayName: 'Border Collie', name: 'border collie', description: 'a good boy'}, {displayName: 'Border Collie', name: 'border collie', description: 'a good boy'}
  ]
}

 export const selectCategory = (stuff) => {
  return {
    type: 'categories',
    payload: stuff
  }
}

const categoryReducer = (state = initialState, action) => {
  let {payload,type} = action
  switch(type){
    case 'categories':
      return {...state, active: payload};
    default: 
      return state;
  }
}

export default categoryReducer;