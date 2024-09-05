import React from 'react';

function Checkbox({ isChecked, onChange }) {
  return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={onChange}
    />
  );
}

export default Checkbox;
