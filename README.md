# Movies GPT

A Netflix-like React application that provides a seamless movie-browsing and streaming-style experience. It integrates TMDB APIs to fetch real-time data such as trending movies, top-rated shows, upcoming releases, and personalized recommendations. The app also features an AI-powered movie suggestion system, where users can enter a query, and OpenAI suggests 5 tailored movies. These suggestions are then individually searched on TMDB to display rich results for each recommended title.

The application includes Firebase Email Authentication, Redux Toolkit for global state management, and React Router DOM for smooth navigation between different sections of the platform. With its modular structure, clean UI, and powerful features, Movies GPT is fast, scalable, and easy to extend.

## Features

- Netflix-style UI with modern look and smooth interactions
- Browse movies & series (Trending, Popular, Top Rated, Upcoming)
- AI-powered movie suggestions using OpenAI
- TMDB integration for high-quality metadata and posters
- Search feature for movies and TV shows
- Firebase Authentication (Email/Password) for secure user login
- Redux Toolkit for optimized state management
- React Router DOM for page routing and navigation
- Fully responsive design for mobile and desktop
- Reusable components and clean folder structure
- Multi-language support (English, Hindi, French, Spanish)

## Tech Stack

- **Frontend**: React, React Router DOM
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Authentication**: Firebase
- **APIs**: TMDB, OpenAI
- **Build Tool**: Create React App

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- TMDB API Key (get from [TMDB](https://www.themoviedb.org/settings/api))
- OpenAI API Key (get from [OpenAI](https://platform.openai.com/api-keys))
- Firebase project (for authentication)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/prarthanapurohit/movies-gpt.git
   cd movies-gpt
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your API keys:
   ```
   REACT_APP_TMDB_KEY=your_tmdb_api_key_here
   REACT_APP_OPENAI_KEY=your_openai_api_key_here
   ```

4. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication with Email/Password provider
   - Update the Firebase config in `src/utils/firebase.js` with your project details

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!



## How AI Suggestions Work

- User enters a query (e.g., "best sci-fi thrillers").
- The query is processed via OpenAI API, which returns 5 movie title suggestions.
- Each of these titles is automatically searched on TMDB.
- The UI displays results with posters, ratings, overviews, and more.



