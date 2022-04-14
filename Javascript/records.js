import darkMode from './module/DarkMode/darkMode.js';
import initDropdownMenu from './module/NavbarMenu/dropdownMenu.js';
import initMenu from './module/NavbarMenu/menu.js';
import { displayingRecords } from './module/Records/displayingRecords.js';
import onClickOrderRecords from './module/Records/orderRecords.js';
import { initFirebase } from './module/Firestore/initFirebase.js';
export const recordUl = document.querySelector('#recordList');

initFirebase();
initDropdownMenu();
initMenu();
displayingRecords(recordUl);
darkMode();
onClickOrderRecords();
