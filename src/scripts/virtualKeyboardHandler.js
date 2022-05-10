import keys from './keys';
import changeText from './changeText';
import { keyboard, textarea } from './keyboard';
import switchLanguage from './switchLang';

let langSwitch = window.localStorage.getItem('layout');

function mouseDownHandler(event) {
  const pressedKey = event.target.closest('.key');
  if (!pressedKey) return;
  event.preventDefault();
  pressedKey.classList.add('active');
  const virtualKey = keys.flat().find((el) => el.code === pressedKey.id);
  langSwitch = window.localStorage.getItem('layout');
  changeText(virtualKey, langSwitch);
  textarea.node.focus();

  if (pressedKey.id === 'AltLeft') {
    if (document.querySelector('.shift-left') !== null) {
      switchLanguage(langSwitch);
      langSwitch = window.localStorage.getItem('layout');
    }
  }
  if (pressedKey.id === 'CapsLock') {
    if (document.querySelector('.caps-lock') === null) {
      keyboard.node.classList.add('caps-lock');
    } else {
      keyboard.node.classList.remove('caps-lock');
      pressedKey.classList.remove('active');
    }
  }

  if (pressedKey.id === 'ShiftLeft') {
    keyboard.node.classList.remove('shift-right');
    document.querySelector('#ShiftRight').classList.remove('active');
    if (document.querySelector('.shift-left') !== null) {
      keyboard.node.classList.remove('shift-left');
      pressedKey.classList.remove('active');
    } else {
      keyboard.node.classList.add('shift-left');
    }
  } else if (pressedKey.id === 'ShiftRight') {
    keyboard.node.classList.remove('shift-left');
    document.querySelector('#ShiftLeft').classList.remove('active');
    if (document.querySelector('.shift-right') !== null) {
      keyboard.node.classList.remove('shift-right');
      pressedKey.classList.remove('active');
    } else {
      keyboard.node.classList.add('shift-right');
    }
  } else {
    if (document.querySelector('.shift-left') !== null) {
      keyboard.node.classList.remove('shift-left');
      document.querySelector('#ShiftLeft').classList.remove('active');
    }
    if (document.querySelector('.shift-right') !== null) {
      keyboard.node.classList.remove('shift-right');
      document.querySelector('#ShiftRight').classList.remove('active');
    }
  }
}

function mouseUpHandler(event) {
  const pressedKey = event.target.closest('.key');
  if (!pressedKey) return;
  if (pressedKey.id !== 'ShiftLeft'
    && pressedKey.id !== 'ShiftRight'
    && pressedKey.id !== 'CapsLock') pressedKey.classList.remove('active');
}

export { mouseDownHandler, mouseUpHandler };
