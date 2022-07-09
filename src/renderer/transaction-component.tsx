import React from 'react'

import './transaction-component.css'

export default function TransactionComponent(
  props: TransactionComponentInterface
) {
  return (
    <>
      {props.variant === 'PROPERTY1=DEFAULT_TYPE0' && (
        <div className="transaction-component-transaction-component">
          <div className="transaction-component-task">
            <div className="transaction-component-golrend-logo2">
              <div className="transaction-component-golrend-logo21" />
            </div>
            <div className="transaction-component-task-info">
              <div className="transaction-component-num-name-frame">
                <div className="transaction-component-num-frame">
                  <p className="transaction-component-component">1</p>
                </div>
                <div className="transaction-component-name-frame">
                  <p className="transaction-component-name">Blender Render</p>
                </div>
              </div>
              <p className="transaction-component-task-run-time">
                Task Run Time: 00:00:00:45
              </p>
            </div>
          </div>
          <div className="transaction-component-cost">
            <p className="transaction-component-total">Total</p>
            <p className="transaction-component-component1">$0.05</p>
          </div>
        </div>
      )}
    </>
  )
}

TransactionComponent.defaultProps = {
  variant: 'PROPERTY1=DEFAULT_TYPE0',
}

interface TransactionComponentInterface {
  variant: 'PROPERTY1=DEFAULT_TYPE0';
}
