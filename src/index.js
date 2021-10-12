import './style.css';
import './popup.css';
import generatePopup from './generatePopup.js';

document.querySelectorAll('.nav-link > ul > li > a')[1].addEventListener('click', generatePopup);
import './display.css';

import sendList from './displayList.js';

sendList();
