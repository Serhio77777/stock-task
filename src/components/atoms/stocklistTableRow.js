import React from 'react';
import PropTypes from 'prop-types';
import addMonths from 'date-fns/addMonths';

const StockListTableRow = (props) => {
  const {
    index,
    uniqueCode,
    type,
    amount,
    timeIn,
    timeOut,
    ownerName,
    children,
  } = props;

  return (
    <tr className={'success'}>
      <td>{index + 1}</td>
      <td>{uniqueCode}</td>
      <td>{type}</td>
      <td>{amount} t</td>
      <td>{timeIn}</td>
      <td>{timeOut}</td>
      <td>{ownerName}</td>
      <td>
        {children}
      </td>
    </tr>
  );
};

StockListTableRow.propTypes = {
  uniqueCode: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  timeIn: PropTypes.string,
  timeOut: PropTypes.string,
  ownerName: PropTypes.string,
  index: PropTypes.number,
  children: PropTypes.node,
};

StockListTableRow.defaultProps = {
  ownerName: '?',
  type: '?',
  amount: 0,
  uniqueCode: '',
  timeIn: new Date().toISOString(),
  timeOut: addMonths(new Date(), 1).toISOString(),
  index: 0,
  children: null,
};


export default StockListTableRow;
