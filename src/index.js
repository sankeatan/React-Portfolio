import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import {
	faEnvelope,
	faPhone,
	faArrowUpRightFromSquare,
	faLaptopCode,
	faServer,
	faToolbox,
	faLightbulb,
	faGears,
	faAddressCard,
	faMagnifyingGlass,
	faWrench
} from '@fortawesome/free-solid-svg-icons';

library.add(
	fab,
	faEnvelope,
	faPhone,
	faArrowUpRightFromSquare,
	faLaptopCode,
	faServer,
	faToolbox,
	faLightbulb,
	faGears,
	faAddressCard,
	faMagnifyingGlass,
	faWrench
);

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
