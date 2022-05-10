import keys from './keys';
import changeText from './changeText';
import { keyboard, textarea } from './keyboard';
import switchLanguage from './switchLang';

export default function keyboardHandler(event) {
  let langSwitch = window.localStorage.getItem('layout');
  const pressedKey = keys.flat().find((el) => el.code === event.code);
  if (!pressedKey) return;
  event.preventDefault();
  const virtualKey = document.querySelector(`#${pressedKey.code}`);
  if (event.type === 'keydown') {
    virtualKey.classList.add('active');
    changeText(pressedKey, langSwitch);
    textarea.node.focus();
    if (event.code === 'ShiftLeft') {
      keyboard.node.classList.add('shift-left');
      document.querySelector('#ShiftRight').classList.remove('active');
    }
    if (event.code === 'ShiftRight') {
      keyboard.node.classList.add('shift-right');
      document.querySelector('#ShiftLeft').classList.remove('active');
    }
    if (event.key === 'CapsLock') {
      if (document.querySelector('.caps-lock') === null) {
        keyboard.node.classList.add('caps-lock');
      } else {
        keyboard.node.classList.remove('caps-lock');
        virtualKey.classList.remove('active');
      }
    }
    if (event.code === 'AltLeft' && document.querySelector('.shift-left') !== null) {
      switchLanguage(langSwitch);
      langSwitch = window.localStorage.getItem('layout');

      document.querySelector('#ShiftLeft').classList.remove('active');
      keyboard.node.classList.remove('shift-left');
    }
  } else {
    if (event.key !== 'CapsLock') virtualKey.classList.remove('active');
    if (event.key === 'Shift') {
      keyboard.node.classList.remove('shift-left');
      keyboard.node.classList.remove('shift-right');
    }
  }
}
