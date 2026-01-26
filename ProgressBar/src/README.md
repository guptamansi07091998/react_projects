# ⏳ Progress Bar App (React)

An interactive React application where users can dynamically add progress bars.  
Each progress bar fills up smoothly and independently as soon as it is added.

---

## 📄 Description

This app demonstrates how to manage **multiple independent animations** in React using functional components and hooks.  
Clicking the **Add** button creates a new progress bar that starts filling immediately and completes in approximately **2000ms**.

---

## ✨ Features

- Add multiple progress bars dynamically
- Each progress bar:
  - Starts filling on mount
  - Completes in ~2000ms
  - Maintains its own independent state
- Smooth progress animation
- Clean and predictable state management
- No external libraries used

---

## 🛠 Tech Stack

- React
- JavaScript (ES6+)
- React Hooks (`useState`, `useEffect`)
- Inline CSS

---

## 🚀 Usage

```jsx
import App from "./App";

function Root() {
  return <App />;
}

export default Root;

