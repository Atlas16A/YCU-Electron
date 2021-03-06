import React from 'react';

import GolrendLogo1 from '../../assets/golrend-logo1';
import Home from '../../assets/home';
import Server from '../../assets/server';
import SendReceive from '../../assets/send-receive';
import Swap from '../../assets/swap';
import MarketTrend from '../../assets/market-trend';
import Settings from '../../assets/settings';
import Minus from '../../assets/minus';
import Minimize from '../../assets/minimize';
import Close from '../../assets/close';
import MarketGraphSml from './market-graph-sml';
import MoreTransactions from '../../assets/more-transactions';
import LessTransactions from '../../assets/less-transactions';
import TransactionComponent from './transaction-component';
import './base.css';

export default function Base() {
  return (
    <div className="base-base">
      <div className="base-nav-bar">
        <GolrendLogo1 />
        <Home />
        <Server />
        <SendReceive />
        <Swap />
        <MarketTrend />
        <Settings />
        <p className="base-y-c-u-version">V 0.0.1 Beta</p>
      </div>
      <div className="base-content">
        <div className="base-content-overview">
          <div className="base-overview-group">
            <div className="base-drag-area1" />
            <div className="base-overview-group-content">
              <div className="base-overview-text">
                <p className="base-yagna-v080">Yagna V0.8.0</p>
                <div className="base-overview-main-text">
                  <p className="base-yagna-control">Yagna Control</p>
                  <div className="base-welcome-to-yagna-con">
                    <p className="base-welcome-to-yagna-con1">
                      Welcome to Yagna Control UI!
                      <br />
                    </p>
                    <p className="base-to-keep-up-to-date">
                      <br />
                      To keep up-to-date with Software changes check the logs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="base-change-logs-button">
                <p className="base-c-h-a-n-g-e-l-o-g-s">CHANGELOGS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="base-info-area">
        <div className="base-drag-area2" />
        <div className="base-window-controls">
          <Minus />
          <Minimize />
          <Close />
        </div>
        <div className="base-info-area-content">
          <div className="base-quick-market_data">
            <p className="base-market">Market</p>
            <div className="base-market-graphs">
              <MarketGraphSml variant="TYPE0" />
              <MarketGraphSml variant="TYPE1" />
              <MarketGraphSml variant="TYPE2" />
            </div>
          </div>
          <div className="base-transactions">
            <p className="base-transactions-title">Transactions</p>
            <div className="base-transactions-navigation">
              <MoreTransactions />
              <LessTransactions />
            </div>
          </div>
          <div className="base-transactions-history">
            <TransactionComponent variant="PROPERTY1=DEFAULT_TYPE0" />
          </div>
        </div>
      </div>
    </div>
  );
}
