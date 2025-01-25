document.addEventListener('DOMContentLoaded', () => {
  const text = document.getElementById('ascii-text');

  const fullText = `  
      x                                                                 x
                                     
            x
                      /\\           /\\               x    /\\
                     /  \\         /  \\                  /  \\
                    /    \\       /    \\    x           /    \\
                   /      \\     /      \\              /      \\
         x        /        \\   /        \\     /\\     /        \\  x
                 /          \\ /          \\   /  \\   /          \\
                /            \\            \\ /    \\ /            \\
               /              \\            \\      /              \\
              /                \\            \\    /                \\
             /                  \\            \\  /                  \\
            /                    \\            \\/                    \\

                    Welcome to Whistler Business Solutions
      

        Business Software 
        Web Design
        Marketing

        How can we help you today?
  `;

  const mobileText = `
        /█\\
       /░█░\\
      /░░█░░\\
     /░░░█░░░\\
    /░░░░ ░░░░\\
   /░░░░   ░░░░\\
   
  W H I S T L E R
  B U S I N E S S
 S O L U T I O N S


  Business Software 
  Web Design
  Scheduling

`;
  
let i = 0;
let revealText = '';  
let currentText = window.innerWidth <= 768 ? mobileText : fullText; // Mobile detection based on screen width

function updateText() {
    if (i < currentText.split('\n').length) {
        let lines = currentText.split('\n');
        revealText += lines[i] + '\n';
        text.textContent = revealText;
        i++;
        setTimeout(updateText, 50); // Adjust this value for animation speed
    }
}

// Function to handle screen resize
function handleResize() {
  let newText = window.innerWidth <= 768 ? mobileText : fullText;
  
  // Check if the text has changed due to screen size change
  if (newText !== currentText) {
    currentText = newText;
    i = 0; // Reset the counter
    revealText = ''; // Reset the reveal text
    text.textContent = ''; // Clear the displayed text
    updateText(); // Restart the animation
  }
}

// Initial call to updateText
updateText();

// Add event listener for window resize
window.addEventListener('resize', handleResize);
});