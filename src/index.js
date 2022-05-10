import './assets/styles/style.scss';
import { keyboard } from './scripts/keyboard';
import keyboardHandler from './scripts/realKeyboardHandler';
import { mouseDownHandler, mouseUpHandler } from './scripts/virtualKeyboardHandler';

if (localStorage.getItem('layout') == null || localStorage.getItem('layout') === 'eng') {
  keyboard.node.classList.add('layout-eng');
  window.localStorage.setItem('layout', 'eng');
}
if (localStorage.getItem('layout') === 'ru') {
  keyboard.node.classList.add('layout-ru');
  window.localStorage.setItem('layout', 'ru');
}

keyboard.node.addEventListener('mousedown', mouseDownHandler);
keyboard.node.addEventListener('mouseup', mouseUpHandler);

window.addEventListener('keydown', keyboardHandler);
window.addEventListener('keyup', keyboardHandler);
