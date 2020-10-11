import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Form, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { addStock } from '../actions/stock/actionCreators';

import { Redirect } from 'react-router-dom';
// const history = useHistory();
class AddNewStockPageContainer extends Component {
  constructor() {
    super();
    this.state = {
      owner: '',
      name: '',
      toDashboard: false
    }
  }
  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to='/' />
    }
    return (
      <Card>
        <Form style={{padding: '10px'}}>
          <Form.Group controlId="formBasicOwner">
            <Form.Label>Name Owner</Form.Label>
            <Form.Control type="text" placeholder="Owner" onChange={(e) => this.setState({owner: e.target.value})}/>
            <Form.Text className="text-muted">
              Add the stock owner name.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Label>Stock Name</Form.Label>
            <Form.Control type="text" placeholder="Name" onChange={(e) => this.setState({name: e.target.value})}/>
          </Form.Group>
          <Button style={{margin: '10px auto'}} variant="secondary" type="submit" onClick={(e) => {
            e.preventDefault();
            if (!Object.values(this.state).find(el => !el)) {
              this.props.onAddStock(this.state);
              this.setState({ toDashboard: true });
            }
          }}>
            Add new
          </Button>
        </Form>
      </Card>
    );
  }
}

AddNewStockPageContainer.propTypes = {
  onAddStock: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onAddStock: bindActionCreators(addStock, dispatch),
});

export default connect(null, mapDispatchToProps)(AddNewStockPageContainer);
