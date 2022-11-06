import React from 'react';

import './market-trend.css';

export default function MarketTrend() {
  return (
    <div className="market-trend-market-trend" id="market-trend">
      <svg
        id="market-trend-bg-svg"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="market-trend-path-svg"
          d="M25.7039 17.2555L20.9011 22.0055L18.3733 19.5055L14.5817 23.2555M25.7039 17.2555H22.6705M25.7039 17.2555L25.7039 20.2555M13 11H27C28.1046 11 29 11.8954 29 13V27C29 28.1046 28.1046 29 27 29H13C11.8954 29 11 28.1046 11 27V13C11 11.8954 11.8954 11 13 11Z"
          stroke="#737496"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
