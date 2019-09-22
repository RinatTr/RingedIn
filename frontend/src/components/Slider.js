import React from 'react';
import '../css/Slider.css';
const Slider = ({id, value, min, max, handleChange, step = "1", labelL, labelR}) => {
  return (
    <div className="slider-wrapper">
      <span id="labelL">{labelL}</span>
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
      <span id="labelR">{labelR}</span>
    </div>
  )
}

export default Slider;
