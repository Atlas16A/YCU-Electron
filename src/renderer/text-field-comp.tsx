import React from 'react'

import './text-field-comp.css'

export default function TextFieldComp(props: TextFieldCompInterface) {
  return (
    <>
      {props.firejetVariant === 'TYPE0' && (
        <div className="text-field-comp-file-path">
          <p className="text-field-comp-x">...</p>
        </div>
      )}
    </>
  )
}

TextFieldComp.defaultProps = {
  firejetVariant: 'TYPE0',
  text: '0x...',
}

interface TextFieldCompInterface {
  firejetVariant: 'TYPE0';
}
