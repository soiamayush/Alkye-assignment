# Frontend Assignment - Alkye Services

This project is part of a frontend assignment for Alkye Services, completed on October 10, 2024. The application features user authentication and fetching articles from provided APIs, designed based on the given Figma file and utilizing assets provided by the assignment.

## Table of Contents

- [Overview](#overview)
- [Assignment Brief](#assignment-brief)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Deployed Version](#deployed-version)
- [Authentication Details](#authentication-details)
- [API Integration](#api-integration)
- [License](#license)

## Overview

The project involves user authentication and displaying articles fetched from external APIs. The design follows the Figma link provided in the assignment, and assets were incorporated from the shared Google Drive. All requirements, including page speed optimization, font usage, and responsiveness, were met as per the guidelines.

## Assignment Brief

- **Figma Design**: [Figma Link](https://www.figma.com/file/UUu6m7lno3A0Yj3g0XKVjk/Untitled?type=design&node-id=0%3A1&mode=design&t=wtuFeEfMqN9PVHF3-1)
- **Assets**: [Download Assets](https://drive.google.com/drive/folders/1f4exh1aXLHFgJofBQc-joclNp6j5QnHB?usp=sharing)
- **API Documentation**: [Postman API Documentation](https://documenter.getpostman.com/view/2881670/2sA3BkcsyM)

### Guidelines Followed:

- Correct fonts were used as per the Figma design.
- Page load time for all pages is optimized to be less than 500ms.
- Each page is independent, adhering to the guideline of not creating a single-page application (SPA).
- The application is fully responsive across devices.
- Placeholder text (dummy text) has been used where applicable.

## Technologies Used

- **Next.js**: Framework used for server-side rendering and static generation.
- **Tailwind CSS**: A utility-first CSS framework to create a responsive design.
- **Netlify**: Used for deployment and hosting.
- **Postman**: For API testing and integration.

## Features

- User authentication based on provided credentials.
- Articles fetched and displayed from the provided API.
- Fully responsive layout across different screen sizes.
- Fast page load times optimized below 500ms.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-project.git
   cd your-project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server::

   ```bash
   npm run dev
   ```

4. Open http://localhost:3000 in your browser to view the app.

## Deployment

Deployed Version
The project is deployed on Netlify. You can access the live version here:

```bash
https://alkye-assignment-new.netlify.app/
```

## Authentication Details

Use the following credentials for login:

```bash
Username: testadmin
Password: testadmin
```

## API Integration

All API endpoints provided in the Postman documentation were successfully integrated. Articles are fetched from the API and displayed in the application.
