import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
} from 'react-bootstrap';

const button = (props) => {
  const {
    children,
    ...otherProps
  } = props;

  return (
    <Button {...otherProps}>
      {children}
    </Button>
  );
};

button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};

button.defaultProps = {
  icon: '',
  children: null,
};

export default button;
