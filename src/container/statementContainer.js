import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Button, Form, FormControl } from 'react-bootstrap';

import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import { openModal, closeModal, isLoading } from '../actions/modal/actionCreators';
import {
  changeStatement,
  addStatement,
  approveStatement,
  removeStatement,
} from '../actions/user/actionCreators';
import {
  Page,
} from '../components/atoms';

import Modal from './modalContainer';

const images = [
  require('../assets/images/doc1.jpg'),
  require('../assets/images/doc2.jpg'),
]

class StatementPageContainer extends Component {
    constructor() {
      super();
      this.state = {
        description: '',
        amount: 0,
        date: null,
        isEdit: false,
        index: null
      }
    }

  render() {
    const {
      statements,
      users,
      currentUserIndex,
      onOpenModal,
      onRemoveStatement,
      onAddStatement,
      onApproveStatement,
      onChangeStatement,
      onCloseModal,
      onLoading,
 } = this.props;
    const currentUser = users[currentUserIndex];
    if (this.props.toLogin) {
      return <Redirect to='/login' />
    }
    let currentStatements = [...statements];
    if (currentUser.userType !== 'ADMIN') {
      currentStatements = [...statements].filter((el) => el.owner !== currentUser.username);
    }
    return (
      <Page>
        <Card style={{width: '100%'}}>
          <Card.Header>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={() => {}} />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Card.Header>
          <Card.Header>
            <Button variant="secondary" onClick={() => {
              this.setState({ isEdit: false, index: null });
              onOpenModal();
            }}>Create Statement</Button>
          </Card.Header>
          <Card.Body style={{display: 'flex', flexWrap: 'wrap'}}>
            {
              currentStatements.map((statement, index) => <Card style={{width: '45%', margin: '10px auto', minHeight: '370px'}} key={statement.key}>
                <Card.Header>
                  <div>Statement {index}</div>
                </Card.Header>
                <Card.Img variant="top" style={{height: '500px'}} src={images[index % 2]} />
                <Card.Body>
                  <div>Owner: {statement.owner}</div>
                  <div>Description: {statement.description}</div>
                  <div>Amount: {statement.amount}</div>
                  <div>Status: <span style={{ color: statement.status === 'Approved' ? 'green' : statement.status === 'Rejected' ? 'red' : 'yellow' }} >{statement.status}</span></div>
                  <Button variant="danger" style={{margin: '10px 20px 0 0'}} onClick={() => onRemoveStatement(index)} >Delete</Button>
                  <Button
                    style={{margin: '10px 20px 0 0'}}
                    onClick={() => {
                      this.setState({
                        description: statement.description,
                        amount: statement.amount,
                        date: statement.date,
                        isEdit: true,
                        index
                      },
                      () => {
                        onOpenModal();
                      })
                  }}>Edit</Button>
                  {
                    currentUser.userType === 'ADMIN' && statement.status === 'Waiting' && <>
                      <Button variant="info" style={{margin: '10px 0 0 0', float: 'right'}} onClick={() => onApproveStatement({status: 'Approved', index})} >Approved</Button>
                      <Button variant="danger" style={{margin: '10px 20px 0 0', float: 'right'}} onClick={() => onApproveStatement({status: 'Rejected', index})} >Rejected</Button>
                    </>
                  }
                </Card.Body>

              </Card>)
            }
          </Card.Body>
        </Card>
        <Modal
          onAdd={() => {
            if (!Object.values(this.state).find(el => !el)) {
              onLoading(true);
              if (this.state.isEdit) {
                onChangeStatement({ ...this.state, index: this.state.index });
              } else {
                onAddStatement({ ...this.state });
              }
              onCloseModal();
            }
          }
        }
          title={'New Stock Item'}
        >
          <Form style={{ padding: '10px' }}>
            <Form.Group controlId="formBasicType">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Description" value={this.state.description} onChange={e => this.setState({ description: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formBasicAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="number" placeholder="Amount" value={this.state.amount} onChange={e => this.setState({ amount: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formBasicDateOut">
              <Form.Label>Date Out</Form.Label>
              <Form.Control type="text" placeholder="Date Out" value={this.state.date} onChange={e => this.setState({ timeOut: e.target.value })} />
            </Form.Group>
          </Form>
        </Modal>
      </Page>
    );
  }
}

StatementPageContainer.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onChangeStatement: PropTypes.func.isRequired,
  onAddStatement: PropTypes.func.isRequired,
  onApproveStatement: PropTypes.func.isRequired,
  onRemoveStatement: PropTypes.func.isRequired,
  onLoading: PropTypes.func.isRequired,
  toLogin: PropTypes.bool,
  currentUserIndex: PropTypes.number.isRequired
};

StatementPageContainer.defaultProps = {
  stocklist: [],
  statements: [],
  users: [],
};

const mapStateToProps = state => ({
  statements: state.user.statements,
  users: state.user.users,
  toLogin: state.user.toLogin,
  currentUserIndex: state.user.currentUserIndex,
});

const mapDispatchToProps = dispatch => ({
  onOpenModal: bindActionCreators(openModal, dispatch),
  onCloseModal: bindActionCreators(closeModal, dispatch),
  onChangeStatement: bindActionCreators(changeStatement, dispatch),
  onAddStatement: bindActionCreators(addStatement, dispatch),
  onApproveStatement: bindActionCreators(approveStatement, dispatch),
  onRemoveStatement: bindActionCreators(removeStatement, dispatch),
  onLoading: bindActionCreators(isLoading, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatementPageContainer);
