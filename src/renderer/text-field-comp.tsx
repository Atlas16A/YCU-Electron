import React from 'react';

import './text-field-comp.css';

export default function TextFieldComp() {
  return (
    <>
      <div className="text-field-comp-file-path" id="TaskSelect">
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
