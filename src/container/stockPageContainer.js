import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uuidV1 from 'uuid/v1';
import {
  Form,
} from 'react-bootstrap';

import {
  Page,
  PageContainer,
  PageHeader,
  StockListTableHeader,
  StocklistTable,
  StocklistTableRow,
  Button,
} from '../components/atoms';
import { openModal, closeModal, isLoading } from '../actions/modal/actionCreators';
import {
  changeStockItem,
  addStock,
  addStockItem,
  removeStockItem,
  stockFound
} from '../actions/stock/actionCreators';
import Modal from './modalContainer';

class StockPageContainer extends Component {
  constructor() {
    super();
    this.state = {
      owner: '',
      type: '',
      amount: 0,
      timeOut: null,
      isEdit: false,
      index: null
    }
  }

  render() {
    const {
      onOpenModal,
      onRemoveStockItem,
      onAddStockItem,
      onChangeStockItem,
      onCloseModal,
      onLoading,
      stocklist,
    } = this.props;
    const title = `Meet Stocks Watchlist [${stocklist.length}]`;
    const indexStock = Number(window.location.href.split('/').pop())
    return (
      <Page>
        <PageHeader title={title} />
        <PageContainer>
          <StockListTableHeader
            onAdd={() => {
              this.setState({ isEdit: false, index: null });
              onOpenModal();
            }}
          />
          <StocklistTable>
            {
              stocklist[indexStock].list.map((stock, index) =>
                <StocklistTableRow
                  index={index}
                  key={uuidV1()}
                  {...stock}
                >
                  <Button variant="danger" onClick={() => onRemoveStockItem({ indexStockItem: index, indexStock })} >Delete</Button>
                  <Button onClick={() => {
                    this.setState({
                      owner: stock.ownerName,
                      type: stock.type,
                      amount: stock.amount,
                      timeOut: stock.timeOut,
                      isEdit: true,
                      index
                    },
                    () => {
                      onOpenModal();
                    })
                  }}>Edit</Button>
                </StocklistTableRow >
                )
            }
          </StocklistTable>
        </PageContainer>
        <Modal
          onAdd={() => {
            if (!Object.values(this.state).find(el => !el)) {
              onLoading(true);
              if (this.state.isEdit) {
                onChangeStockItem({ ...this.state, indexStock, indexItem: this.state.index });
              } else {
                onAddStockItem({ ...this.state, index: indexStock });
              }
              onCloseModal();
            }
          }
        }
          title={'New Stock Item'}
        >
          <Form style={{ padding: '10px' }}>
            <Form.Group controlId="formBasicType">
              <Form.Label>Type</Form.Label>
              <Form.Control type="text" placeholder="Type" value={this.state.type} onChange={e => this.setState({ type: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formBasicOwner">
              <Form.Label>Owner Name</Form.Label>
              <Form.Control type="text" placeholder="Owner Name" value={this.state.owner} onChange={e => this.setState({ owner: e.target.value })} />
            </Form.Group>

            <Form.Group controlId="formBasicAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="number" placeholder="Amount" value={this.state.amount} onChange={e => this.setState({ amount: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formBasicDateOut">
              <Form.Label>Date Out</Form.Label>
              <Form.Control type="text" placeholder="Date Out" value={this.state.timeOut} onChange={e => this.setState({ timeOut: e.target.value })} />
            </Form.Group>
          </Form>
        </Modal>
      </Page>
    );
  }
}

StockPageContainer.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onChangeStockItem: PropTypes.func.isRequired,
  onAddStock: PropTypes.func.isRequired,
  onRemoveStockItem: PropTypes.func.isRequired,
  onStockFound: PropTypes.func.isRequired,
  onAddStockItem: PropTypes.func.isRequired,
  onLoading: PropTypes.func.isRequired,
  stocklist: PropTypes.arrayOf(PropTypes.object),
};

StockPageContainer.defaultProps = {
  stocklist: [],
};

const mapStateToProps = state => ({
  stocklist: state.stock.stocklist,
});

const mapDispatchToProps = dispatch => ({
  onOpenModal: bindActionCreators(openModal, dispatch),
  onCloseModal: bindActionCreators(closeModal, dispatch),
  onChangeStockItem: bindActionCreators(changeStockItem, dispatch),
  onAddStock: bindActionCreators(addStock, dispatch),
  onAddStockItem: bindActionCreators(addStockItem, dispatch),
  onRemoveStockItem: bindActionCreators(removeStockItem, dispatch),
  onStockFound: bindActionCreators(stockFound, dispatch),
  onLoading: bindActionCreators(isLoading, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(StockPageContainer);
