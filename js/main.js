function q(query){
  return document.querySelector(query);
}
function w(query){
  return document.querySelectorAll(query);
}
function load(url){
  fetch(url).then(r => r.text().then(t => {
    document.write(t);
  }););
}
