let locationUrl = "" + location;
let movieIdIndex = locationUrl.indexOf("?id=") + 4;
let movieId = locationUrl.slice(movieIdIndex);

document.title = movies[movieId].name;
