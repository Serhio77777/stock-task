import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card, Button, Form, FormControl } from 'react-bootstrap';import {
  removeStock,
} from '../actions/stock/actionCreators';

import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

const images = [
  require('../assets/images/_DSC0658.jpeg'),
  require('../assets/images/depositphotos_133861250-stock-video-food-storage-warehouse-meat-products.jpg'),
  require('../assets/images/images.jpeg'),
]

class HomeContainer extends Component {
  render() {
    const { stocklist } = this.props;
    if (this.props.toLogin) {
      return <Redirect to = '/login' / >
    }

    return (
      <StockContainer>
        <Card style={{width: '100%'}}>
          <Card.Header>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Card.Header>
          <Card.Header>
            <Link to="/add-new-stock"><Button variant="secondary">Create Stock</Button></Link>
          </Card.Header>
          <Card.Body style={{display: 'flex', flexWrap: 'wrap'}}>
            {
              stocklist.map((stock, index) => <Card style={{width: '45%', margin: '10px auto', minHeight: '370px'}} key={stock.key}>
                <Card.Header>
                  <div>Meet Stock {index}</div>
                </Card.Header>
                <Card.Img variant="top" style={{height: '200px'}} src={images[index % 3]} />
                <Card.Body>
                  <div>Owner {stock.stockOwner}</div>
                  <Button variant="danger" style={{margin: '10px 20px 0 0'}} onClick={() => this.props.onRemoveStock(index)} >Delete</Button>
                  <Link to={`/stock/${index}`}><Button variant="secondary" style={{margin: '10px 20px 0 0'}}>Inside</Button></Link>
                </Card.Body>

              </Card>)
            }
          </Card.Body>
        </Card>
      </StockContainer>
    );
  }
}

HomeContainer.propTypes = {
  stocklist: PropTypes.arrayOf(PropTypes.object),
  onRemoveStock: PropTypes.func.isRequired,
  toLogin: PropTypes.bool
};

HomeContainer.defaultProps = {
  stocklist: [],
};

const mapStateToProps = state => ({
  stocklist: state.stock.stocklist,
  toLogin: state.user.toLogin
});

const StockContainer = styled.div`
  display: flex;
  justify-container: spece-between;
  flex-wrap: wrap;
  width: 100%;
`

const mapDispatchToProps = dispatch => ({
  onRemoveStock: bindActionCreators(removeStock, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
