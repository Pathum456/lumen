# Lumen - Your Partner for Illuminating Digital Solutions

## Project Overview

Lumen is a modern, responsive single-page application (SPA) built with React and styled using Tailwind CSS. It serves as a professional portfolio website for a digital solutions company based in Galle, Sri Lanka, showcasing services, team, testimonials, and contact information.

The website is designed for a seamless user experience across all devices, featuring smooth scrolling, animations powered by Framer Motion, and a clean, dark-themed aesthetic.

## Features

* **Responsive Design:** Optimized for desktop, tablet, and mobile viewing using Tailwind CSS.
* **Smooth Navigation:** Scroll-to-section navigation for a fluid user experience.
* **Dynamic Content:** Data-driven sections (Services, Team, Testimonials, Social Links) managed from `src/data/siteData.js` for easy updates.
* **Animations:** Engaging scroll-triggered and element animations powered by Framer Motion.
* **Modular Components:** Well-structured React components for easy development and maintenance.
* **Hero Section:** Engaging introduction with a gradient text highlight.
* **Services Section:** Visually appealing display of offerings with custom SVG icons.
* **About Section:** Company vision and mission with a relevant background image.
* **Team Section:** Profiles of core team members with hover effects.
* **Testimonials Carousel:** Automated and navigable client feedback section.
* **Contact Form:** Simple form for inquiries.
* **Footer:** Essential company information and social media links.
* **Company Logo:** Integrated graphical logo for consistent branding across the header.

## Technologies Used

* **React.js:** Frontend library for building user interfaces.
* **Create React App:** Development environment setup.
* **Tailwind CSS:** A utility-first CSS framework for rapid styling.
* **Framer Motion:** A production-ready motion library for React.
* **gh-pages:** For easy deployment to GitHub Pages.

## Project Structure

```
lumen-digital/
├── public/                 # Static assets (images, index.html)
│   └── images/             # Static images for sections (e.g., team-vision.jpg, lumen-logo.png)
├── src/                    # All React source code
│   ├── components/         # Reusable UI components for each section
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── TeamSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── siteData.js     # Centralized content data (site title, nav links, services, team, testimonials, social links & icons)
│   ├── App.js              # Main application component
│   ├── index.css           # Global Tailwind CSS imports and custom styles
│   └── index.js            # React entry point
├── .gitignore              # Specifies intentionally untracked files
├── package.json            # Project dependencies and scripts
├── postcss.config.js       # PostCSS configuration for Tailwind CSS
├── README.md               # This file
└── tailwind.config.js      # Tailwind CSS configuration
```

## Getting Started

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine.

* [Node.js](https://nodejs.org/en/) (comes with npm)
* [yarn](https://classic.yarnpkg.com/en/docs/install/) (optional)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/Pathum456/lumen.git](https://github.com/Pathum456/lumen.git)
    cd lumen-digital
    ```
    *(Replace `Pathum456` and `lumen`)*

2.  **Install dependencies:**

    ```bash
    npm install
    # OR
    yarn install
    ```

3.  **Start the development server:**

    ```bash
    npm start
    # OR
    yarn start
    ```
    This will open the application in your browser at `http://localhost:3000`.

## Customization

1.  **Content:** All textual content, service details, team member information, testimonials, and social links (including their SVG icons) are managed in `src/data/siteData.js`. This file also includes `siteTitle` for consistent brand naming. Simply edit this file to update the website's content.
2.  **Images:**
    * For the main company logo (`lumen-logo.png`), `team-vision.jpg` in `AboutSection.jsx`, and team member profile images (`kaleesha.png`, `nethmina.png`, etc.) in `siteData.js`, place your image files in the `public/images/` folder.
    <!-- * Reference these images in your code using `/images/your-image-name.jpg`. -->
3.  **Styling:** Modify `tailwind.config.js` to extend Tailwind's default theme (colors, fonts, etc.) or add utility classes directly in your JSX components. Global styles are in `src/index.css`.

## Deployment to GitHub Pages

This project is set up for easy deployment to GitHub Pages using the `gh-pages` package.

1.  **Ensure `homepage` is set in `package.json`**:
    Open `package.json` and verify the `homepage` field matches your GitHub Pages URL:
    ```json
    "homepage": "https://pathum456.github.io/lumen/",
    ```
    *(Replace placeholders with your actual GitHub username and repository name.)*

2.  **Run the deploy script:**

    ```bash
    npm run deploy
    # OR
    yarn deploy
    ```
    This command will build your React app and push the `build` directory to a `gh-pages` branch on your GitHub repository.

3.  **Enable GitHub Pages in Repository Settings:**
    * Go to your GitHub repository on GitHub.com.
    * Navigate to **Settings > Pages**.
    * Under "Build and deployment", select **`Deploy from a branch`**.
    * For "Branch", choose **`gh-pages`** and select the `/(root)` folder.
    * Click `Save`.

Your site should be live at the `homepage` URL after a few minutes.

## Contributing

Feel free to fork the repository, make improvements, and submit pull requests.

## License

[MIT License](LICENSE)

---
Made with ❤️ by Lumen Team