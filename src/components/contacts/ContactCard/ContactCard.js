import React  from 'react';
import Aux from '../../../hoc/Aux';
import './ContactCard.css';

const ContactCard = (props) => {
    return (
      <Aux>
            <div className="col-md-4 col-sm-12">
              <div className="card">
                    <div className="card-header">
                      {props.name}
                    </div>
                    <div className="card-body">
                      <p className="card-text">{props.mail}</p>
                      <p className="card-text">{props.phone}</p>
                    </div>
                </div>
            </div>
      </Aux>
    );
};
export default ContactCard;
