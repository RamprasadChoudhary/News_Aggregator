# News Aggregator Application

## Overview

The News Aggregator Application is a full-stack project designed to provide users with up-to-date news from around the world. Users can view top headlines based on various categories and countries, and access all global news on a single page. This project leverages modern web development technologies and APIs to deliver a seamless and dynamic news reading experience.

## Features

- **User Interface**: Developed using **React.js** for a responsive and interactive user experience.
- **Backend Server**: Built with **Node.js** and **Express.js** to handle API requests and data processing efficiently.
- **News API Integration**: Utilized the **News API** to fetch real-time news articles from various sources worldwide.
- **Dynamic Content**: Display top headlines based on user-selected categories and countries.
- **Global News Access**: Aggregates news from over 1,000 sources, providing comprehensive global coverage.
- **User Engagement**: Customizable news feeds based on user preferences for category and country.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **API**: News API
- **Deployment**: 

## Project Structure

/news-aggregator
│
├── /client # React.js frontend code
│ ├── /public # Public assets
│ └── /src # React components and logic
│    ├── /components # Reusable components
│    ├── /assets # assets 
│ ├── App.js # Main app component
│ └── index.js # Entry point
│
├── /server # Node.js and Express.js backend code
│ └── server.js # Server entry point
│
├── README.md # Project documentation
└── ...


## Functionality

### News Feed
- **Top Headlines**: Display top headlines based on selected categories and countries.
- **Category-Based News**: Users can filter news by categories such as technology, sports, health, etc.
- **Country-Based News**: Users can filter news by country to get localized news content.

### API Integration
- **News API**: Fetch real-time news data from the News API, ensuring users get the latest articles.

### User Interface
- **Responsive Design**: Ensures the application is accessible on various devices, including desktops, tablets, and smartphones.
- **Single Page Application (SPA)**: Provides a seamless browsing experience without page reloads.

## Setup and Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/RamprasadChoudhary/News_Aggregator.git
    cd news-aggregator
    ```

2. **Install Dependencies**:
    - Backend:
      ```bash
      cd server
      npm install
      ```
    - Frontend:
      ```bash
      cd client
      npm install
      ```

3. **Environment Variables**:
    - Create a `.env` file in the root of the `server` directory and add your News API key:
      ```env
      API_KEY=your_news_api_key_here
      ```

4. **Run the Application**:
    - Backend:
      ```bash
      cd server
      node server.js
      ```
    - Frontend:
      ```bash
      cd client
      npm run dev
      ```

5. **Access the Application**:
    - Open your browser and navigate to `http://localhost:3000`.




