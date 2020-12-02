import React from 'react';
import {selectProducts} from '../store/categories';
import { connect } from 'react-redux';

function Products(props){
  console.log(props.category.active)
  let stuff = props.category.category.map((idk, index) => <a onClick={()=> props.selectCategory(idk)} key={index}>{idk.displayName}</a>)
  return(
    <>

    <ul>
      {stuff}
    </ul>
    </>
 )

}
   const mapStateToProps = (state) => ( {
    category: state.products
   })
const mapDispatchToProps={selectProducts};
export default connect(mapStateToProps,mapDispatchToProps)(Products);