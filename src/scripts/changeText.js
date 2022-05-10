import { textarea } from './keyboard';

export default function changeText(key, langSwitch) {
  let keyPrint = '';
  let positionStart = textarea.node.selectionStart;
  let positionEnd = textarea.node.selectionEnd;
  let capsLock = false;
  if (document.querySelector('.caps-lock') !== null) capsLock = true;
  if (key.type === 'Symbol') {
    keyPrint = langSwitch === 'eng' ? key.downEng : key.downRu;
    keyPrint = capsLock ? keyPrint.toUpperCase() : keyPrint;
    if (document.querySelector('.shift-left') !== null || document.querySelector('.shift-right') !== null) {
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
