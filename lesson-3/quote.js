const replaceQuotes = function(text) {
  if (typeof text != "string") {
    return text;
  } else {
    return text.replace(/\'/g, "\"").replace(/\b\"\b/g, "\'");
  }
}

document.querySelector('button').addEventListener("click", () => {
  document.querySelector('#textarea').value = replaceQuotes(document.querySelector('#textarea').value);
})