import React from 'react';
import ReactDOM from 'react-dom';
import { Dashboard } from './containers/dashboard';

const root = document.getElementById('root');

if (root) {
  ReactDOM.render(<Dashboard />, root);
}
