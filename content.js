// Reusable Menu
const menu = `
  (A)I
  (W)ebsites
  (S)oftware
  (M)arketing
  (C)ontact
  -
  (e)xit
`;

// Reusable Headers
const fullHeader = `  
      /█\\    /█\\    /█\\ 
     /░W░\\  /░B░\\  /░S░\\
    /░░█░░\\/░░█░░\\/░░█░░\\
`;
const mobileHeader = `
    /█\\ 
   /░█░\\
  /░░█░░\\
 /       \\/\\
/         \\ \\
`;

// Reusable Footers
const fullFooter = `\n\n${menu}`;
const mobileFooter = `\n\n${menu}`;

// Main content for each section
const homeContentMobile = `
Welcome to Whistler Business Solutions!

Please enjoy our retro interface.
  
Enter the first character of a menu item, and hit enter to navigate.
`;
const homeContent = `
      x                                                                 
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

  Please enjoy our retro interface!
  
  Enter the first character of a menu item, and hit enter to navigate.

`;
const websiteContent = `
   Our team specializes in creating modern, responsive web designs that represent your brand beautifully.

   - Tailored Designs for All Devices
   - E-commerce
   - User Experience Focus
   - Fast & Secure
`;


const softwareContent = `
   We develop tailored software solutions to meet your specific business needs, enhancing efficiency and productivity.

   - API Development & Integrations
   - Scheduling Solutions
   - Continuous Support
`;

const marketingContent = `
   We partnered with marketing experts and can provide:

   - Data-Driven Campaigns
   - Branding and Identity Development
   - Analytics and Optimization
`;

const aiContent = `
   From digital strategy to implementation, we provide comprehensive solutions to keep you ahead in the digital space.

   - AI and Machine Learning Integration
   - Strategic Digital Planning
`;

const contactContent = `
   Keith MacInnis
   keithmacinnis@gmail.com
   902-499-3689
`;

// Now define the suggestionText object with dynamic header and footer based on screen size
const suggestionText = {
    "Home": (isMobile) => `${isMobile ? mobileHeader : ''}${isMobile ? homeContentMobile : homeContent}${isMobile ? mobileFooter : fullFooter}`,
    "AI": (isMobile) => `${isMobile ? mobileHeader : fullHeader}${aiContent}${isMobile ? mobileFooter : fullFooter}`,
    "Website": (isMobile) => `${isMobile ? mobileHeader : fullHeader}${websiteContent}${isMobile ? mobileFooter : fullFooter}`,
    "Software": (isMobile) => `${isMobile ? mobileHeader : fullHeader}${softwareContent}${isMobile ? mobileFooter : fullFooter}`,
    "Marketing": (isMobile) => `${isMobile ? mobileHeader : fullHeader}${marketingContent}${isMobile ? mobileFooter : fullFooter}`,
    "Contact": (isMobile) => `${isMobile ? mobileHeader : fullHeader}${contactContent}${isMobile ? mobileFooter : fullFooter}`,
    "Exit": ()=>``
};