import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Form, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { Redirect, Link } from 'react-router-dom';

import { login } from '../actions/user/actionCreators';

class LoginContainer extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }
  render() {
    if (!this.props.toLogin) {
      return <Redirect to='/' />
    }
    return (
      <Card >
        <Card.Header>
          <Link to="/registration"><Button variant="secondary">Registration</Button></Link>
        </Card.Header>
        <Card.Body style={{padding: '30px'}}>
          <Form style={{padding: '10px'}}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" onChange={(e) => this.setState({username: e.target.value})}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => this.setState({password: e.target.value})}/>
            </Form.Group>

            <Button style={{margin: '10px auto'}} variant="secondary" type="submit" onClick={(e) => {
              e.preventDefault();
              if (!Object.values(this.state).find(el => !el)) {
                this.props.onLogin(this.state);
              }
            }} >
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

LoginContainer.propTypes = {
  onLogin: PropTypes.func.isRequired,
  toLogin: PropTypes.bool.isRequired
};

const mapDispatchToProps = dispatch => ({
  onLogin: bindActionCreators(login, dispatch),
});

const mapStateToProps = state => ({
  toLogin: state.user.toLogin,
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
