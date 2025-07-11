# Simple Node & React CRUD App

This project is a very small example that shows how to build a CRUD (Create, Read, Update, Delete) application using **Node.js**, **Express**, and **React**. You can add items, change them, or delete them through a friendly web page.

## What You Need

1. **Node.js** - Go to [nodejs.org](https://nodejs.org/) and download the LTS version. Install it like any normal program.
2. **A terminal** - This could be Command Prompt on Windows, Terminal on macOS, or any terminal on Linux.

## Setup Steps

1. Open your terminal and go to the `backend` folder of this project.

   ```bash
   cd backend
   ```

2. Install the needed packages.

   ```bash
   npm install
   ```

3. Start the server.

   ```bash
   npm start
   ```

   You should see a message saying `Server running at http://localhost:3001`.

4. Open your web browser and visit [http://localhost:3001](http://localhost:3001).
   You will see the React page where you can add, edit, and delete items.

## How It Works

- **Backend**: The `backend` folder has a small Express server (`server.js`). It keeps a list of items in memory and provides routes to create, read, update, and delete them.
- **Frontend**: The `frontend` folder contains `index.html`. It uses React from a CDN to display items and talk to the backend using `fetch`.

## Editing the Project

- To change the server logic, edit `backend/server.js`.
- To change the UI, edit `frontend/index.html` and refresh your browser.

That's it! You now have a simple end-to-end project. Have fun experimenting with it!
