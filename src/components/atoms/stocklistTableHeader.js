import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Button,
} from 'react-bootstrap';

const StockListTableHeader = (props) => {
  const {
    onAdd,
  } = props;

  return (
    <Row>
      <Col xs={12} md={10} />
      <Col xs={12} md={2}>
        <Button  variant="secondary" onClick={onAdd}>Add new item</Button>
      </Col>
    </Row>
  );
};

StockListTableHeader.defaultProps = {
  Modal: null,
};

StockListTableHeader.propTypes = {
  onAdd: PropTypes.func,
};

export default StockListTableHeader;
