# Alex Bascevan Profile Website

Welcome to the Alex Bascevan Profile Website repository! This project is part of my software development portfolio and showcases a web application with a Spring backend and a React frontend.

## Project Overview

This application features a Spring Boot backend and a React frontend, providing a dynamic and responsive experience. The backend handles API requests and authentication, while the frontend offers an interactive user interface.

## Tech Stack

- **Backend**: Spring Boot
- **Frontend**: React
- **Database**: H2 (for development)
- **Authentication**: Basic HTTP Authentication

## Getting Started

### Prerequisites

- **Java**: Ensure you have JDK 11 or higher installed.
- **Node.js**: Ensure you have Node.js and npm installed.

### Setting Up the Backend

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/profile-website.git
    cd profile-website
    ```

2. Navigate to the backend directory (usually where your `pom.xml` file is located):
    ```bash
    cd backend
    ```

3. Build and run the Spring Boot application:
    ```bash
    ./mvnw spring-boot:run
    ```

    Alternatively, if you're using Windows:
    ```bash
    mvnw.cmd spring-boot:run
    ```

### Setting Up the Frontend

1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```

2. Install the necessary dependencies:
    ```bash
    npm install
    ```

3. Start the React application:
    ```bash
    npm start
    ```

### Running Both Frontend and Backend Simultaneously

1. From the root of your project, run:
    ```bash
    npm start
    ```

    This command will start both the React frontend and the Spring Boot backend concurrently.

## Configuration

- **Backend**: The backend configuration can be found in `src/main/resources/application.properties`. Adjust settings such as database connections and email configurations as needed.

- **Frontend**: Configuration settings for React can be found in `frontend/src/config.js`. Customize API endpoints and other settings based on your environment.

## Features

- Dynamic email sending via a RESTful API.
- Responsive user interface with React.
- Basic HTTP authentication for secured endpoints.

## Troubleshooting

- **Backend Issues**: Check the logs for any errors. Ensure that the Spring Boot application is running on port 8080 by default.
- **Frontend Issues**: Make sure that the React app is correctly configured to communicate with the backend API.

---

Thank you for checking out my project! I hope you find it useful as part of my software development portfolio.
