# Building the Node.js Application

## Objective

Create a simple Express.js web application that will later be containerized using Docker and deployed automatically through GitHub Actions.

---

## Why Build the Application First?

Before introducing Docker, it's important to verify that the application works correctly on the host machine. This helps isolate application issues from containerization issues.

---

## Installing Express

```bash
npm install express
```

This command:

- Downloads Express.js
- Creates the `node_modules` directory
- Generates `package-lock.json`
- Adds Express as a dependency in `package.json`

---

## Application Features

The application provides two routes:

| Route | Purpose |
|--------|----------|
| `/` | Home page |
| `/health` | Health check endpoint |

---

## Testing

Start the application:

```bash
npm start
```

Verify:

```bash
curl http://localhost:3000
```

Health Check:

```bash
curl http://localhost:3000/health
```

---

## Outcome

The Node.js application is running successfully and is ready to be containerized using Docker.
