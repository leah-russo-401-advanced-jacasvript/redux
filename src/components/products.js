import React from 'react';
import {selectProducts} from '../store/products.js';
import { connect } from 'react-redux';
import { addToCart } from '../store/cart.js';

function Products(props){
console.log(props);
  let stuff = props.products.products.map((idk, index) =>{
   if(props.active.name === idk.category){
     return <> <li key={index}>{idk.name}</li> <button onClick={()=> props.addToCart(idk)}>Add To Cart</button> </>
    
   }
  })
    
  return(
    <>

    <ul>
      {stuff}
    </ul>
    </>
 )

}
   const mapStateToProps = (state) => ( {
    products: state.products,
    active: state.category.active
   })
const mapDispatchToProps = ({ 
  selectProducts, 
  addToCart

});
export default connect(mapStateToProps,mapDispatchToProps)(Products);