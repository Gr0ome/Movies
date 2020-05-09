function getRandomNumber(min, max) {
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}

// eslint-disable-next-line import/prefer-default-export
export { getRandomNumber };

// export default getRandomNumber;
