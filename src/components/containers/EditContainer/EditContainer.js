import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Aux from '../../../hoc/Aux'
import contactsData from '../../../data/contacts.json';


class EditContainer extends Component {
  state={
    contactsarray:contactsData.contacts,
    user:null
  }



finduser=(name)=>{
  let user = this.state.contactsarray.filter(function(object) {
       return object.name === name;
    });
  this.setState({user:user[0]});
}

  componentWillMount(){
     let name=this.props.match.params.id;
     this.finduser(name);
  }
  render() {
    return (
      <Aux>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-auto col-sm-12">
              <span className="detailsHeader">Edit {this.state.user.name}  Profile</span>
              <hr/>
            </div>
          </div>
          <div className="row justify-content-md-center">
              <form className="contactForm col-sm-12 col-md-4">
                <div className="form-group">
                    <div className="row justify-content-md-center">
                      <span className="label-details col-sm-3" >Name:</span>
                      <input type="text" className="form-control form-edit col-sm-8" id="InputName" placeholder={this.state.user.name}></input>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row justify-content-md-center">
                      <span className="label-details col-sm-3" >Email:</span>
                      <input type="email" className="form-control form-edit col-sm-8" id="exampleInputEmail1" placeholder={this.state.user.email}></input>
                    </div>
                </div>
                <div className="form-group">
                  <div className="row justify-content-md-center">
                      <span className="label-details col-sm-3" >Phone:</span>
                      <input  className="form-control form-edit  col-sm-8" id="PhoneInput"  placeholder={this.state.user.phone}></input>
                  </div>
                </div>
                <div className="row button-form">
                <button type="submit" className="btn btn-outline-secondary">Save Contact</button>
                </div>
             </form>
            </div>
        </div>
      </Aux>
    );
  }

}
export default EditContainer;
