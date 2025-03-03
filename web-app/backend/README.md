# Backend Web Application

This is the backend component of the web application designed for managing student profiles and admin functionalities.

## Features

- **User Authentication**: Students and admins can log in to access their respective dashboards.
- **Student Profiles**: Students can view and manage their personal information and QR codes with timestamps for arrival and departure.
- **Admin Dashboard**: Admins can register students, view all students' timestamps, and manage QR code scanning.
- **SMS Notifications**: Admins can send SMS notifications to registered parents when students enter or depart from classes.

## Project Structure

```
backend
├── src
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── services
│   ├── app.ts
│   └── types
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd backend
   ```

3. Install dependencies:
   ```
   npm install
   ```

## Running the Application

To start the backend server, run:
```
npm start
```

The server will be running on `http://localhost:3000`.

## API Endpoints

- **Authentication**
  - POST `/api/auth/login`: Log in a user.
  - POST `/api/auth/register`: Register a new user.

- **Student Management**
  - GET `/api/students`: Retrieve all students.
  - GET `/api/students/:id`: Retrieve a specific student profile.
  - POST `/api/students`: Register a new student.

- **Admin Functions**
  - GET `/api/admin/timestamps`: View all students' timestamps.
  - POST `/api/admin/scan`: Handle QR code scanning and send SMS notifications.

## Technologies Used

- Node.js
- Express.js
- TypeScript
- MongoDB (or any other database of choice)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License.