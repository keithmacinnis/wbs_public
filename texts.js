// Reusable Menu
const menu = `
(A)I
(W)ebsite
(S)oftware
(M)arketing
(C)ontact
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
Welcome to Whistler Business Solutions
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

                    Welcome to Whistler Business Solutions
`;
const websiteContent = `
   Our team specializes in creating modern, responsive web designs that represent your brand beautifully.

   - Tailored Designs for All Devices
   - User Experience Focus
   - Fast, Secure, and SEO-Optimized Sites
`;

const seoContent = `
   Boost your online visibility with our SEO strategies designed to increase your search engine rankings.

   - Keyword Research and Optimization
   - Content Strategy Development
   - Backlink Building
   - Performance Tracking
`;

const softwareContent = `
   We develop tailored software solutions to meet your specific business needs, enhancing efficiency and productivity.

   - Custom Development from Scratch
   - Integration with Existing Systems
   - Scalable Solutions
   - Continuous Support and Updates
`;

const marketingContent = `
   Let us help you craft marketing campaigns that engage your audience and drive growth.

   - Multi-Channel Marketing Strategies
   - Data-Driven Campaigns
   - Branding and Identity Development
   - Analytics and Optimization
`;

const digitalContent = `
   From digital strategy to implementation, we provide comprehensive solutions to keep you ahead in the digital space.

   - Strategic Digital Planning
   - E-commerce Solutions
   - Digital Transformation
   - AI and Machine Learning Integration
`;

const contactContent = `
  Keith MacInnis
  keithmacinnis@gmail.com
  902-499-3689
`;

// Now define the suggestionText object with dynamic header and footer based on screen size
const suggestionText = {
    "Home": (isMobile) => `${isMobile ? mobileHeader : ''}${isMobile ? homeContentMobile : homeContent}${isMobile ? mobileFooter : fullFooter}`,
    "AI": (isMobile) => `${isMobile ? mobileHeader : fullHeader}${digitalContent}${isMobile ? mobileFooter : fullFooter}`,
    "Website": (isMobile) => `${isMobile ? mobileHeader : fullHeader}${websiteContent}${isMobile ? mobileFooter : fullFooter}`,
    "Software": (isMobile) => `${isMobile ? mobileHeader : fullHeader}${softwareContent}${isMobile ? mobileFooter : fullFooter}`,
    "Marketing": (isMobile) => `${isMobile ? mobileHeader : fullHeader}${marketingContent}${isMobile ? mobileFooter : fullFooter}`,
    "Contact": (isMobile) => `${isMobile ? mobileHeader : fullHeader}${contactContent}${isMobile ? mobileFooter : fullFooter}`,
};