import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { CommentsProvider } from './contexts/CommentsContext';
import { RepliesProvider } from './contexts/RepliesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CommentsProvider>
      <RepliesProvider>
        <App />
      </RepliesProvider>
    </CommentsProvider>
  </React.StrictMode>
);
