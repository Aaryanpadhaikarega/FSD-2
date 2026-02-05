# Experiment 6  
## Handle Forms and Validation using Material UI

---

##  Aim
To design an interactive form using **Material UI components** and implement **client-side validation** using **React**.

---

##  Learning Objectives
After completing this experiment, the student will be able to:
- Use Material UI form components
- Create controlled form inputs in React
- Implement client-side validation logic
- Display validation error messages
- Handle form submission events

---

##  Theory
Forms are an essential part of web applications as they are used to collect user input.  
In **React**, forms are implemented using **controlled components**, where input values are managed through state.

**Validation** ensures that the data entered by the user is correct before submission.

**Material UI (MUI)** is a popular React UI library that provides pre-styled components such as:
- `TextField`
- `Button`
- `Container`
- `Typography`

These components help create responsive and professional-looking forms quickly.

---

##  Key Concepts

| Concept | Description |
|------|------------|
| Controlled Components | Input values controlled using React state |
| Validation | Ensures correctness of user input |
| Error Handling | Displays feedback to users |
| Material UI | UI component library for React |

---

##  Project Setup

```bash
npm create vite@latest exp6-forms -- --template react
cd exp6-forms
npm install
npm install @mui/material @emotion/react @emotion/styled
npm run dev
