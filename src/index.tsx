import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import Layout from './layout';

const App: React.FC = () => (
  <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
    <Layout />
  </ConfigProvider>
);

const domNode = document.getElementById('app');
const root = ReactDOM.createRoot(domNode as HTMLDivElement);

root.render(<App />);