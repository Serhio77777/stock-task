import React from 'react';
import PropTypes from 'prop-types';

import {
  Table,
} from 'react-bootstrap';

const StockLisTable = ({ children }) => (
  <Table>
    <thead>
      <tr>
        <th>#</th>
        <th>Unique Code</th>
        <th>Type</th>
        <th>Amount</th>
        <th>Time in</th>
        <th>Time Out</th>
        <th>Owner/Company</th>
      </tr>
    </thead>
    <tbody>
      {children}
    </tbody>
  </Table>
);

StockLisTable.propTypes = {
  children: PropTypes.node,
};

StockLisTable.defaultProps = {
  children: [],
};

export default StockLisTable;
