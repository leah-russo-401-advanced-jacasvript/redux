import React from 'react';
import {selectCategory} from '../store/categories';
import { connect } from 'react-redux';

function Categories(props){
  let stuff = props.category.category.map((idk, index) => <a onClick={()=> props.selectCategory(idk)} key={index}>{idk.displayName}</a>)
  return(
    <>

    <ul>
      {stuff}
    </ul>

    <h1>{props.category.active.displayName}</h1>
    <p>{props.category.active.description}</p>
    </>
 )

}
   const mapStateToProps = (state) => ( {
    category: state.category
   })
const mapDispatchToProps={selectCategory};
export default connect(mapStateToProps,mapDispatchToProps)(Categories);