function getRandomNumber(min, max) {
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}

class Component {
  render(containerId) {
    const DOMElement = document.querySelector(`#${containerId}`);

    if (DOMElement) {
      DOMElement.innerHTML = this.getTemplate();
    }
  }
}

export { getRandomNumber, Component };
