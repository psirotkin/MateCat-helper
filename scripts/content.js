var observer = new MutationObserver(onMutation);
observer.observe(document, {
  childList: true, // report added/removed nodes
  subtree: true,   // observe any descendant elements
});

const matchesTab = document.getElementsByClassName('matches');
const suggestionItems = document.getElementsByClassName('suggestion-item');
const grayedOutColor = '#bbb';
const primaryButtons = document.getElementsByClassName('ui primary button');
const secondaryButtons = document.getElementsByClassName('ui button cancel-button');
const okButtons = document.getElementsByClassName('btn-ok');
const cancelButtons = document.getElementsByClassName('btn-cancel');

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

  [[primaryButtons, 'Y'], [secondaryButtons, 'N'], [okButtons, 'Y'], [cancelButtons, 'N']].forEach(buttonKeyPair => {
    if (buttonKeyPair[0].length && !buttonKeyPair[0][0].textContent.endsWith(` (Alt+${buttonKeyPair[1]})`)) {
      buttonKeyPair[0][0].textContent += ` (Alt+${buttonKeyPair[1]})`;
    }
  });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.command == 'yes') {
    if (!primaryButtons.length && !okButtons.length) return;
    if (primaryButtons.length) primaryButtons[0].click();
    if (okButtons.length) okButtons[0].click();
  } else if (request.command == 'no') {
    if (!secondaryButtons.length && !cancelButtons.length) return;
    if (secondaryButtons.length) secondaryButtons[0].click();
    if (cancelButtons.length) cancelButtons[0].click();
  }
});
