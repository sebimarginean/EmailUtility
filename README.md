# Email Utility Project

## Overview

This project provides a set of utilities for handling emails within a Node.js application. It includes functionalities for sending basic emails and emails with attachments, as well as specific features tailored towards applying to jobs and contacting through a predefined interface.

## Features

- **Sending Emails**: Core functionality to send emails using Node.js.
- **Sending Emails with Attachments**: Enhanced emailing capability that supports attachments.
- **Job Application Emails**: A specialized controller for handling job application emails.
- **Contact Emails**: A dedicated controller for managing contact emails, likely for inquiries or feedback.

## Technical Details

- **Language**: JavaScript (Node.js)
- **Main Dependencies**: Express.js for routing, nodemailer for email functionalities.

## Structure

- `/controllers`: Contains the controllers for different email functionalities.
  - `applyToJobController.js`: Handles sending emails related to job applications.
  - `contactController.js`: Manages sending contact-related emails.
- `/routes`: Defines the routes for email operations.
  - `emailRoutes.js`: Route definitions for email functionalities.
- `/utils`: Utility scripts for email operations.
  - `sendEmail.js`: Utility for sending basic emails.
  - `sendEmailWithAttachment.js`: Utility for sending emails with attachments.
- `index.js`: The entry point of the application.

## Getting Started

To get started with this project, you'll need Node.js installed on your machine. Once installed, navigate to the project directory and install the dependencies:

```bash
npm install
