import { showMovieTitles, setOptionsIntoSelects } from "./html-fill";

setOptionsIntoSelects();
showMovieTitles();

document.querySelector(".select-button").addEventListener("click", showMovieTitles);
