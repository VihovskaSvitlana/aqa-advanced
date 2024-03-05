function textInTimeout(text, timeoutMs) {
  setTimeout(function () {
    console.log(text);
  }, timeoutMs);
}

textInTimeout('test', 5000);
