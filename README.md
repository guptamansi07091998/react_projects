# react_projects

A collection of React projects and UI components built to practice core concepts, modern patterns, and real-world frontend use cases.

---

## ⭐ Star Rating Component (React)

### 📄 Description
A reusable and interactive **Star Rating** component built using **React** and **CSS Modules**.  
It supports dynamic ratings, hover effects, and clean SVG-based stars without using any external libraries.

---

### ✨ Features
- Reusable SVG-based star component
- Supports filled and unfilled states
- Hover interaction for better UX
- Click to select rating
- Configurable number of stars
- Styled using CSS Modules
- No external libraries required

---

### 🛠 Tech Stack
- React (Functional Components)
- JavaScript
- CSS Modules
- SVG Icons

---

### 🚀 Usage

```jsx
import StarRating from "./components/StarRating";

function App() {
  return <StarRating totalStars={5} filledStars={3}/>;
}

export default App;

