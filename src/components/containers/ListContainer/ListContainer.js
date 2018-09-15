import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Aux from '../../../hoc/Aux'
import ContactCard from '../../contacts/ContactCard/ContactCard'
import Letters from '../../contacts/Letters/Letters'
import './ListContainer.css';
import contactsData from '../../../data/contacts.json';

class ListContainer extends Component {
  state={
    contactsarray:contactsData.contacts,
    contactsToDisplay:contactsData.contacts,
    listOfLetter:[]
  }

fillLetters=()=>{
  let listAllLetter = this.state.contactsarray.map((c) => c.name[0]).join('');
  let listWithoutRepeated = [...new Set(listAllLetter)];
  let temp=listWithoutRepeated.sort()
  const newarray=[...temp]
  this.setState({listOfLetter:newarray});
}

searchGlobal=(event)=>{
  let newarray = []
  for (var i=0; i < this.state.contactsarray.length; i++) {
        if (this.state.contactsarray[i].name.includes(event.target.value)||this.state.contactsarray[i].email.includes(event.target.value)||this.state.contactsarray[i].phone.includes(event.target.value)) {
            newarray.push(this.state.contactsarray[i]);
        }
    }
  const temp=[...newarray]
  this.setState({contactsToDisplay:temp});
}


searchByLetter=(letter)=>{
  let filteredNames = this.state.contactsarray.filter(function(object) {
       return object.name.charAt(0) === letter;
    });
  const newarray=[...filteredNames]
  this.setState({contactsToDisplay:newarray});
}

/* Choose Didmount because in a real life case we would get the information froma Web Service*/
  componentDidMount(){
    this.fillLetters();
  }
  render() {
    return (
      <Aux>
        <input className="header-search" type="text" placeholder="Search for contact" onChange={this.searchGlobal}></input>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-auto col-sm-12">
              <span className="contactHeader">Co<span className="contactUnderline">nta</span>cts</span>
            </div>
          </div>
          <div className="row justify-content-md-center">
              <div className="listletterscontainer col-md-auto col-sm-12">
                {this.state.listOfLetter.map(c=>{
                  return <Letters letter={c} key={c} click={this.searchByLetter}/>
                })}
              </div>
          </div>
          <div className="row">
            {/* Name is not the best for ID but since our data doesnt have any id, it will be good for this example only */}
            {this.state.contactsToDisplay.map(c=>{
              return <ContactCard name={c.name} mail={c.email} phone={c.phone} key={c.name}/>
            })}
          </div>
        </div>
        <Link to="/add"><button type="button" className="btn btn-danger roundbutton">+</button></Link>
      </Aux>
    );
  }

}
export default ListContainer;
