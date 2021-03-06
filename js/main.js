document.clear = () => document.body.innerHTML = "";
function q(query){
  return document.querySelector(query);
}
function w(query){
  return document.querySelectorAll(query);
}
function load(url){
  document.clear();
  loading();
  if(url.toLowerCase().startsWith("http://") || url.toLowerCase().startsWith("https://"))
    url = "https://corsbyp.herokuapp.com/" + url;
  fetch(url).then(r => r.text().then(t => {
    document.clear();
    document.write(t);
  }));
}
function loading(){
  document.write("<!DOCTYPE html><html><head><title>Loading...</title></head><body><style>#loading{position:absolute;top:0;bottom:0;left:0;right:0;display:block;margin:auto;}</style><img id='loading' src='assets/loading.gif'></body></html>");
}
