import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Aux from '../../../hoc/Aux'
import contactsData from '../../../data/contacts.json';
import './DetailsContainer.css';

class DetailsContainer extends Component {
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
              <span className="detailsHeader">{this.state.user.name}  Profile</span>
              <hr/>
            </div>
          </div>
          <div className="row justify-content-md-center">
              <form className="contactForm col-sm-12 col-md-4">
                  <div className="form-group">
                    <span className="label-details" >Name:</span>
                    <span className="content-details">{this.state.user.name}</span>
                  </div>
                  <div className="form-group">
                    <span className="label-details" >Email:</span>
                    <span className="content-details red">{this.state.user.email}</span>
                  </div>
                  <div className="form-group">
                    <span className="label-details" >Phone:</span>
                    <span className="content-details red">{this.state.user.phone}</span>
                  </div>
                  <div className="row button-form">
                  <button type="submit" className="btn btn-outline-danger btn-details">Delete</button>
                  <Link to={'/edit/'+this.state.user.name}><button type="submit" className="btn btn-outline-secondary btn-details">Edit</button></Link>
                  </div>
              </form>
            </div>
        </div>
      </Aux>
    );
  }

}
export default DetailsContainer;
