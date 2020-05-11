// // Наполенине select'ов опциями
// function setOptionsIntoSelects() {
//   function genresOptionFill(property, propertyArray) {
//     const querySelectorId = `#${property}-sel`;
//     const selectElement = document.querySelector(querySelectorId);

//     for (const prop in propertyArray) {
//       selectElement.options[selectElement.options.length] = new Option(
//         propertyArray[prop],
//         prop,
//       );
//     }
//   }
//   genresOptionFill("genre", movieGenres);
//   genresOptionFill("languages", movieLaguages);
//   genresOptionFill("price", moviePrice);
//   document.querySelector("#price-sel").options[2].text = "Платно";
// }

// class Filters {
//   constructor(){

//   }
// }