export default class DomElement {
  constructor(parentNode, tagName, className = '') {
    const element = document.createElement(tagName);
    element.className = className;
    parentNode.append(element);
    this.node = element;
  }
}
