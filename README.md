# Alex Bascevan Profile Website

Welcome to Alex Bascevan's professional portfolio website. This application showcases my software development skills and serves as a platform for demonstrating my projects and technical expertise.

## Project Overview

This project is a Spring Boot-based web application designed to present my software development portfolio. It includes various features like:

- **Profile Page**: Displaying professional achievements and skills.
- **Contact Form**: Allows visitors to send messages, with email functionality integrated.
- **Dynamic Content**: Rendered using Thymeleaf templates.
- **Security**: Ensures that sensitive areas are protected.

## Technologies and Dependencies

The project uses several key technologies and dependencies:

- **Spring Boot**: Core framework for building the application.
  - `spring-boot-starter-data-jpa`: For JPA/Hibernate support.
  - `spring-boot-starter-data-rest`: To expose REST endpoints.
  - `spring-boot-starter-mail`: For email functionality.
  - `spring-boot-starter-security`: For security features.
  - `spring-boot-starter-thymeleaf`: For Thymeleaf template engine.
  - `spring-boot-starter-validation`: For validation support.
  - `spring-boot-starter-web`: For web development.
- **Thymeleaf Extras**:
  - `thymeleaf-extras-springsecurity6`: Integration with Spring Security.
- **Database**:
  - `h2`: In-memory database for development and testing.
- **Lombok**:
  - `lombok`: To reduce boilerplate code.
- **Testing**:
  - `spring-boot-starter-test`: For testing support.
  - `spring-security-test`: For security-related testing.
- **Development Tools**:
  - `spring-boot-devtools`: For development-time enhancements.

## Setup Instructions

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/yourusername/profile-website.git
    cd profile-website
    ```

2. **Build the Project**:

    Make sure you have Maven installed. Build the project with:

    ```bash
    mvn clean install
    ```

3. **Run the Application**:

    Start the application using:

    ```bash
    mvn spring-boot:run
    ```

4. **Access the Application**:

    Open your web browser and go to `http://localhost:8080` to view the portfolio website.

## Configuration

The application uses Spring Boot's default configuration. For email functionality, update the `application.properties` file with your SMTP server details.

Example `application.properties` configuration:

```properties
spring.mail.host=smtp.your-email-provider.com
spring.mail.port=587
spring.mail.username=your-email@example.com
spring.mail.password=your-email-password
