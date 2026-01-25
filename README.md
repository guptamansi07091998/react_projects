# react_projects
A collection of React projects and UI components built to practice core concepts, modern patterns, and real-world frontend use cases.

**Star Rating Component (React)**
**Description**

A reusable and interactive Star Rating component built using React and CSS Modules.
It supports dynamic ratings, hover effects, and clean SVG-based stars.

**Features**

-> Reusable SVG-based star component
-> Supports filled and unfilled states
-> Hover interaction for better UX
-> Click to select rating
-> Configurable number of stars
-> Styled using CSS Modules
-> No external libraries required

**Tech Stack**
React (Functional Components)
JavaScript
CSS Modules
SVG Icons

**Usage**
import StarRating from "./components/StarRating";

function App() {
  return <StarRating totalStars={5} />;
}

export default App;

🧩 Star Component Example
<Star filled={true} />
<Star filled={false} />

**Interaction**
Hover: Highlights stars up to the hovered index
Click: Sets the rating
Leave: Restores selected rating

**Learning Outcomes**
-> Handling hover and click events in React
-> Conditional rendering with props
-> Reusable component design
-> SVG styling using currentColor
-> Clean state management
