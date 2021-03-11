window.addEventListener("mousedown", e => { 
  var composed = e.composedPath();

  for (el of composed){
    if (el.href != undefined){
      window.true_href = el.href;
      break;
    }
  }

}, true);

// TODO 
// contextmenu through button? 

browser.runtime.onMessage.addListener(request => {
  navigator.clipboard.writeText(window.true_href);
});
