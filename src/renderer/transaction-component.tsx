/* eslint-disable @typescript-eslint/no-shadow */
import { takeHeapSnapshot } from 'process';
import React, { useState } from 'react';

import './transaction-component.css';

export default function TransactionComponent() {
  const [Task, setTask] = useState([
    { key: '1', Name: 'Lorem', Time: '00:00:00:00', Cost: '0.00' },
  ]);

  return (
    <>
      {Task.map((Task) => (
        <div
          className="transaction-component-transaction-component"
          key={Task.key}
        >
          <div className="transaction-component-task">
            <div className="transaction-component-golrend-logo2">
              <div className="transaction-component-golrend-logo21" />
            </div>
            <div className="transaction-component-task-info">
              <div className="transaction-component-num-name-frame">
                <div className="transaction-component-num-frame">
                  <p className="transaction-component-component">{Task.key}</p>
                </div>
                <div className="transaction-component-name-frame">
                  <p className="transaction-component-name">{Task.Name}</p>
                </div>
              </div>
              <p className="transaction-component-task-run-time">
                Task Run Time: {Task.Time}
              </p>
            </div>
          </div>
          <div className="transaction-component-cost">
            <p className="transaction-component-total">Total</p>
            <p className="transaction-component-component1">${Task.Cost}</p>
          </div>
        </div>
      ))}
    </>
  );
}
