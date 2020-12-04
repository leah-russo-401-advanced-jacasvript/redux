import React from 'react';
import { connect } from 'react-redux';
import './header.css'

function Header(props) {

  return(
    <header>
      <h2> PUPS - R - US</h2>

      <ul>
        <li>
          {props.count}
        </li>
      </ul>
    </header>
  )
}

const mapStateToProps = (state) => ( {
  count: state.cart.total
 })
const mapDispatchToProps={};
export default connect(mapStateToProps,mapDispatchToProps)(Header);

