## 🖼 Image Carousel Component (React)

### 📄 Description
A responsive **Image Carousel** component built using **React functional components**.  
It displays a sequence of images one at a time with navigation controls and page indicators, following best practices for performance and DOM optimization.

---

### ✨ Features
- Displays **only one image at a time** (single `<img>` in the DOM)
- Left and right navigation buttons
- Cyclic navigation (last image → first image)
- Page buttons to jump directly to an image
- Responsive layout with a maximum size of **600×400**
- Images scale correctly using `object-fit: contain`
- Black background fills empty space
- No external libraries required

---

### 🛠 Tech Stack
- React (Functional Components)
- JavaScript / TypeScript
- CSS
- HTML Image properties

---

### 🚀 Usage

```jsx
import ImageCarousel from "./components/ImageCarousel";

const images = [
  { src: "/img1.jpg", alt: "Image 1" },
  { src: "/img2.jpg", alt: "Image 2" },
  { src: "/img3.jpg", alt: "Image 3" },
];

function App() {
  return <ImageCarousel images={images} />;
}

export default App;
