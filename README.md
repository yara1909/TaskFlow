⭐ TaskFlow – A Simple Realtime Task Manager

TaskFlow is a lightweight task management web application inspired by tools like Trello.
It allows users to create, update, delete, and edit tasks — all with realtime updates powered by Supabase.
This project demonstrates modern full-stack skills with a clean React frontend, a Node/Express backend API, and a PostgreSQL database hosted on Supabase.

🚀 Features (Completed So Far)

✅ Add new tasks


Users can create tasks with:

Title

Description

Status (To Do, In Progress, Done)

✅ Edit existing tasks

Each task can be edited inline:

Update title

Update description

Save or cancel changes

Realtime update in UI

✅ Change task status

Each task includes a dropdown to change its status instantly.

✅ Delete tasks

Remove tasks with one click.

✅ Realtime sync

Using Supabase Realtime, all changes:

Insert

Update

Delete

…appear instantly without refreshing the page.

✅ Organized component structure

TaskList (displays all tasks)

TaskItem (manages a single task — including edit mode)

AddTask (adds new tasks)

✅ Basic styling

Custom CSS for task cards, app layout, and UI elements.

🏗 Tech Stack

Frontend:

React (Vite)

Axios for API calls

Custom CSS for styling

Backend:

Node.js

Express.js

Supabase (database + realtime)

Database:

PostgreSQL (Supabase hosted)

Tools:

npm

Git/GitHub

Vite development server

📡 How It Works

Frontend Flow

Fetch tasks from Express API on load

Subscribe to Supabase realtime events

Interact with tasks using components:

TaskItem

TaskList

AddTask

Backend Flow

Express API handles:

GET /tasks

POST /tasks

DELETE /tasks/:id

Supabase performs database insert/update/delete

Supabase Realtime pushes updates to the client

📁 Project Structure

taskflow/

│

├── client/     # React frontend

│   ├── src/

│   │   ├── components/

│   │   │   ├── TaskList.jsx

│   │   │   ├── TaskItem.jsx

│   │   │   └── AddTask.jsx

│   │   ├── styles/

│   │   │   ├── TaskList.css

│   │   │   ├── TaskItem.css

│   │   │   └── AddTask.css

│   │   └── supabaseClient.js

│   └── package.json

│

├── server/               # Express backend

│   ├── index.js

│   ├── routes/

│   │   └── tasks.js

│   ├── supabaseClient.js

│   └── package.json

│

└── README.md

🧰 Refactoring

Clean component structure and simplify logic.

📦 Installation & Setup

1. Clone the repo
   
git clone https://github.com/your-username/TaskFlow.git

cd TaskFlow

3. Install backend dependencies
   
cd server

npm install

Start backend:

npm run dev

5. Install frontend dependencies
   
cd ../client/taskflow

npm install

npm run dev

Your app runs at:

➡️ http://localhost:5173

Backend runs at:

➡️ http://localhost:5001

🙌 Author

Yara Bakour

Full-Stack Developer in progress 💻
