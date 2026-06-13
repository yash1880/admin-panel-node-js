# Zeta Admin Panel

Simple admin dashboard built with Node.js, Express, and EJS.

## Features

- Express.js web server
- EJS template engine
- Static files served from `public/`
- Routes managed in `routes/adminRoutes.js`
- 404 handling included

## Install

1. Open the project folder:
   ```bash
   cd "d:\Node JS\Darkpan Admin Panel"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Run

```bash
npm start
```

Open in browser:

```text
http://localhost:9000/dashboard
```

## Folder structure

- `app.js` - main entry point
- `config/db.js` - database connection (if configured)
- `routes/adminRoutes.js` - application routes
- `controller/adminController.js` - business logic
- `view/` - EJS templates
- `public/` - CSS, JS, images

## Note

If your app tries to connect using `db.js` and you do not have MongoDB or another database configured, check `config/db.js` or temporarily comment out the connection.

