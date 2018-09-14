import React from 'react';
import logo from '../../../vodafone_logo.svg';

import Aux from '../../../hoc/Aux'

const layout = (props) =>(
  <Aux>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <input type="text" placeholder="Search for contact"></input>
    </header>
    <div>Header</div>
    <main>
      {props.children}
    </main>
    <footer>
      <span>All rights reserved. VSSB 2018</span>
    </footer>
  </Aux>
);
export default layout;
