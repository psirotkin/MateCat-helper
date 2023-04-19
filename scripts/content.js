var observer = new MutationObserver(onMutation);
observer.observe(document, {
  childList: true, // report added/removed nodes
  subtree: true,   // observe any descendant elements
});

const matchesTab = document.getElementsByClassName('matches');
const suggestionItems = document.getElementsByClassName('suggestion-item');
const grayedOutColor = '#bbb';

function onMutation(mutations) {
  for (var i = 0, tab; (tab = matchesTab[i]); i++) {
    tab.classList.add('open');
  }

  for (var j = 0, tmHit; (tmHit = suggestionItems[j]); j++) {
    var tmDescription = tmHit.children[2].textContent;
    if (tmDescription.includes('MT') || tmDescription.includes('Public')) {
      tmHit.children[0].children[0].style.color = grayedOutColor;
      tmHit.children[1].children[1].style.color = grayedOutColor;
      tmHit.children[2].children[2].children[0].style.color = grayedOutColor;
      tmHit.children[2].children[3].children[0].style.color = grayedOutColor;
    }
  }
}
