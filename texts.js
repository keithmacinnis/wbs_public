const fullText = `  
      x                                                                 x
                                    x
            x
                      /\\           /\\               x    /\\
                     /  \\         /  \\                  /  \\
                    /    \\       /    \\    x           /    \\
                   /      \\   x /      \\              /      \\
         x        /        \\   /        \\     /\\     /        \\  x
                 /          \\ /          \\   /  \\   /          \\
                /            \\            \\ /    \\ /            \\
               /              \\            \\      /              \\
              /                \\            \\    /                \\
             /                  \\            \\  /                  \\
            /                    \\            \\/                    \\

                    Welcome to Whistler Business Solutions!
      
      We specialize in:
        - Business Software 
        - Web Design
        - Marketing
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


  - Business Software 
  - Web Design
  - Marketing

`;
let currentText = window.innerWidth <= 768 ? mobileText : fullText; 

const suggestionText = {
    "Home" : currentText,
    "Need a new website?": "Our team specializes in creating modern, responsive web designs that represent your brand beautifully.",
    "Looking for SEO services?": "Boost your online visibility with our SEO strategies designed to increase your search engine rankings.",
    "Require custom software?": "We develop tailored software solutions to meet your specific business needs, enhancing efficiency and productivity.",
    "Want to improve marketing?": "Let us help you craft marketing campaigns that engage your audience and drive growth.",
    "Need digital solutions?": "From digital strategy to implementation, we provide comprehensive solutions to keep you ahead in the digital space."
};