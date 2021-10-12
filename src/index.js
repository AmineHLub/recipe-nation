import './style.css';
import './popup.css';
import generatePopup from './generatePopup.js';
import './display.css';

import sendList from './displayList.js';

document.querySelectorAll('.nav-link > ul > li > a')[1].addEventListener('click', generatePopup);

sendList();
