import React from 'react';
import {Link} from 'react-router-dom';

import Aux from '../../../hoc/Aux'

const AddContainer = (props) =>(
  <Aux>
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-auto col-sm-12">
          <span className="contactHeader">Add Ne<span className="contactUnderline">w C</span>ontact</span>
        </div>
      </div>
      <div className="row justify-content-md-center">
          <form className="contactForm col-sm-12 col-md-8">
            <div className="form-group">
              <label htmlFor="InputName">Name</label>
              <input type="text" className="form-control" id="InputName" placeholder="Enter Name"></input>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
            </div>
            <div className="form-group">
                    <label htmlFor="PhoneInput">Phone Number</label>
                    <input  className="form-control" id="PhoneInput"  placeholder="Enter phone"></input>
            </div>
            <div className="row button-form">
            <button type="submit" className="btn btn-outline-secondary">Add Contact</button>
            </div>
        </form>
      </div>
    </div>
  </Aux>
);
export default AddContainer;
