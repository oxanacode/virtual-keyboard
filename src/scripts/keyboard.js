import DomElement from './newDomElement';
import keys from './keys';

const title = new DomElement(document.body, 'h1', 'main-title');
const mainContainer = new DomElement(document.body, 'div', 'main-container');
title.node.textContent = 'Virtual Keyboard';
const textarea = new DomElement(mainContainer.node, 'textarea', 'textarea');
const subtitle = new DomElement(document.body, 'h3', 'subtitle');
subtitle.node.innerText = 'OS Windows\n Language switch: (left) Shift + Alt';

const keyboard = new DomElement(mainContainer.node, 'div', 'keyboard');
for (let i = 0; i < keys.length; i += 1) {
  const keyboardRow = new DomElement(keyboard.node, 'div', 'keyboard-row');
  keys[i].forEach((key) => {
    const keyElement = new DomElement(keyboardRow.node, 'div', 'key');
    keyElement.node.id = key.code;
    if (key.type === 'Function') {
      keyElement.node.classList.add('key_function');
      keyElement.node.innerHTML = `<span class="down">${key.down}</span>`;
    }
    if (key.specialSize !== undefined) {
      if (key.specialSize === 1) keyElement.node.classList.add('key_size-wide');
      else keyElement.node.classList.add('key_size-space');
    }
    if (key.type === 'Symbol') {
      keyElement.node.innerHTML = `<span class="eng-down">${key.downEng}</span>`;
      if (key.upEng !== undefined) keyElement.node.innerHTML += `<span class="eng-up">${key.upEng}</span>`;
      if (key.downRu !== undefined) keyElement.node.innerHTML += `<span class="ru-down">${key.downRu}</span>`;
      if (key.upRu !== undefined) keyElement.node.innerHTML += `<span class="ru-up">${key.upRu}</span>`;
    }
    if (key.letter) keyElement.node.classList.add('letter');
  });
}

export { keyboard, textarea };
