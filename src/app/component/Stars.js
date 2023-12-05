import React from "react";
import { FaStar } from "react-icons/fa";

const Stars = ({ star }) => {
  const getStarColor = (index) => {
    if (star && index <= star) {
      return "#FACC15"; // Color for selected stars
    } else {
      return "#CCC"; // Color for unselected stars
    }
  };

  return (
    <div className="flex text-2xl mb-3">
      {[1, 2, 3, 4, 5].map((index) => (
        <FaStar key={index} style={{ color: getStarColor(index) }} />
      ))}
    </div>
  );
};

export default Stars;
