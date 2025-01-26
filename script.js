document.addEventListener('DOMContentLoaded', () => {
  const text = document.getElementById('ascii-text');
  const userInput = document.getElementById('user-input');
  const inputContainer = document.getElementById('input-container');
  const suggestions = document.getElementById('suggestions');

  let i = 0;
  let revealText = '';  
  let currentText = suggestionText["Home"](isMobile()); // Use the new function format

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

  function isMobile() {
      return window.innerWidth <= 768;
  }

  updateText();

  // Handle screen resize
  window.addEventListener('resize', () => {
    // Re-fetch currentText with the new screen size
    currentText = suggestionText["Home"](isMobile());
    i = 0;
    revealText = '';
    text.textContent = '';
    updateText();
  });

  const suggestionList = Object.keys(suggestionText);

  // Function to show suggestions when user starts typing
  userInput.addEventListener('input', function() {
    if (this.value.length > 0) {
      suggestions.style.display = 'block';
      suggestions.innerHTML = '';
      suggestionList.forEach(item => {
        const li = document.createElement('li');
        const highlighted = item.replace(new RegExp(this.value, 'gi'), match => `<span style="background-color: rgba(0, 255, 0, 0.3);">${match}</span>`);
        li.innerHTML = highlighted;
        li.addEventListener('click', () => {
          this.value = item;
          suggestions.style.display = 'none';
          i = 0;
          revealText = '';
          currentText = suggestionText[item](isMobile()); // Use the function call with isMobile()
          text.textContent = '';
          inputContainer.style.display = 'none'; // Hide input while new text is revealed
          updateText();
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
      // Look for exact matches first, then partial matches
      let match = suggestionList.find(item => 
        item.toLowerCase() === this.value.toLowerCase() || 
        item.toLowerCase().startsWith(this.value.toLowerCase())
      );

      if (match) {
        i = 0;
        revealText = '';
        currentText = suggestionText[match](isMobile()); // Use the function call with isMobile()
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