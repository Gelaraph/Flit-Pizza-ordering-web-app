import React, { useState } from "react";
import styled from "styled-components";

const RangeSlider = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const sliderStyle = {
    appearance: "none",
    width: "100%",
    height: "15px",
    borderRadius: "5px",
    background: "#d3d3d3",
    outline: "none",
    opacity: "0.7",
    transition: "opacity 0.2s",
  };

  const thumbStyle = {
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    background: "#04aa6d",
    cursor: "pointer",
  };

  return (
    <div className="slidecontainer w-full">
      <input
        type="range"
        min="1"
        max="100"
        value={sliderValue}
        className="slider"
        id="myRange"
        onChange={handleSliderChange}
        style={sliderStyle}
      />
      {/* <p>
        Value: <span id="demo">{sliderValue}</span>
      </p> */}
    </div>
  );
};

const RangeSliderStyle = styled.div`
  .slidecontainer {
    width: 100%;
  }

  .slider {
    appearance: none;
    width: 100%;
    height: 15px;
    border-radius: 5px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }

  .slider:hover {
    opacity: 1;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #04aa6d;
    cursor: pointer;
  }

  .slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #04aa6d;
    cursor: pointer;
  }
`;
export default RangeSlider;
