# Traffic Light Component

A React-based traffic light simulation where the lights cycle indefinitely through **green → yellow → red**, each staying active for a predefined duration.

This project focuses on **correct timing logic, clean state management, and proper handling of JavaScript timers in React**.

---

## Problem Statement

Build a traffic light where the lights switch from green to yellow to red after predetermined intervals and loop indefinitely.

### Light Durations
- **Green:** 3000ms
- **Yellow:** 500ms
- **Red:** 4000ms

Styling is flexible and left to the implementer’s creativity.

---

## Solution Overview

- Uses React state to track the current active light
- Uses `setTimeout` (instead of `setInterval`) to safely handle dynamic delays
- Automatically schedules the next light change based on the current color
- Loops indefinitely with proper cleanup to prevent memory leaks

---

## Behavior Logic

1. The component starts in the **green** state
2. A timeout is scheduled based on the current light’s duration
3. When the timeout completes, the light transitions to the next color
4. The cycle repeats indefinitely

---

## Implementation Details

### Light Transition Order
Green → Yellow → Red → Green

### Timing Configuration
```js
green  → 3000ms
yellow → 500ms
red    → 4000ms

