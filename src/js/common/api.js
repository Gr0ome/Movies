class Api {
  constructor(url) {
    this.url = url;
  }

  xhrRequest(method, cb, url, ...args) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.addEventListener("load", (event) => {
      cb(JSON.parse(event.target.response));
    });

    const [id, data] = args;

    xhr.send(JSON.stringify({ id, data }));
  }

  getAll(cb) {
    this.xhrRequest("get", cb, this.url);
  }

  get(id, cb) {
    const movieUrl = `${this.url}${id}`;
    this.xhrRequest("get", cb, movieUrl);
  }

  update(id, data, cb) {
    this.xhrRequest("put", cb, this.url, id, data);
  }

  remove(id, cb) {
    this.xhrRequest("delete", cb, this.url, id);
  }

  create(cb) {
    this.xhrRequest("post", cb, this.url);
  }

  restart(cb) {
    this.xhrRequest("get", cb, "http://localhost:4433/api/init/");
  }
}

export { Api };