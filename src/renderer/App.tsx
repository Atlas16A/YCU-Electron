import React from 'react';

import GolrendLogo1 from '../../assets/golrend-logo1';
import Home from '../../assets/home';
import Server from '../../assets/server';
import SendReceive from '../../assets/send-receive';
import Swap from '../../assets/swap';
import MarketTrend from '../../assets/market-trend';
import Settings from '../../assets/settings';
import Minus from '../../assets/minus';
import Close from '../../assets/close';
import MarketGraphSml from './market-graph-sml';
import MoreTransactions from '../../assets/more-transactions';
import LessTransactions from '../../assets/less-transactions';
import TransactionComponent from './transaction-component';
import TaskArea from './task-area';
import './base.css';

class Base extends React.Component {
  componentDidMount() {
    const MINUS = document.getElementById('minus');
    const CLOSE = document.getElementById('close');
    const TASKSELECT = document.getElementById('TaskSelect');
    const TASKRUN = document.getElementById('TaskRun');

    MINUS?.addEventListener('click', () => {
      window.electron.minimize('minimize');
    });
    CLOSE?.addEventListener('click', () => {
      window.electron.close('close');
    });
    TASKSELECT?.addEventListener('click', () => {
      window.electron.taskselect('TaskSelect');
    });
    TASKRUN?.addEventListener('click', () => {
      window.electron.taskrun('TaskRun');
    });
  }

  render() {
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
                  <p className="base-yagna-v080">Yagna V0.9.2</p>
                  <div className="base-overview-main-text">
                    <p className="base-yagna-control">Qaiseo</p>
                    <div className="base-welcome-to-yagna-con">
                      <p className="base-welcome-to-yagna-con1">
                        Welcome to Qaiseo!
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
                  <a
                    className="base-c-h-a-n-g-e-l-o-g-s"
                    href="https://github.com/Atlas16A/YCU-Electron"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CHANGELOGS
                  </a>
                </div>
              </div>
            </div>
          </div>
          <TaskArea />
          {/* Need to add state managment to switch from TaskArea to other Areas like market wallet etc. */}
        </div>
        <div className="base-info-area">
          <div className="base-drag-area2" />
          <div className="base-window-controls">
            <Minus />
            <Close />
          </div>
          <div className="base-info-area-content">
            <div className="base-quick-market_data">
              <p className="base-market">Market WIP</p>
              <div className="base-market-graphs">
                <MarketGraphSml variant="TYPE0" />
                <MarketGraphSml variant="TYPE1" />
                <MarketGraphSml variant="TYPE2" />
              </div>
            </div>
            <div className="base-transactions">
              <p className="base-transactions-title">Transactions WIP</p>
              <div className="base-transactions-navigation">
                <MoreTransactions />
                <LessTransactions />
              </div>
            </div>
            <div className="base-transactions-history">
              <TransactionComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Base;
