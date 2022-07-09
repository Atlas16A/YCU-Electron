import React from 'react';

import './close.css';

export default function Close() {
  return (
    <div className="close-close" id="close">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="close-svg"
          d="M18 6L6 18M6 6L18 18"
          stroke="#737496"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
