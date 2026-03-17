# Mojito GSAP

A modern, animated cocktail landing page built with React and powered by GSAP scroll-based interactions.

![Mojito GSAP Demo](./mojitoGsapDemo.gif)

## Tech Stack

### Vite
Vite is the build tool and dev server for this project.

- Provides very fast local development with hot module replacement (HMR)
- Uses optimized production builds for deployment
- Keeps the React workflow lightweight and fast

### React
React is used to build the UI as reusable components.

- Component-driven structure (Hero, Cocktails, About, Art, Menu, Navbar)
- State management with hooks like `useState` and refs with `useRef`
- Declarative rendering for dynamic content and interactive sections

### Tailwind CSS
Tailwind CSS handles styling with utility classes and custom theme variables.

- Rapid UI styling directly in JSX
- Consistent spacing, typography, and responsive breakpoints
- Custom utility and component layers for project-specific design patterns

### GSAP
GSAP powers the animation system.

- Smooth timeline-based animations
- Scroll-driven animation with `ScrollTrigger`
- Text reveal effects with `SplitText`
- React-friendly lifecycle integration through `@gsap/react` and `useGSAP`

## Features

- Scroll-triggered hero video and parallax motion
- Animated text reveals and stagger effects
- Mask-based reveal effects in the Art section
- Interactive menu slider with arrow and tab navigation
- Fully responsive layout for desktop and mobile


