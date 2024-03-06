## CodeBeetle APP

## Usage

Welcome to our Ticket Submission and Management App! This application is designed to streamline the process of submitting, assigning, and tracking tickets for software development projects. Whether you're a staff member reporting an issue, a developer working on tickets, or an admin overseeing the process, this app provides a centralized platform for efficient ticket management. Below, you'll find comprehensive information on how to set up and utilize the CodeBeetle App effectively.

## Features

User Authentication: Secure user authentication system ensures only authorized personnel can access the app.
Role-Based Access Control: Granular access control based on user roles (staff, developers, admins) to manage permissions effectively.
Report Submission: Staff members can submit tickets detailing issues, feature requests, or tasks that need attention.
Ticket Assignment: Admins can assign tickets to developers based on their expertise and workload.
Ticket Status Tracking: Track the progress of tickets as they move through various stages (e.g., in progress, completed) to ensure timely resolution.
Installation
To install the frontend, follow these steps:

## Configurations

Clone this repository by running the following command:

- Clone repository:

```bash
   git clone https://github.com/reggiecheston/capstone-front-end.git
```

- Navigate to the cloned directory:

```bash
cd capstone-front-end

```

- Install dependencies:

```bash
    npm install
```

- Run application:

```bash
    npm start
```

The app will run in the development mode. Open http://localhost:3000 to view it in your browser. The page will reload when you make changes, and you'll also see any lint errors in the console.

## Testing

Cypress End-to-End Testing

We use Cypress for end-to-end testing to ensure the functionality of our application across different scenarios. To run Cypress tests locally, follow these steps:

Ensure the frontend server is running. If not, start it using the following command:

```bash
npm start
```

In a new terminal window, navigate to the project directory.
Run Cypress using the following command: npm run cypress:open
Cypress Test Runner will open. Click on any test file to run the tests.

You can also run tests in headless mode using the following command:

```bash
npm run cypress:run
```

View test results and logs in the terminal or Cypress dashboard.

Make sure to regularly run Cypress tests to verify the integrity of the application's functionality and catch any regressions early in the development process.

For more information on writing and organizing Cypress tests, refer to the Cypress documentation.

## Backend Repository

Backend Repository
If you'd like to integrate the frontend with the backend, you'll need to set up and run the backend server separately. The backend repository for this project can be found at: https://github.com/reggiecheston/capstone-back-end.git

Clone the backend repository and follow the instructions in its README to set up and run the backend server. Once the backend server is running, you can configure the frontend to communicate with it by updating the relevant configuration settings.
