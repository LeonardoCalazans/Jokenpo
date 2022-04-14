import {
  buttonPlayNow,
  buttonPlayAgain,
  chosenButton,
} from "./module/button.js";
import onDarkMod from "./module/DarkMode/darkMode.js";
import initDropdownMenu from "./module/NavbarMenu/dropdownMenu.js";
import initMenu from "./module/NavbarMenu/menu.js";
import { initFirebase } from './module/Firestore/initFirebase.js';

initFirebase();
initDropdownMenu();
initMenu();
onDarkMod();
buttonPlayNow
buttonPlayAgain
chosenButton