# React Product Filtering System

A high-performance, dynamic product filtering application built with **React**. This project is the 10th installment in a series of portfolio demos, focusing on mastering complex state management and filtering logic without the help of external libraries.

---

### 🏁 Series Finale: Project 10 of 10

This application (Project #10) marks the completion of my react-project-demos series.

Over the course of 10 projects, I have progressed from basic component rendering to building this full-scale, logic-intensive filtering system. This final project serves as a comprehensive "final exam," combining:

- **Centralized State**: Syncing search, category, and price filters in one place.

- **Custom Filtering**: Building a search engine using only pure JavaScript (no libraries).

- **Component Reuse**: Creating a modular UI where components are built once and used everywhere.

- **Data Logic**: Handling complex price ranges and case-sensitive search results.

The full journey from Project 1 to Project 9 can be found here:

👉 [Frankuccino/react-project-demos](https://github.com/Frankuccino/react-project-demos)

## 🚀 Key Features

- **Multi-Criteria Filtering:** Users can filter products by **Category**, **Price Range**, and **Color** simultaneously.
- **Real-Time Search:** A global search bar that stacks with the sidebar filters to find specific models.
- **Zero-Library Logic:** Filtering is handled entirely through native JavaScript array methods (`.filter()`, `.map()`, `.includes()`).
- **Custom UI Components:** Reusable Input and Button components with conditional styling (e.g., specific borders for white color swatches and CSS-transformed labels).
- **Dynamic Data Rendering:** Automated UI generation based on central data objects, ensuring the interface stays in sync with the backend data.

## 🛠 Technical Highlights

### 1. Manual State Management (Prop Drilling)

This project serves as a deep dive into React's **one-way data flow**. Rather than using Context API or Redux, it utilizes **State Lifting** and **Prop Drilling** to manage data:

- **Source of Truth:** All filtering state lives in `App.jsx`.
- **Function Passing:** `handleChange` and `handleClick` functions are drilled through multiple layers (e.g., `Sidebar` -> `Price` -> `Input`) to maintain a single point of control for the UI.

### 2. Multi-Layered Filtering Logic

The filtering engine is designed to be "additive." You can search for "Nike," select a "Black" color, and a "Price Range" of $50-$100 simultaneously without the filters overwriting each other.

- **Numeric Normalization:** Price values are passed as absolute digits (e.g., `50`, `100`) to allow for mathematical comparisons instead of fragile string matching.

### 3. Bulletproof Search

Implemented a case-insensitive search algorithm that handles empty states and missing data safely:

```javascript
const filteredItems = products.filter((product) =>
  product.title.toLowerCase().includes(query.toLowerCase()),
);
```

## 📂 Project Structure

```
src/
├── components/          # Base UI components (Input, Button, Card)
├── Sidebar/             # Sidebar organization (Category, Price, Colors)
├── Recommended/         # Quick-access brand filtering buttons
├── Navigation/          # Navbar with search input and user controls
├── db/                  # Centralized product data (data.js)
└── App.jsx              # Core Logic & Filter Controller
```

## 🚦 Getting Started

### 1. Clone the repository

```
git clone https://github.com/Frankuccino/react-products-filtering.git
```

### 2. Install dependencies:

```
npm install
```

### 3. Launch the development server:

```
npm run dev
```

**Project 10 of my React Demo Series**. This project demonstrates that complex e-commerce functionality can be achieved with clean, modular, and performant Vanilla React code.

Check out the full roadmap and other projects in the [Main Demo Repository](https://github.com/Frankuccino/react-project-demos).
