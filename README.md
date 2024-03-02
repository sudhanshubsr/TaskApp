<div align="center">
  <h1 align="center">Task App</h1>
    <h3>Mantis Eye Assignment</h3>
</div>


<div align="center">
  <a href="https://taskappbsr.vercel.app/">TaskApp.com</a>
</div>

<div align="center">
    <img src="./public/main.png">
</div>

<br/>
<br/>

# Task App - Mantis Eye Assignment

Task App is a simple task management application built with Next.js, Tailwind CSS, and MongoDB. It allows users to create, update, and delete tasks, as well as mark them as complete. The app also features user authentication and real-time updates.


## Tech Stack

- [Next.js](https://nextjs.org/) – Frontend framework
- JavaScript – Programming language
- [Tailwind CSS](https://tailwindcss.com/) – Styling
- [Prisma](https://prisma.io) - ORM (Object-Relational Mapping)
- [Vercel](https://vercel.com/) – Hosting platform
- [NextAuth.js](https://next-auth.js.org/) – Authentication
- [MongoDB](https://www.mongodb.com/) – Database
- [GitHub](https://github.com) – Version control
- [HTML](https://html.com) – Markup language


## Features

- **User Authentication:** Secure user authentication with GitHub OAuth.
- **Infinite Scroll:** Load more tasks as you scroll down the page.
- **Create, Update, and Delete Tasks:** Manage tasks with CRUD operations.
- **Status Update:** Mark tasks as Todo or Done or In Progress.




## Getting Started

### 1. Clone the repository

```shell
git clone https://github.com/sudhanshubsr/TaskApp
cd TaskApp
```

### 2. Install npm dependencies

```shell
npm install
```

### 3. Copy the environment variables to `.env`


### 4. Configure the variables in `.env`

| Variable                 | Value                                                                                       |
| ------------------------ | --------------------------------------------------------------------------------------------|
| NEXTAUTH_SECRET          | "example_nextauth_secret"                                                                   |
| NEXTAUTH_URL             | "http://localhost:3000"                                                                     |
| GITHUB_CLIENT_ID         | "example_github_client_id"                                                                  |
| GITHUB_CLIENT_SECRET     | "example_github_client_secret"                                                              |
| MONGODB_DATABASE_URL     | "mongodb+srv://username:password@cluster0.mongodb.net/database?retryWrites=true&w=majority" |



### 5. Initialize the database

```shell
npx prisma generate
```

### 6. Run the dev server

```shell
npm run dev
```

### 7. Open the app in your browser

Visit [http://localhost:3000](http://localhost:3000) in your browser.



## The app is now running locally!

You can now login with your GitHub account and start using the app. You can create, update, and delete tasks, as well as mark them as complete. The app also features real-time updates, so you can see changes made by other users in real time.

