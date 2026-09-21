# Adam Munyendo - Personal Portfolio

A modern, responsive personal portfolio website built with React, Vite, Tailwind CSS, and a Node.js/Express backend with PostgreSQL/MySQL database.

## Features

- Modern dark theme with glassmorphism effects
- Fully responsive (mobile-first design)
- Smooth scroll animations with Framer Motion
- Contact form with backend database storage
- SEO optimized with meta tags and sitemap
- Accessible with ARIA labels and keyboard navigation
- GitHub and LinkedIn integration
- Project showcase with detailed cards
- Developer journey timeline
- Skills visualization

## Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React Icons

### Backend
- Node.js
- Express
- PostgreSQL (or MySQL)
- express-validator
- helmet (security)
- rate-limiter

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL or MySQL database

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/org2025-netizen/adam-portfolio.git
cd adam-portfolio
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Install Backend Dependencies

```bash
cd server
npm install
cd ..
```

### 4. Set Up Database

#### PostgreSQL

1. Create a database:
```sql
CREATE DATABASE portfolio_db;
```

2. The tables will be created automatically when the server starts.

#### MySQL (Alternative)

If you prefer MySQL, follow these steps:

1. Create the database:
```sql
CREATE DATABASE portfolio_db;
```

2. In `server/server.js`, replace:
```javascript
const { initDatabase } = require('./database/init')
```
with:
```javascript
const { initDatabase } = require('./database/init-mysql')
```

3. In `server/routes/contact.js`, replace:
```javascript
const { submitContact, getContacts } = require('../controllers/contactController')
```
with:
```javascript
const { submitContact, getContacts } = require('../controllers/contactController-mysql')
```

4. In `server/database/pool.js`, replace:
```javascript
const { Pool } = require('pg')
```
with:
```javascript
// Use pool-mysql.js instead
```
And rename or update the file to use `pool-mysql.js`.

### 5. Set Environment Variables

Create a `.env` file in the `server` directory:

```env
PORT=3001
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=portfolio_db
DB_USER=postgres
DB_PASSWORD=your_password_here

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173
```

## Running the Application

### Development Mode

1. Start the backend server:
```bash
cd server
npm run dev
```

2. In a new terminal, start the frontend:
```bash
npm run dev
```

3. Open your browser and visit:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3001

### Production Build

1. Build the frontend:
```bash
npm run build
```

2. The built files will be in the `dist` directory.

3. Start the backend:
```bash
cd server
npm start
```

## API Endpoints

### POST /api/contact
Submit a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Hello",
  "message": "This is a test message"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Contact form submitted successfully",
  "data": {
    "id": 1,
    "created_at": "2026-08-24T12:00:00.000Z"
  }
}
```

### GET /api/contact
Get all contact submissions (admin use).

### GET /api/health
Health check endpoint.

## Deployment

### Frontend Deployment (Vercel/Netlify)

1. Push your code to GitHub
2. Connect your repository to Vercel or Netlify
3. Set build command: `npm run build`
4. Set output directory: `dist`

### Backend Deployment (Railway/Render)

1. Push your code to GitHub
2. Connect your repository to Railway or Render
3. Set the root directory to `server`
4. Add environment variables in the dashboard
5. Set start command: `npm start`

### Database Deployment

#### PostgreSQL (Neon/Supabase/Railway)
1. Create a PostgreSQL database
2. Copy the connection URL
3. Update the `.env` file with the production database credentials

#### MySQL (PlanetScale/Railway)
1. Create a MySQL database
2. Copy the connection details
3. Update the `.env` file with the production database credentials

## Project Structure

```
adam-portfolio/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Journey.jsx
│   │   ├── CurrentlyLearning.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── projects.js
│   │   └── skills.js
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── server/
│   ├── routes/
│   │   └── contact.js
│   ├── controllers/
│   │   ├── contactController.js
│   │   └── contactController-mysql.js
│   ├── database/
│   │   ├── pool.js
│   │   ├── pool-mysql.js
│   │   ├── init.js
│   │   └── init-mysql.js
│   ├── middleware/
│   │   └── validate.js
│   ├── server.js
│   ├── .env
│   └── package.json
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## Customization

### Personal Information
Update the following files with your own information:
- `src/data/projects.js` - Your projects
- `src/data/skills.js` - Your skills, experience, education
- `src/components/Hero.jsx` - Hero section content
- `src/components/About.jsx` - About section content
- `src/components/Contact.jsx` - Contact form
- `index.html` - Meta tags and SEO

### Styling
- Edit `tailwind.config.js` to customize colors and animations
- Edit `src/index.css` for global styles

### Social Links
Update the following files with your social links:
- `src/components/Navbar.jsx`
- `src/components/Hero.jsx`
- `src/components/Footer.jsx`

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Adam Munyendo - [LinkedIn](https://www.linkedin.com/in/adam-munyendo-/) - [GitHub](https://github.com/org2025-netizen)