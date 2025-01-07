# Portfolio-2

The main goal of this repository is to document three prior submissions from the second year:

- [JavaScript Frameworks project](https://onlineshop-ca.netlify.app/)
- [Semester Project 2](https://fp22fd.github.io/Auction-House-SP2-CA/)
- [Project Exam 2](https://holidaze-booking-ca.netlify.app/)

## Portfolio

[Link to Portfolio](https://fp22fd.github.io/FP22FD-portfolio/)

## Brief

- [CA](docs/brief.png)

## Process

- create a README.md file for each of these projects:

  - [JavaScript Frameworks project](https://github.com/FP22FD/online-shop-CA/blob/main/README.md)
  - [Semester Project 2](https://github.com/FP22FD/Auction-House-SP2-CA/blob/main/README.md)
  - [Project Exam 2](https://github.com/FP22FD/holidaze-booking/blob/main/README.md)

- create a README.md for your profile:
  - [personal GitHub profile](https://github.com/FP22FD)
- create a [portfolio page](https://fp22fd.github.io/FP22FD-portfolio/) that lists the 3 projects with the following format:

  - a list of the the 3 projects as cards
  - each card must have: the project title, the description, a screenshot of what the project looks like while running, and a link to the GitHub repository and a live website if it's online

## Resources

- [Template](https://github.com/NoroffFEU/portfolio-1-example/blob/main/README.md)
- [GitHub guide](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme)

## Marking criteria

- can correctly document a project
- can create a personal GitHub profile README
- has created a personal portfolio webpage

## Development Setup

### Prerequisites

Ensure the following tools are installed on your system:

- [Node.js and npm](https://nodejs.org/)
- [Git](https://git-scm.com/)

### Clone the Repository

1. Clone the repository and navigate to the project folder:

   ```bash
   git clone https://github.com/FP22FD/FP22FD-portfolio.git
   cd FP22FD-portfolio

   ```

2. Install the required dependencies

   ```bash
   npm install

   ```

3. Start Development Server

   ```bash
   npm run dev

   ```

4. Generate a production-ready build

   ```bash
   npm run build
   ```

### Deploying to GitHub Pages

1. Open the Settings of this repository on GitHub.
2. Go to Pages under the Code and Automation tab.
3. Select the gh-pages (or main) branch and the /root directory for deployment.
4. Save changes and wait for the deployment to complete.

### Automated Deployment Using gh-pages

1. Install the gh-pages package

   ```bash
   npm install gh-pages --save-dev

   ```

2. Add the following scripts to `package.json`:

   ```json
   {
     "homepage": "https://fp22fd.github.io/FP22FD-portfolio/",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Deploy using:

   ```bash
   npm run predeploy
   npn run deploy
   ```

## New Feature: Hotjar Integration

This portfolio website includes [Hotjar](https://www.hotjar.com/) integration to enhance user experience tracking and analysis.  
Hotjar allows us to:

- Analyze User Behavior: Understand how users interact with the portfolio.
- Collect Feedback: Identify usability issues and improve the design iteratively.
- Heatmaps and Session Recordings: Gain insights into user navigation patterns.

### How It Works

- The Hotjar script is implemented globally in the project via a `Hotjar` React component.
- This component initializes Hotjar with a unique `hjid` (Hotjar ID) to connect it to the account.
- It is included at the root of the application, ensuring it tracks user activity on all pages.

### How to Replace the Hotjar ID

1. Open the `Hotjar.tsx` file in `src/components`.
2. Replace `5259025` with the unique ID provided by your Hotjar account.

```tsx
h._hjSettings = { hjid: YOUR_HOTJAR_ID, hjsv: 6 };
```
