import React, { useState, useEffect, useRef } from 'react';
import './CustomSelect.css';

const CustomSelect = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0].value);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option.value);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="custom-select" ref={selectRef}>
      <div className="custom-select-trigger" onClick={handleSelectClick}>
        {options.find(option => option.value === selectedOption).label}
        <span className="arrow"></span>
      </div>
      {isOpen && (
        <div className="custom-options">
          {options.map(option => (
            <div
              key={option.value}
              className={`custom-option ${selectedOption === option.value ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
