import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ backgroundColor, label, onClick, primary, size }) => {
  const baseStyle = {
    padding: size === 'large' ? '16px 32px' : '8px 16px',
    backgroundColor: primary ? backgroundColor : '#ccc',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <button style={baseStyle} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Button;
