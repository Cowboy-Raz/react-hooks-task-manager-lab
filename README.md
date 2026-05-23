# Lab: Task Manager

## Overview
Task Manager is a React application that allows users to add, complete, and search tasks. It demonstrates three standard React hooks: `useRef` for persisting search input without re-rendering, `useId` for generating unique accessible IDs on form inputs, and `useContext` for global state management across components.

## Screenshot

![App Screenshot](./screenshot.png)

## Setup

Run `npm install` to install dependencies.

In one terminal, run the backend:

```bash
npm run server
```

In another terminal, run the frontend:

```bash
npm run dev
```

To run the test suite:

```bash
npm run test
```

## Features

- **View all tasks** — Tasks are fetched from the backend on load and displayed via `useContext`.
- **Add a new task** — Submit the form to POST a new task. `useId` generates a unique accessible ID linking the label and input.
- **Mark as complete** — Click the Complete button to PATCH the task and toggle its completion state. Completed tasks display with strikethrough text.
- **Search tasks** — Type in the search bar to filter tasks by title in real time using `useRef`.

## Hooks Used

| Hook | Where | Purpose |
|---|---|---|
| `useContext` | `TaskList`, `TaskForm` | Access global tasks state and actions |
| `useId` | `TaskForm` | Generate unique ID for form label/input |
| `useRef` | `SearchBar` | Persist search value without re-rendering |

## Component Structure