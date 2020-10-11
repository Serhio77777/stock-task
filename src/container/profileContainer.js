import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Form, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { Redirect, Link } from 'react-router-dom';

import { changeProfile } from '../actions/user/actionCreators';

class ProfileContainer extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      username: '',
      password: '',
      email: ''
    }
  }
  componentDidUpdate() {
    if (this.state.user === null) {
      const user = this.props.users[this.props.currentUserIndex];
      this.setState({
        user: user,
        username: user.username,
        password: user.password,
        email: user.email
      });
    }
  }
  render() {
    if (this.props.toLogin) {
      return <Redirect to='/login' />
    }
    return (
      <Card>
        <Card.Header>
          <div>User: {this.state.user && this.state.user.username}</div>
          <div>Role: {this.state.user && this.state.user.userType}</div>
        </Card.Header>
        <Card.Img variant="top" style={{height: '150px', width: '150px', margin: '10px auto'}} src={require('../assets/images/profile.jpeg')}/>

        <Card.Body style={{padding: '30px'}}>
          <Form style={{padding: '10px'}}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}/>
            </Form.Group>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
            </Form.Group>

            <Button style={{margin: '10px auto'}} variant="secondary" type="submit" onClick={(e) => {
              e.preventDefault();
              if (!Object.values(this.state).find(el => !el)) {
                this.props.onChangeProfile(this.state);
              }
            }} >
              Change Profile
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

ProfileContainer.propTypes = {
  onChangeProfile: PropTypes.func.isRequired,
  toLogin: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
  currentUserIndex: PropTypes.number.isRequired
};

const mapDispatchToProps = dispatch => ({
  onChangeProfile: bindActionCreators(changeProfile, dispatch),
});

const mapStateToProps = state => ({
  toLogin: state.user.toLogin,
  users: state.user.users,
  currentUserIndex: state.user.currentUserIndex,
});


export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
