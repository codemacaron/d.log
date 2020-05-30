import React, { useState, forwardRef } from 'react';
import { string, number, bool, func } from 'prop-types';
import classNames from 'classnames';
import './Textarea.scss';

const Textarea = forwardRef((props, ref) => {
  const { placeholder, name, className, disabled = false, onChange, maxLength } = props;
  const [value, setValue] = useState('');
  const [countValue, setCountValue] = useState(0);


  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
    handleCount(e.target.value);
  };

  const handleCount = (value) => {
    if (value.length > maxLength) {
      return;
    }
    setCountValue(value.length);
  };

  return (
    <div
      className={classNames('textarea', className)}
    >
      <textarea
        ref={ref}
        className="textarea__area"
        name={name}
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
        onChange={handleChange}
        disabled={disabled}
      />

      {maxLength &&
        <p className="textarea__character">{countValue}/{maxLength}</p>
      }
    </div>
  );
});

Textarea.propTypes = {
  name: string,
  placeholder: string,
  size: number,
  maxLength: number,
  disabled: bool,
  onChange: func
};

export default Textarea;
