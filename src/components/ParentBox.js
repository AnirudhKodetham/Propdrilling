import React, { useState } from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';
import { useSelector } from 'react-redux';
import './ParentBox.css';

const ParentBox = () => {
  const name = useSelector((state) => state.name);
  const [submittedName, setSubmittedName] = useState('');

  const handleNameSubmit = (name) => {
    setSubmittedName(name);
  };

  return (
    <div className="parent-box">
      {submittedName && <h1>Welcome, {submittedName}</h1>}
      <ChildA onNameSubmit={handleNameSubmit} />
      {submittedName && <ChildB name={submittedName} />}
    </div>
  );
};

export default ParentBox;
