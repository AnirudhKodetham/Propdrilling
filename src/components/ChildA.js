// Class: ChildA
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setName } from '../redux/nameSlice';
import './ChildA.css';

const ChildA = ({ onNameSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(setName(inputValue));
    onNameSubmit(inputValue);
  };

  return (
    <div className="child-a">
      <label>
        What is your name?
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ChildA;
