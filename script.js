document.addEventListener('DOMContentLoaded', () => {
  const text = document.getElementById('ascii-text');
  const userInput = document.getElementById('user-input');
  const inputContainer = document.getElementById('input-container');
  const suggestions = document.getElementById('suggestions');

  let i = 0;
  let revealText = '';  
  let currentText = window.innerWidth <= 768 ? mobileText : fullText; // Mobile detection based on screen width

  function updateText() {
      if (i < currentText.split('\n').length) {
          let lines = currentText.split('\n');
          revealText += lines[i] + '\n';
          text.textContent = revealText;
          i++;
          if (i >= currentText.split('\n').length) {
              inputContainer.style.display = 'flex'; // Show input when text reveal is done
              userInput.focus(); // Focus on input when it appears
          } else {
              setTimeout(updateText, 50); // Adjust this value for animation speed
          }
      }
  }

  updateText();

  // Handle screen resize
  window.addEventListener('resize', () => {
    let newText = window.innerWidth <= 768 ? mobileText : fullText;
    if (newText !== currentText) {
      currentText = newText;
      i = 0;
      revealText = '';
      text.textContent = '';
      updateText();
    }
  });

  const suggestionList = Object.keys(suggestionText);

  // Function to show suggestions when user starts typing
  userInput.addEventListener('input', function() {
    if (this.value.length > 0) {
      suggestions.style.display = 'block';
      suggestions.innerHTML = '';
      suggestionList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.addEventListener('click', () => {
          this.value = item;
          suggestions.style.display = 'none';
        });
        suggestions.appendChild(li);
      });
    } else {
      suggestions.style.display = 'none';
    }
  });

  // Handle user input when Enter is pressed
  userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      let match = suggestionList.find(item => item.toLowerCase().includes(this.value.toLowerCase()));
      if (match) {
        i = 0;
        revealText = '';
        currentText = suggestionText[match];
        text.textContent = '';
        inputContainer.style.display = 'none'; // Hide input while new text is revealed
        updateText();
      } else {
        text.textContent += `\nNo match found for: "${this.value}"`;
      }
      this.value = ''; // Clear the input
    }
  });

  // Focus on input when clicking anywhere on the page
  document.body.addEventListener('click', () => {
    if (inputContainer.style.display === 'flex') {
      userInput.focus();
    }
  });
});