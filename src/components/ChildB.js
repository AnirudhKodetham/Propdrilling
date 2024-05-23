import React from 'react';
import './ChildB.css';

const ChildB = ({ name }) => {
  return (
    <div className="child-b">
      <h2>Hello {name}, here are some personalized offers for you.</h2>
    </div>
  );
};

export default ChildB;
