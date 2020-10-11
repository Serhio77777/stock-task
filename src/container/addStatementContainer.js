import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Form, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { addStatement } from '../actions/user/actionCreators';

import { Redirect } from 'react-router-dom';

class StockPageContainer extends Component {
  constructor() {
    super();
    this.state = {
      owner: '',
      name: '',
      toProfile: false
    }
  }
  render() {
    if (this.state.toProfile === true) {
      return <Redirect to='/profile' />
    }
    return (
      <Card>
        <Form style={{padding: '10px'}}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Amount</Form.Label>
            <Form.Control type="number" placeholder="Amount" onChange={(e) => this.setState({amount: e.target.value})}/>
          </Form.Group>
          <Form.Group controlId="formBasicName">
            <Form.Label>Date of obtaining</Form.Label>
            <Form.Control type="text" placeholder="Obtaining" onChange={(e) => this.setState({date: e.target.value})}/>
          </Form.Group>
          <Form.Group controlId="formBasicOwner">
            <Form.Label>Statement description</Form.Label>
            <Form.Control type="text" placeholder="Description" onChange={(e) => this.setState({description: e.target.value})}/>
          </Form.Group>

          <Button style={{margin: '10px auto'}} variant="secondary" type="submit" onClick={(e) => {
            e.preventDefault();
            if (!Object.values(this.state).find(el => !el)) {
              this.props.onAddStatement(this.state);
              this.setState({ toProfile: true });
            }
          }}>
            Add new
          </Button>
        </Form>
      </Card>
    );
  }
}

StockPageContainer.propTypes = {
  onAddStatement: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onAddStatement: bindActionCreators(addStatement, dispatch),
});

export default connect(null, mapDispatchToProps)(StockPageContainer);
