import React from 'react';
import axios from 'axios';
import CurrentPerson from '../CurrentPerson/CurrentPerson';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Tab from 'react-bootstrap/lib/Tab';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

var List = React.createClass({

  getInitialState: function () {
    return {
      employees: []
    }
  },

  componentDidMount: function () {
    var _this = this;
    this.serverRequest =
      axios.get('//demo3340210.mockable.io/employees')
        .then(function (result) {
          _this.setState({
            employees: result.data.employees
          });
        })
  },
  setPerson: function (i) {
    this.setState({ current: i });
  },

  render: function () {
    var person = this.state.employees[this.state.current] || {};
    var self = this;
    return (
      <Row className="show-grid">
        <Col xs={4}>
          <Tab.Container id="left-tabs-example">
            <Nav bsStyle="pills" stacked>
              {this.state.employees.map(function (person, i) {
                return (
                  <NavItem key={person.id} onClick={(e) => self.setPerson(i)}>
                    {person.name}
                  </NavItem>
                );
              })}
            </Nav>
          </Tab.Container>
        </Col>
        <Col xs={4}>
          <CurrentPerson person={person} />
        </Col>
      </Row>
    )
  }
});

export default List;
