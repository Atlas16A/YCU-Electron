import React from 'react';

import './send-receive.css';

export default function SendReceive() {
  return (
    <div className="send-receive-send-receive" id="send-receive">
      <svg
        id="send-receive-bg-svg"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="send-receive-path-svg"
          d="M25 29V27C25 25.9391 24.5786 24.9217 23.8284 24.1716C23.0783 23.4214 22.0609 23 21 23H13C11.9391 23 10.9217 23.4214 10.1716 24.1716C9.42143 24.9217 9 25.9391 9 27V29M31 29V27C30.9993 26.1137 30.7044 25.2528 30.1614 24.5523C29.6184 23.8519 28.8581 23.3516 28 23.13M24 11.13C24.8604 11.3503 25.623 11.8507 26.1676 12.5523C26.7122 13.2539 27.0078 14.1168 27.0078 15.005C27.0078 15.8932 26.7122 16.7561 26.1676 17.4577C25.623 18.1593 24.8604 18.6597 24 18.88M21 15C21 17.2091 19.2091 19 17 19C14.7909 19 13 17.2091 13 15C13 12.7909 14.7909 11 17 11C19.2091 11 21 12.7909 21 15Z"
          stroke="#737496"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
