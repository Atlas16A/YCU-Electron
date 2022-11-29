import { useDispatch } from 'react-redux';
import { AreaUpdate } from 'renderer/user-control-areaSlice';

import './home.css';

export default function Home() {
  const dispatch = useDispatch();

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className="home-home"
      id="home"
      onClick={() => dispatch(AreaUpdate('Home'))}
    >
      <svg
        id="home-bg-svg"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="home-path-svg"
          d="M17 30V20H23V30M11 17L20 10L29 17V28C29 28.5304 28.7893 29.0391 28.4142 29.4142C28.0391 29.7893 27.5304 30 27 30H13C12.4696 30 11.9609 29.7893 11.5858 29.4142C11.2107 29.0391 11 28.5304 11 28V17Z"
          stroke="#737496"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
