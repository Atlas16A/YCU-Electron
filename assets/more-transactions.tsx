import React from 'react';

import './more-transactions.css';

export default function MoreTransactions() {
  return (
    <div className="more-transactions-more-transactions">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="more-transactions-svg"
          d="M15 8V22M15 22L22 15M15 22L8 15M6.25 3.75H23.75C25.1307 3.75 26.25 4.86929 26.25 6.25V23.75C26.25 25.1307 25.1307 26.25 23.75 26.25H6.25C4.86929 26.25 3.75 25.1307 3.75 23.75V6.25C3.75 4.86929 4.86929 3.75 6.25 3.75Z"
          stroke="#737496"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
