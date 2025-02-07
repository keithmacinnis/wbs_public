document.addEventListener('DOMContentLoaded', () => {
  const text = document.getElementById('ascii-text');
  const userInput = document.getElementById('user-input');
  const inputContainer = document.getElementById('input-container');
  const typeSound = document.getElementById('typeSound');

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
        text.scrollTop = text.scrollHeight;
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
    if (value.length > 0) {
      typeSound.currentTime = 0;
      typeSound.play();
    }
  }

  function handleEnter(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      e.preventDefault();
      const actualInput = userInput.value.slice(0, userInput.selectionStart);

      const match = Object.keys(suggestionText).find(item => 
        item.toLowerCase() === actualInput.toLowerCase() || 
        item.toLowerCase().startsWith(actualInput.toLowerCase())
      );
      if (match) {
        if (match === "Exit") handleExit();
        i = 0;
        revealText = '';
        currentText = suggestionText[match](isMobile());
        text.textContent = '';
        updateText();
      } else {
        text.textContent += `\nNo match found for: "${actualInput}"`;
        inputContainer.style.display = 'flex';
        userInput.focus();
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

  function handleExit() {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      console.log("No history to navigate");
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

  window.addEventListener('resize', () => {
    document.body.style.height = window.innerHeight < 500 ? `${window.innerHeight}px` : '100vh';
  });
});
