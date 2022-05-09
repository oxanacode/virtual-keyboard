import keys from './scripts/keys';
import { keyboard, textarea } from './scripts/keyboard';
import './assets/styles/style.scss';

let langSwitch = 'eng'; 
let shiftSwitch = false;
let capsLockSwitch = false;
let shiftLeftSwitch = false;
let shiftRightSwitch = false;

function switchLanguage() {
  langSwitch = langSwitch === 'eng' ? 'ru' : 'eng';
  localStorage.setItem('layout', langSwitch);
  if (langSwitch === 'eng') {
    keyboard.node.classList.remove('layout-ru');
    keyboard.node.classList.add('layout-eng');
  } else {
    keyboard.node.classList.remove('layout-eng');
    keyboard.node.classList.add('layout-ru');
  }
}

if (localStorage.getItem('layout') == null || localStorage.getItem('layout') === 'eng') {
  keyboard.node.classList.add('layout-eng');
  localStorage.setItem('layout', 'eng');
}
if (localStorage.getItem('layout') === 'ru') {
  keyboard.node.classList.add('layout-ru');
  localStorage.setItem('layout', 'ru');
  langSwitch = 'ru';
}

function changeText(key) {
  let keyPrint = '';
  let positionStart = textarea.node.selectionStart;
  let positionEnd = textarea.node.selectionEnd;
  if (key.type === 'Symbol') {
    keyPrint = langSwitch === 'eng' ? key.downEng : key.downRu;
    keyPrint = capsLockSwitch ? keyPrint.toUpperCase() : keyPrint;
    if (shiftSwitch) {
      if (langSwitch === 'eng') {
        if (key.upEng) keyPrint = key.upEng;
        else keyPrint = key.downEng.toUpperCase();
      } else {
        if (key.upRu) keyPrint = key.upRu;
        keyPrint = key.downRu.toUpperCase();
      }
    }
  } else {
    switch (key.code) {
      case 'Tab':
        keyPrint = '\t';
        break;
      case 'Space':
        keyPrint = ' ';
        break;
      case 'Backspace':
        if (textarea.node.value.length
          && positionStart === positionEnd) positionStart -= 1;
        break;
      case 'Enter':
        keyPrint = '\n';
        break;
      case 'Delete':
        if (positionStart === positionEnd) positionEnd += 1;
        break;
      case 'ArrowLeft':
        if (positionStart) {
          positionStart -= 1;
          positionEnd = positionStart;
        }
        break;
      case 'ArrowRight':
        if (positionEnd < textarea.node.value.length) {
          positionEnd += 1;
          positionStart = positionEnd;
        }
        break;
      case 'ArrowUp':
        keyPrint = key.down;
        break;
      case 'ArrowDown':
        keyPrint = key.down;
        break;
      default:
    }
  }
  textarea.node.setRangeText(keyPrint, positionStart, positionEnd, 'end');
}

function keyboardHandler(event) {
  const pressedKey = keys.flat().find((el) => el.code === event.code);
  if (!pressedKey) return;
  event.preventDefault();
  const virtualKey = document.querySelector(`#${pressedKey.code}`);
  if (event.type === 'keydown') {
    virtualKey.classList.add('active');
    changeText(pressedKey);
    textarea.node.focus();

    if (event.code === 'ShiftLeft') {
      shiftSwitch = true;
      shiftLeftSwitch = true;
      shiftRightSwitch = false;
      keyboard.node.classList.add('shift');
      document.querySelector('#ShiftRight').classList.remove('active');
    }
    if (event.code === 'ShiftRight') {
      shiftSwitch = true;
      shiftLeftSwitch = false;
      shiftRightSwitch = true;
      keyboard.node.classList.add('shift');
      document.querySelector('#ShiftLeft').classList.remove('active');
    }
    if (event.key === 'CapsLock') {
      capsLockSwitch = !capsLockSwitch;
      if (capsLockSwitch) {
        keyboard.node.classList.add('caps-lock');
      } else {
        keyboard.node.classList.remove('caps-lock');
        virtualKey.classList.remove('active');
      }
    }
    if (event.code === 'AltLeft' && shiftLeftSwitch) {
      switchLanguage();
      document.querySelector('#ShiftLeft').classList.remove('active');
      shiftLeftSwitch = false;
      shiftSwitch = false;
      keyboard.node.classList.remove('shift');
    }
  } else {
    if (event.key !== 'CapsLock') virtualKey.classList.remove('active');
    if (event.key === 'Shift') {
      shiftSwitch = false;
      shiftLeftSwitch = false;
      shiftRightSwitch = false;
      keyboard.node.classList.remove('shift');
    }
  }
}

window.addEventListener('keydown', keyboardHandler);
window.addEventListener('keyup', keyboardHandler);

keyboard.node.addEventListener('mousedown', (event) => {
  const pressedKey = event.target.closest('.key');
  if (!pressedKey) return;
  event.preventDefault();
  pressedKey.classList.add('active');
  const virtualKey = keys.flat().find((el) => el.code === pressedKey.id);
  changeText(virtualKey);
  textarea.node.focus();

  if (pressedKey.id === 'AltLeft') {
    if (shiftLeftSwitch) switchLanguage();
  }
  if (pressedKey.id === 'CapsLock') {
    capsLockSwitch = !capsLockSwitch;
    if (capsLockSwitch) {
      keyboard.node.classList.add('caps-lock');
    } else {
      keyboard.node.classList.remove('caps-lock');
      pressedKey.classList.remove('active');
    }
  }

  if (pressedKey.id === 'ShiftLeft') {
    document.querySelector('#ShiftRight').classList.remove('active');
    if (shiftLeftSwitch) pressedKey.classList.remove('active');
    shiftRightSwitch = false;
    shiftLeftSwitch = !shiftLeftSwitch;
    shiftSwitch = shiftLeftSwitch;
  } else if (pressedKey.id === 'ShiftRight') {
    document.querySelector('#ShiftLeft').classList.remove('active');
    if (shiftRightSwitch) pressedKey.classList.remove('active');
    shiftLeftSwitch = false;
    shiftRightSwitch = !shiftRightSwitch;
    shiftSwitch = shiftRightSwitch;
  } else {
    shiftSwitch = false;
    if (shiftLeftSwitch) {
      shiftLeftSwitch = false;
      document.querySelector('#ShiftLeft').classList.remove('active');
    }
    if (shiftRightSwitch) {
      shiftRightSwitch = false;
      document.querySelector('#ShiftRight').classList.remove('active');
    }
  }
  if (shiftSwitch)keyboard.node.classList.add('shift');
  else keyboard.node.classList.remove('shift');
});

keyboard.node.addEventListener('mouseup', (event) => {
  const pressedKey = event.target.closest('.key');
  if (!pressedKey) return;
  if (pressedKey.id !== 'ShiftLeft'
    && pressedKey.id !== 'ShiftRight'
    && pressedKey.id !== 'CapsLock') pressedKey.classList.remove('active');
});
