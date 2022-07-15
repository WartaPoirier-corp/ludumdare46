import React from 'react';
import ReactDOM from 'react-dom/client';
import Game from './Game';
import * as Schema from './schema';

ReactDOM.createRoot(document.querySelector('#app')!).render(React.createElement(Game));
