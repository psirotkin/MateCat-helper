var observer = new MutationObserver(onMutation);
observer.observe(document, {
  childList: true, // report added/removed nodes
  subtree: true,   // observe any descendant elements
});

const matchesTab = document.getElementsByClassName('matches');
const machineTranslationHits = document.getElementsByClassName('suggestion-item');
// 

function onMutation(mutations) {
  for (var i = 0, tab; (tab = matchesTab[i]); i++) {
    tab.classList.add('open')
  }
  for (var i = 0, tmHit; (tmHit = machineTranslationHits[i]); i++) {
    if (tmHit.getAttribute("data-id") === "0") {
      tmHit.style.display = "none"
    }
  }
}