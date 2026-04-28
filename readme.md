# API Tests with Axios and Jest

## Description

This project contains automated API tests for the public JSONPlaceholder service.
The tests validate basic CRUD-like operations using HTTP methods GET and POST.

## Tech Stack

* Node.js
* Axios
* Jest

## Installation

Install dependencies:

```bash
npm install
```

## Running Tests

Execute all tests:

```bash
npm test
```

## Test Scenarios

The following scenarios are covered:

1. Retrieve a list of posts
2. Retrieve a single post by ID
3. Retrieve comments for a specific post
4. Create a new post
5. Create a new comment

## Validation

Each test includes:

* HTTP status code verification
* Response structure validation
* Data consistency checks according to API expectations

## Interceptors

Axios interceptors are configured to log:

* Outgoing requests (method, URL, payload)
* Incoming responses (status, data)

This helps with debugging and tracing API interactions.

## Project Structure

```
project/
 ├── api/
 │    └── client.js
 ├── tests/
 │    └── jsonplaceholder.test.js
 └── package.json
```

## Notes

JSONPlaceholder is a mock API.
POST requests do not persist data on the server but return a simulated response.

## Author

QA Automation practice project

