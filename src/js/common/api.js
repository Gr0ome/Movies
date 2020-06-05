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

    const [data, id] = args;

    xhr.send(JSON.stringify({ data, id }));
  }

  getAll(cb) {
    this.xhrRequest("get", cb, this.url);
  }

  get(id, cb) {
    const movieUrl = `${this.url}${id}`;
    this.xhrRequest("get", cb, movieUrl);
  }

  update(id, data, cb) {
    this.xhrRequest("put", cb, this.url, data, id);
  }

  remove(id, cb) {
    this.xhrRequest("delete", cb, this.url, id);
  }

  create(data, cb) {
    this.xhrRequest("post", cb, this.url, data);
  }

  restart(cb) {
    this.xhrRequest("get", cb, "http://localhost:4433/api/init/");
  }
}

export { Api };