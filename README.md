# K_Store

**K_Store** is a robust frontend interaction layer designed to provide a seamless user experience across all devices. It handles complex navigation logic, responsive state management, and interactive form processing using optimized Vanilla JavaScript.

---

## 📋 Table of Contents
* [Key Features](#-key-features)
* [Technical Architecture](#-technical-architecture)
* [Implementation Details](#-implementation-details)
* [System Behavior & Logic](#-system-behavior--logic)
* [Installation & Usage](#-installation--usage)

---

## ✨ Key Features

### 1. Intelligent Navigation System
* **Adaptive Mobile Menu:** A fully functional hamburger menu that toggles states and switches icons between `menu` and `close` dynamically.
* **Touch-Optimized Dropdowns:** Dropdown menus are specifically handled for mobile viewports (≤ 900px) using click events to bypass hover-state limitations on touch devices.
* **Synchronized UI States:** Visual indicators (icons) rotate 180° when dropdowns are active to provide clear user feedback.

### 2. Form Management & UX
* **Submission Interception:** Prevents unwanted page reloads during form submission to maintain a Single Page Application (SPA) feel.
* **Dynamic Feedback:** The contact form captures user input (Name/Email) and provides a personalized confirmation alert before resetting the interface.
* **Hash-Link Sanitization:** Prevents the browser from "jumping" to the top of the page when clicking placeholder links (`href="#"`).

### 3. Responsive State Recovery
* **Auto-Reset Logic:** A dedicated listener monitors window resizing. If the viewport exceeds the 900px breakpoint, all mobile-specific states (open menus, active dropdowns, rotated icons) are automatically cleared to ensure a clean desktop UI.

---

## 🛠 Technical Architecture

### Tech Stack
* **HTML5:** Semantic structure for accessibility.
* **CSS3:** Flexbox/Grid layouts and smooth transitions.
* **JavaScript (ES6+):** High-performance DOM manipulation without external dependencies.
* **Google Material Symbols:** Scalable vector icons for high-density displays.

### Performance Optimizations
* **DOM Content Loaded:** Scripts are wrapped to ensure the DOM tree is fully parsed before execution.
* **Conditional Logic:** Functions check for element existence before attaching listeners to prevent console errors on pages where certain components might be absent.

---

## ⚙️ Implementation Details

### Required HTML Selectors
To ensure the script functions correctly, use the following ID and Class conventions:

| Component | Type | Selector | Description |
|-----------|------|----------|-------------|
| Mobile Toggle | ID | `#mobile-menu` | The button that opens the menu. |
| Navigation List | ID | `#Menu` | The main `<ul>` or container for links. |
| Dropdown Parent | Class | `.has-dropdown` | The wrapper for items containing sub-menus. |
| Contact Form | ID | `#mind-sync-form` | The main inquiry form. |
| Signup Form | ID | `#form-card` | The newsletter/registration form. |

---

## 🔄 System Behavior & Logic

### Form Processing Workflow
1.  **Intercept:** Listens for the `submit` event.
2.  **Prevent:** Executes `e.preventDefault()` to stop the default POST/GET reload.
3.  **Capture:** Retrieves values from `#name` and `#email`. Defaults to "Guest" if fields are empty.
4.  **Notify:** Displays a success alert with captured data.
5.  **Reset:** Invokes `.reset()` to clear all input fields for the next entry.

### Breakpoint Management
* **Breakpoint:** `900px`
* **Mobile Mode:** Enables click-to-expand dropdowns and prevents default link behavior for parent items.
* **Desktop Mode:** Clears all `.showing` and `.active` classes to maintain layout integrity.

---

## 🚀 Installation & Usage

1.  **Clone the files** into your project directory.
2.  **Link the Stylesheet & Script** in your HTML:
    ```html
    <head>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <script src="js/main.js" defer></script>
    </body>
    ```
3.  **Include Material Symbols** in your `<head>` for icon support.

---

## No action part
* Search bar.
* Product Dropdowns.
* Newsletter, Add to cart, Download app, Checkout : button.
* Footer section.

**Crafted with precision for optimal web performance.**