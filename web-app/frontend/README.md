# Frontend Web Application

This is the frontend part of the web application designed for managing student profiles and admin functionalities.

## Features

- **Login Interface**: Allows students and admins to log in to their respective accounts.
- **Student Profiles**: Students can access their profiles, which include personal information and a personal QR code with timestamps for arrival and departure.
- **Admin Dashboard**: Admins can register students, view all students' timestamps, and manage accounts.
- **QR Code Scanner**: Admins can scan QR codes to track student attendance and send SMS notifications to registered parents when a student enters or departs from a class.

## Project Structure

```
frontend
├── public
│   ├── index.html
│   └── styles.css
├── src
│   ├── components
│   │   ├── Login.tsx
│   │   ├── StudentProfile.tsx
│   │   ├── AdminDashboard.tsx
│   │   └── QRScanner.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   ├── StudentProfilePage.tsx
│   │   └── AdminDashboardPage.tsx
│   ├── App.tsx
│   └── index.tsx
├── package.json
└── tsconfig.json
```

## Getting Started

1. **Clone the repository**:
   ```
   git clone <repository-url>
   ```

2. **Navigate to the frontend directory**:
   ```
   cd frontend
   ```

3. **Install dependencies**:
   ```
   npm install
   ```

4. **Run the application**:
   ```
   npm start
   ```

## Technologies Used

- React
- TypeScript
- CSS for styling

## Contributing

Feel free to submit issues or pull requests for any improvements or bug fixes.