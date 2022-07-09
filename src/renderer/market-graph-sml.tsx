import React from 'react'

import './market-graph-sml.css'

export default function MarketGraphSml(props: MarketGraphSmlInterface) {
  return (
    <>
      {props.variant === 'TYPE0' && (
        <div className="market-graph-sml-market-graph-sml">
          <div className="market-graph-sml-graph-format">
            <div className="market-graph-sml-graph-text">
              <p className="market-graph-sml-value">#</p>
              <p className="market-graph-sml-insert-graph_n">
                Golem Token Price
              </p>
            </div>
          </div>
        </div>
      )}
      {props.variant === 'TYPE1' && (
        <div className="market-graph-sml-market-graph-sml1">
          <div className="market-graph-sml-graph-format1">
            <div className="market-graph-sml-graph-text1">
              <p className="market-graph-sml-value1">#</p>
              <p className="market-graph-sml-insert-graph_n1">CPU/Hr Price</p>
            </div>
          </div>
        </div>
      )}
      {props.variant === 'TYPE2' && (
        <div className="market-graph-sml-market-graph-sml2">
          <div className="market-graph-sml-graph-format2">
            <div className="market-graph-sml-graph-text2">
              <p className="market-graph-sml-value2">#</p>
              <p className="market-graph-sml-insert-graph_n2">Wallet Value</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

MarketGraphSml.defaultProps = {
  variant: 'TYPE0',
}

interface MarketGraphSmlInterface {
  variant: 'TYPE0' | 'TYPE1' | 'TYPE2';
}
