import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

//Set language to english for whole ant.d
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

ReactDOM.render(
  <LocaleProvider locale={enUS}><App /></LocaleProvider>
  , document.getElementById('root'));
registerServiceWorker();
