import React from 'react';
import {selectCartItems} from '../store/cart.js';
import { connect } from 'react-redux';
import {removeFromCart} from '../store/cart.js'
import {updateInventory} from '../store/products.js';

function SimpleCart(props) {
  console.log(props)
let stuff = props.cart.cart.map((idk, index)=> <> <li key={index}>{idk.name} ({idk.count})</li> <p onClick={()=> {
  props.removeFromCart(idk)
  props.updateInventory(idk)
}}> Remove From Cart</p> </>)
  return (
    <div>
      <ul>
        {stuff}
      </ul>
    </div>
  )


}

const mapStateToProps = (state) => ( {
  cart: state.cart,
 })
const mapDispatchToProps=({ 
  selectCartItems,
  removeFromCart,
  updateInventory
});
export default connect(mapStateToProps,mapDispatchToProps)(SimpleCart);