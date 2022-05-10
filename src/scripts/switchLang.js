import { keyboard } from './keyboard';

export default function switchLanguage() {
  let langSwitch = window.localStorage.getItem('layout');
  langSwitch = langSwitch === 'eng' ? 'ru' : 'eng';
  window.localStorage.setItem('layout', langSwitch);
  if (langSwitch === 'eng') {
    keyboard.node.classList.remove('layout-ru');
    keyboard.node.classList.add('layout-eng');
  } else {
    keyboard.node.classList.remove('layout-eng');
    keyboard.node.classList.add('layout-ru');
  }
}
