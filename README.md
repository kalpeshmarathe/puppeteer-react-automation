﻿# puppeteer-react-automation



# Puppeteer React Component Automation

This project demonstrates how to automate the interaction with a React component using Puppeteer. It provides an example script that navigates to a website and performs various actions on the page, such as selecting tokens and interacting with components.

## Getting Started

### Prerequisites

- Node.js (version v18.13.0 or higher)
- npm (version 9.7.1 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kalpeshmarathe/puppeteer-react-automation.git

2. Navigate to the project directory:

    cd puppeteer-react-automation

3. Install the dependencies:

    npm install


USAGE 

4. Run the script:

    npm start


        - This will launch Puppeteer, open a browser window, and automate the interaction with the React components on the target website.

        - Wait for the script to complete its actions. You can observe the browser window to see the interactions in real-time.

        - Once the script finishes, the browser will be closed automatically.


Customization

        To change the target website, modify the URL in the page.goto() function call in the script (puppeteer.js file).

        Adjust the selectors used to identify the components based on the structure of the target website. Update the selector strings in the script to match the desired elements.

        Customize the actions performed on the components by adding or modifying the Puppeteer API calls in the script. Refer to the Puppeteer documentation for more information on available methods.

