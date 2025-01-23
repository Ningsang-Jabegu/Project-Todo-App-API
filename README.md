# Todo-App API

This project is a simple, lightweight REST API for managing a Todo list. It provides endpoints for creating, reading, updating, and deleting todos, making it easy to integrate with front-end frameworks like React or any other web application.

_First updated: January 23, 2025_

## Project Structure

- **`server.js`**: The main entry point of the project. It contains all the REST API endpoints and manages the Todo operations in memory.

## Key Features

1. **RESTful Endpoints**

   - `GET /api/todos`: Retrieve all todos.
   - `POST /api/todos`: Add a new todo.
   - `PUT /api/todos/:id`: Update a todo by its unique ID.
   - `DELETE /api/todos/:id`: Delete a todo by its unique ID.

2. **In-Memory Storage**

   - Todos are stored in memory for simplicity. You can replace this with a database like MongoDB or PostgreSQL for persistence.

3. **CORS Support**

   - Allows seamless integration with front-end applications by enabling cross-origin requests.

4. **Easy Deployment**
   - Lightweight and deployable on platforms like Render, Railway, or Vercel.

## How to Use

### 1. Clone the repository:

```bash
git clone https://github.com/Ningsang-Jabegu/Project-Todo-App-API.git
cd todo-app-api
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Run the server:

```bash
code server.js
```

The server will run on `http://localhost:5000`.

### 4. Test API Endpoints:

You can test the API using tools like Postman or cURL.

- Example Request to Add a Todo:

    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"text": "My first todo"}' http://localhost:5000/api/todos

    ```

- Example Response:

    ```json
    {
    "id": 1674525612345,
    "text": "My first todo"
    }
    ```

## Seamless Integration

1. React Integration Example: \* Use the API to fetch todos and update your React state dynamically.
   ```javascript
   const apiBaseUrl = "http://localhost:5000/api/todos";

    // Fetch todos
    fetch(apiBaseUrl)
    .then((response) => response.json())
    .then((data) => setTodos(data));

    // Add a new todo
    fetch(apiBaseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: 'New Todo' }),
    }).then((response) => response.json());

    ```
2. Hosting:
    * Deploy this API on Render, Railway, or Vercel to get a public URL like `https://your-api-host.com`.
    * Update your front-end app to use the public URL instead of `localhost`.
3. Cross-Origin Requests:
    * The API includes `CORS` middleware for front-end integration without additional configuration.

## How to Extend
* Persistence: Replace the in-memory storage with a database like MongoDB, MySQL, or PostgreSQL.
* Authentication: Add user authentication for personalized Todo lists.
* Validation: Implement data validation to enforce proper input formats.

## Credits
This project is designed for developers looking to integrate a simple backend for managing Todo lists into their applications.

## License
This project is licensed under the MIT License. See the [LICENSE.md](/LICENCE.md) file for more details.

## Live Demo
Once deployed, the API will be available at: [Demo Link Will Be Provided Shortly](#)