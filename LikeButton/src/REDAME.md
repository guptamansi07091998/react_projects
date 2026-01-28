# Like Button Component

A React implementation of a **Like Button** that updates its appearance based on user interaction and asynchronous API responses.  
This project focuses on **state management, async handling, and UI feedback**, rather than pixel-perfect styling.

---

## Features

- Default, Hovered, Loading, Liked, and Error states
- Asynchronous API request on click
- 50% success / failure simulation via backend API
- Prevents duplicate requests while loading
- Displays backend error messages on failure
- Handles both **Like** and **Unlike** actions

---

## Button States

| State      | Description |
|-----------|-------------|
| Default   | Unliked state with gray styling |
| Hovered   | Button changes appearance on hover |
| Loading   | Shows spinner and disables interaction |
| Liked     | Heart icon turns red |
| Error     | Displays error message below the button |

---

## API Details

### Endpoint
POST https://questions.greatfrontend.com/api/questions/like-button


### Headers
Content-Type: application/json


### Request Body
```json
{
  "action": "like" | "unlike"
}


