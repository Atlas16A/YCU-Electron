import { useDispatch } from 'react-redux';
import { AreaUpdate } from 'renderer/user-control-areaSlice';

import './server.css';

export default function Server() {
  const dispatch = useDispatch();

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className="server-server"
      id="server"
      onClick={() => dispatch(AreaUpdate('Task'))}
    >
      <svg
        id="server-bg-svg"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="server-path-svg"
          d="M14 14H14.01M14 26H14.01M12 10H28C29.1046 10 30 10.8954 30 12V16C30 17.1046 29.1046 18 28 18H12C10.8954 18 10 17.1046 10 16V12C10 10.8954 10.8954 10 12 10ZM12 22H28C29.1046 22 30 22.8954 30 24V28C30 29.1046 29.1046 30 28 30H12C10.8954 30 10 29.1046 10 28V24C10 22.8954 10.8954 22 12 22Z"
          stroke="#737496"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
