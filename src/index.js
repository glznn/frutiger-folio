import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Directory from './Directory';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, useLocation } from 'react-router-dom';
import SwapArrow from './components/SwapArrow';
import BottomChannel from './components/BottomChannel';
import { channelData } from './data/channelData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Directory />
      <HasSwapArrow />
      <HasFooter />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function HasFooter() {
  const location = useLocation();
  const index = findChannelIndex(location.pathname);
  if (index === -1) return null;
  if (location.pathname === '/' || location.pathname === '/contact') return null;
  return <BottomChannel buttonText={channelData[index].buttonText} link={channelData[index].buttonPath}/>;
}

function HasSwapArrow() {
  const location = useLocation();
  if (location.pathname === '/' || location.pathname === '/error404') return null;
  return <SwapArrow />;
}

export function findChannelIndex(currentPath) {
    return channelData.findIndex(channel => channel.path === currentPath)
}