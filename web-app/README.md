# Web Application for Student and Admin Management

This web application is designed to facilitate the management of student profiles and admin functionalities. It features a login interface for both students and admins, allowing for easy access to personal information and administrative tasks.

## Features

- **User Authentication**: Secure login for students and admins.
- **Student Profiles**: Students can view and manage their personal information and QR codes with timestamps for arrival and departure.
- **Admin Dashboard**: Admins can register students, view all students' timestamps, and manage QR code scanning.
- **QR Code Scanner**: Admins can scan QR codes to track student attendance and send SMS notifications to registered parents upon student entry or departure.

## Project Structure

```
web-app
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── services
│   │   ├── app.ts
│   │   └── types
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── frontend
│   ├── public
│   │   ├── index.html
│   │   └── styles.css
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
└── README.md
```

## Installation

1. Clone the repository.
2. Navigate to the `backend` directory and run `npm install` to install backend dependencies.
3. Navigate to the `frontend` directory and run `npm install` to install frontend dependencies.
4. Start the backend server and frontend application.

## Usage

- **Students**: Log in to access your profile and view your QR code.
- **Admins**: Log in to manage student registrations and view attendance records.

## Technologies Used

- Node.js
- Express.js
- TypeScript
- React
- QR Code Generation and Scanning Libraries
- SMS Notification Service

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.