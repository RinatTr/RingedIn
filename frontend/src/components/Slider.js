import React from 'react';

const Slider = ({id, value, min, max, handleChange, step = "1"}) => {
  return (
    <div className="slide-container">
      <input
        type="range"
        name={id}
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        id={id}
        step={step} />
    </div>
  )
}

export default Slider;
