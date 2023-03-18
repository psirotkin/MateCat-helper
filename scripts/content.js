var observer = new MutationObserver(onMutation);
observer.observe(document, {
  childList: true, // report added/removed nodes
  subtree: true,   // observe any descendant elements
});

const matchesTab = document.getElementsByClassName('matches');

function onMutation(mutations) {
  for (var i = 0, tab; (tab = matchesTab[i]); i++) {
    tab.classList.add('open')
  }
}