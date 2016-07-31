import React from 'react';

const {
  PropTypes
} = React;

const Hello = ({ onClick, message }) => {
  return (
    <div>
      <div>{message}</div>
      <button onClick={onClick}>Click</button>
    </div>
  );
};

export default Hello;
