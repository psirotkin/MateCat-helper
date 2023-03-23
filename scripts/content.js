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
}

window.addEventListener('load', function() {
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule('ul.suggestion-item:has(.per-yellow) {display: none;}');
  styleSheet.insertRule('sugg-target graysmall-message {display: none;}'); // Hide the keyboard shortcut when we hide MT rows
});