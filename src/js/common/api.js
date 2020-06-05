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
    let sendText = JSON.stringify({ data });

    if (id) {
      sendText = JSON.stringify({ id, data });
    }

    xhr.send(sendText);
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
    this.xhrRequest("delete", cb, this.url, id, null);
  }

  create(data, cb) {
    this.xhrRequest("post", cb, this.url, null, data);
  }

  restart(cb) {
    const xhr = new XMLHttpRequest();
    xhr.open("get", "http://localhost:4433/api/init/");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.addEventListener("load", (event) => {
      cb(event.target.response);
    });

    xhr.send();
  }
}

export { Api };