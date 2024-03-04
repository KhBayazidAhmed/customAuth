# Custom Authentication and Authorization Website

Welcome to our website! This README file will guide you through the features and functionality of our custom authentication and authorization system.

## Overview

Our website provides a custom authentication and authorization system to manage user access to different pages. It consists of two main pages:

1. **Public Page:** Accessible to all users, located at the root path (`/`).
2. **Private Page:** Accessible only to logged-in users, located at the `/private` path.

Additionally, we have dedicated pages for signing up and logging in:

- **Signup Page:** Allows users to create a new account, located at `/sign-up`.
- **Login/Signin Page:** Enables existing users to log in to their accounts, located at `/sign-in`.

## Features

- **Custom Authentication:** We've implemented a custom authentication system to manage user logins securely.
- **Authorization:** Users can only access the private page (`/private`) if they are authenticated.
- **Error Handling:** If users provide invalid credentials during login, the server sends an error message to notify them.

## Usage

1. **Signup:** Visit the `/sign-up` page to create a new account. Provide necessary details such as username, email, and password.
2. **Login:** After signing up, visit the `/sign-in` page to log in with your credentials. If you're an existing user, enter your email and password.
3. **Access Private Page:** Once logged in, you can access the private page (`/private`) to view its content.

## Technologies Used

- **Frontend:** Next JS
- **Backend:** Next JS server Action
- **Database:** MongoDB

## Setup

1. Clone the repository to your local machine.
2. Install dependencies using [package manager]. For example, if using Node.js, run `npm install`.
3. Configure the backend server to connect to your database.
4. Run the server locally. Ensure that the necessary routes (public, private, signup, signin) are properly configured.
5. Access the website through your browser.

## Feedback

If you have any feedback or suggestions, please feel free to [contact us](mailto:khandakerbayazidahmed@email.com). We'd love to hear from you!

Thank you for using our custom authentication and authorization system. We hope you find it useful!
