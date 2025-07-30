# Rentify – Full-Stack Rental Property Platform

Rentify is a full-stack web application inspired by Airbnb. It allows users to browse and book rental properties, and lets hosts list their properties for rent. This project is built using **React.js** on the frontend and **Spring Boot (Java)** on the backend, with **MySQL** as the database.

---

##  Key Features

###  User Side:
- View all available properties
- Book rental listings
- View property details

###  Host Side:
- Add new properties
- View listed properties
- Manage bookings (future enhancement)

---

##  Tech Stack

| Layer       | Technology                |
|-------------|----------------------------|
| Frontend    | React, Axios, HTML, CSS    |
| Backend     | Spring Boot, Spring Data JPA |
| Database    | MySQL                      |
| Build Tools | Maven, npm                 |

---

##  How to Run the Project Locally

###  Backend (Spring Boot)
1. Create a MySQL database named `rentify`
2. Update DB credentials in `application.properties`
3. Run the backend:
   ```bash
   mvn spring-boot:run
