import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import App from './App';

import { CommentsProvider } from './contexts/CommentsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CommentsProvider>
      <App />
    </CommentsProvider>
  </React.StrictMode>
);
