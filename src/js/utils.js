function getRandomNumber(min, max) {
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}

class AllElements {
  constructor(iDontKnowWhatINeedPutHere) {
    this.WTF = iDontKnowWhatINeedPutHere;
  }

  render(containerId) {
    document.querySelector(`#${containerId}`).innerHTML = this.getTemplate();
  }
}

export { getRandomNumber, AllElements };
