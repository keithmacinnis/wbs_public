document.addEventListener('DOMContentLoaded', () => {
  const text = document.getElementById('ascii-text');
  const userInput = document.getElementById('user-input');
  const inputContainer = document.getElementById('input-container');

  let i = 0;
  let revealText = '';  
  let currentText = suggestionText["Home"](isMobile());

  function updateText() {
    if (i < currentText.split('\n').length) {
      revealText += currentText.split('\n')[i] + '\n';
      text.textContent = revealText;
      i++;
      if (i >= currentText.split('\n').length) {
        inputContainer.style.display = 'flex';
        userInput.focus();
      } else {
        setTimeout(updateText, 50);
      }
    }
  }

  function isMobile() {
    return window.innerWidth <= 768;
  }

  function suggestAutofill(value) {
    const bestMatch = Object.keys(suggestionText).find(item => 
      item.toLowerCase().startsWith(value.toLowerCase())
    );

    if (bestMatch) {
      userInput.value = value + bestMatch.slice(value.length);
      userInput.setSelectionRange(value.length, userInput.value.length);
      userInput.style.color = 'rgba(0, 255, 0, 0.5)';
    } else {
      userInput.value = value;
      userInput.style.color = '#00FF00';
    }
  }

  function handleInput() {
    const value = userInput.value;
    suggestAutofill(value);
  }

  function handleEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const actualInput = userInput.value.slice(0, userInput.selectionStart);
      const match = Object.keys(suggestionText).find(item => 
        item.toLowerCase() === actualInput.toLowerCase() || 
        item.toLowerCase().startsWith(actualInput.toLowerCase())
      );

      if (match) {
        i = 0;
        revealText = '';
        currentText = suggestionText[match](isMobile());
        text.textContent = '';
        inputContainer.style.display = 'none';
        updateText();
      } else {
        text.textContent += `\nNo match found for: "${actualInput}"`;
      }
      userInput.value = '';
      userInput.style.color = '#00FF00';
    }
  }

  function handleBackspace(e) {
    if (e.key === 'Backspace' && userInput.value !== '') {
      userInput.value = '';
      userInput.style.color = '#00FF00';
      e.preventDefault();
    }
  }

  updateText();

  window.addEventListener('resize', () => {
    currentText = suggestionText["Home"](isMobile());
    i = 0;
    revealText = '';
    text.textContent = '';
    updateText();
  });

  userInput.addEventListener('input', handleInput);
  userInput.addEventListener('keypress', handleEnter);
  userInput.addEventListener('keydown', handleBackspace);

  document.body.addEventListener('click', () => {
    if (inputContainer.style.display === 'flex') {
      userInput.focus();
    }
  });
});