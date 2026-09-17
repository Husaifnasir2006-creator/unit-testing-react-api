# Unit Testing React and API

This project demonstrates unit testing for a React component and an API handler using Vitest and React Testing Library.

## Features

* React Counter component
* React component unit tests
* API handler
* API handler unit test
* Vitest testing setup
* React Testing Library

## Technologies Used

* React
* Vite
* Node.js
* Express
* Vitest
* React Testing Library

## Tests

### React Component Test

The Counter component is tested to verify:

* The initial count is 0
* The count increases when the Increment button is clicked

### API Handler Test

The API handler is tested to verify:

* The API returns HTTP status 200
* The correct JSON response is returned

## Running the Tests

### React Tests

Open the terminal and run:

```bash
cd client
npm test
```

### API Tests

Open another terminal or go back to the project root and run:

```bash
cd server
npm test
```

## Project Structure

```text
unit-testing-react-api/
│
├── client/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── Counter.jsx
│   │   └── Counter.test.jsx
│   │
│   ├── vitest.config.js
│   └── package.json
│
├── server/
│   ├── helloHandler.js
│   ├── helloHandler.test.js
│   └── package.json
│
├── .gitignore
└── README.md
```

## What I Learned

I learned how to write and run unit tests for React components and API handlers. I also learned how to use Vitest and React Testing Library to verify component behavior and API responses.

## Result

Both the React component tests and API handler tests were successfully executed and passed.
