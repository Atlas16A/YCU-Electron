/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './text-field-comp.css';

export default function TextFieldComp() {
  return (
    <>
      <div
        className="text-field-comp-file-path"
        id="TaskSelect"
        onClick={() => {
          window.electron.taskselect('TaskSelect');
        }}
      >
        <p className="text-field-comp-x">...</p>
      </div>
    </>
  );
}

TextFieldComp.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  text: '0x...',
};

interface TextFieldCompInterface {
  firejetVariant: 'TYPE0';
}
