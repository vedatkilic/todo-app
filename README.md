# FoodStyles Todo App

A basic todo app having an API and a web interface

## 🧠 Keep in mind

- No validation is implemented on backend and client side
- No error handling is implemented on backend and client side
- Sign out step has not been added, so if you want to try with another user, please go to login or singup page:
    ```shell
    http://localhost:5173/login
    ```
    ```shell
    http://localhost:5173/signup
    ```
## 🕶️ Requirements
 
- You must install docker to run application easily

## 🏗️ Build

- Clone this repo
    ```shell
    git clone git@github.com:vedatkilic/todo-app.git
    ```
- Go to folder
    ```shell
    cd todo-app 
    ```
- Run below command
    ```shell
    docker-compose up -d 
    ```

- Copy and paste your browser
    ```shell
    http://localhost:5173 
    ```
## API Specifications

- [x] Implement a REST API
- [x] Use a relational database (Postgres is used)
- [x] Use an ORM (Sequelize is used)

### Endpoints
- [x] createTodo
- [x] markTodoCompleted
- [x] markTodoUncompleted
- [x] deleteTodo
- [x] deleteTodo
- [x] signUp
- [x] login


## Web Specifications

Authenticated users can only manage todos

- [x] Implement the web app using React
- [x] Use hooks, and avoid class components
- [x] Use a state management solution (Redux is used)
- [x] sign up
- [x] log in
- [x] manage todos

### Functionalities
- [x] Implement creating new todos
- [x] Implement marking todos as completed or uncompleted
- [x] Implement deleting todos
- [x] Implement filtering todos by All, Completed, Incompleted
- [x] Implement the Signup and Login screens, and let only logged in users manage todos
