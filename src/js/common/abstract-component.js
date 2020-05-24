class AbstractComponent {
  render(selector) {
    const DOMElement = document.querySelector(selector);

    if (DOMElement) {
      DOMElement.innerHTML = this.getTemplate();
    }
  }

  show(elem) {
    elem.classList.remove("hidden");
  }

  hide(elem) {
    elem.classList.add("hidden");
  }
}

export { AbstractComponent };