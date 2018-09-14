import React, { Component } from 'react';

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

searchByLetter=(letter)=>{
  let filteredNames = this.state.contactsarray.filter(function(object) {
       return object.name.charAt(0) === letter;
    });
  const newarray=[...filteredNames]
  this.setState({contactsToDisplay:newarray});
}


  componentDidMount(){
    this.fillLetters();
  }
  render() {
    return (
      <Aux>
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
      </Aux>
    );
  }

}
export default ListContainer;
