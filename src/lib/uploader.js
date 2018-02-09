export default function (method, url, headers, body, onProgress) {
  return new Promise(function(resolve, reject) {
    const http = new XMLHttpRequest();
    http.open(method, url);
    http.onload = function() {
      if (this.status === 200) {
        resolve(http.response);
      }
      else {
        reject({
          status: http.status,
          statusText: http.statusText
        });
      }
    };

    http.upload.addEventListener('progress', onProgress);

    http.onerror = function() {
      reject({
        status: http.status,
        statusText: http.statusText
      });
    };
    headers.forEach(function(value, name) {
      http.setRequestHeader(name, value);
    });
    http.send(body);
  })
}