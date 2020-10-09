
function loadTheme(theme){
  let css = document.querySelector("#theme");
  
  if(!css) {
    //let head = document.getElementsByTagName('head')[0];
    const head = document.querySelector("head");
    let link = document.createElement('link');
    link.id = "theme";
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = './assets/css/'+theme+'.css';
    //Alternativa
    //let link = `<link rel="stylesheet" href="assets/css/light.css">`
    head.appendChild(link);
  } else {
    css.href = './assets/css/'+theme+'.css';
  }
  
  localStorage.setItem("theme",JSON.stringify(theme));
}

//Inicialment
let tema = JSON.parse(localStorage.getItem("theme"));

if(tema){
  loadTheme(tema);
}