# WattWayZ Website

![WattWayZ](https://placehold.co/800x200/22c55e/ffffff?text=WattWayZ&font=sans)

Welcome to the official repository for the WattWayZ website. WattWayZ is a modern web platform designed to simplify the electric vehicle (EV) charging experience in India. It serves as a unified hub for EV drivers to find, reserve, and pay for charging, and for station owners to list and manage their charging points.

---

## ✨ Features

- **Real-Time Station Map:** Discover available EV charging stations nearby or along a planned route.
- **Advance Reservations:** Book a charging slot in advance to avoid queues and uncertainty (at partner stations).
- **Seamless User Experience:** A clean, responsive, and mobile-first design ensures a great experience on any device.
- **Station Owner Portal:** A dedicated interface for station owners to list their chargers, manage availability, and view usage.
- **Built with Modern Tech:** A fast and maintainable frontend built with React and standard web technologies.

---

## 💻 Tech Stack

This project is built using a modern and scalable frontend stack:

- **[React](https://reactjs.org/):** A JavaScript library for building user interfaces.
- **[CSS Modules](https://github.com/css-modules/css-modules):** For locally scoped, conflict-free CSS styling.
- **[Lucide React](https://lucide.dev/):** A beautiful and consistent icon library.
- **[Create React App](https://create-react-app.dev/):** The project was bootstrapped using this industry-standard tool.

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **[Node.js](https://nodejs.org/)** (which includes npm, the Node Package Manager). It is recommended to use the latest LTS (Long-Term Support) version.

You can check if you have them installed by running these commands in your terminal:

````sh
node -v
npm -v


### Installation & Setup

1.  **Clone the repository**
    Open your terminal and clone the project to your local machine.
    ```sh
    git clone [https://github.com/your-username/wattwayz-website.git](https://github.com/your-username/wattwayz-website.git)
    ```

2.  **Navigate to the project directory**
    ```sh
    cd wattwayz-website
    ```

3.  **Install dependencies**
    Run the following command to install all the necessary packages defined in `package.json`.
    ```sh
    npm install
    ```

### Running the Application

Once the installation is complete, you can start the development server.

1.  **Start the server**
    ```sh
    npm start
    ```

2.  **View in browser**
    This command will run the app in development mode and automatically open your default web browser to [http://localhost:3000](http://localhost:3000).

The page will reload automatically if you make any edits to the source files.

---

Of course. Here is the remainder of the README.md file content, starting from the "Folder Structure" section.
Markdown
---

## 📁 Folder Structure

The project follows a standard Create React App structure with some logical organization for scalability:



wattwayz-website/
├── public/ # Static assets, index.html, favicon
├── src/
│ ├── assets/ # SVG logos, images, and other static assets
│ ├── components/ # Reusable shared components (Button, Header, etc.)
│ ├── pages/ # Page-level components (HomePage, FAQPage, etc.)
│ └── styles/ # Global CSS styles and variables
│ ├── App.js # Main application component and routing logic
│ └── index.js # Entry point of the application
├── .gitignore # Files and folders to be ignored by Git
├── package.json # Project dependencies and scripts
└── README.md # This file

---

## 📦 Building for Production

To create an optimized production build of the application:

1.  **Run the build script**
    ```sh
    npm run build
    ```

2.  This will create a `build` folder in your project directory with all the static files needed for deployment. You can then deploy this `build` folder to any static hosting service (like Netlify, Vercel, or AWS S3).

---
*This README was last updated on June 15, 2025.*




````
