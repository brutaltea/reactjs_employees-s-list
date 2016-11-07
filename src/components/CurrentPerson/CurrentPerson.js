import React from 'react';
import Image from 'react-bootstrap/lib/Image';

var CurrentPerson = React.createClass({
    render: function () {
        return (<div className='personBlock'>
            <Image src={this.props.person.photo} responsive />            
            <h2>{this.props.person.name}</h2>
            <p>{this.props.person.date}</p>
            <p>{this.props.person.about}</p>
        </div>
        
        
        );
    }
});

export default CurrentPerson;