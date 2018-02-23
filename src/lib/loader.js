import {HttpError} from "./HttpError";

export default function (method, url, headers, body, onProgress) {

  return new Promise(function(resolve, reject) {
    const http = new XMLHttpRequest();
    http.open(method, url);
    http.onload = function() {
      if (this.status === 200) {
        resolve(http.response);
      }
      else {
        reject(new HttpError(http.status, http.statusText))
      }
    };

    if (onProgress !== undefined) {
      http.upload.addEventListener('progress', onProgress);
    }

    http.onerror = function() {
      reject(new HttpError(http.status, http.statusText))
    };

    for (const name in headers) {
      if (headers.hasOwnProperty(name)) {
        http.setRequestHeader(name, headers[name])
      }
    }

    http.send(body !== undefined ? body : null);
  })
}