# UI

`components/ui`

### This directory contains foundational UI components that form the building blocks of our application interface.

This directory contains foundational UI components that form the building blocks of our application interface.

The `/components/ui` directory houses reusable, presentation-focused components that follow our design system
guidelines. These components are the atomic elements that make up our interface and can be composed to create
more complex features.

```
/components/ui/
├── Button/
│   ├── Button.jsx
│   ├── Button.module.css (or styled-components file)
│   └── index.js
├── Card/
│   ├── Card.jsx
│   ├── CardHeader.jsx
│   ├── CardFooter.jsx
│   └── index.js
├── Form/
│   ├── Input.jsx
│   ├── Checkbox.jsx
│   ├── Select.jsx
│   ├── RadioGroup.jsx
│   └── index.js
├── Layout/
│   ├── Container.jsx
│   ├── Grid.jsx
│   ├── Flex.jsx
│   └── index.js
├── Typography/
│   ├── Heading.jsx
│   ├── Text.jsx
│   ├── Link.jsx
│   └── index.js
├── Feedback/
│   ├── Alert.jsx
│   ├── Spinner.jsx
│   ├── ProgressBar.jsx
│   └── index.js
└── index.js  // Exports all UI components
```

### Guidelines

- Pure and Presentational: UI components should be primarily concerned with how things look.
- Composable: Design components to work well together.
- Prop-Driven: Behavior and appearance should be controlled via props.
- Accessible: Follow WCAG guidelines and implement proper ARIA attributes.
- Responsive: Components should adapt to different screen sizes.
- Consistent: Follow our design system specifications for spacing, colors, etc.
- Well-Documented: Include prop documentation with types and defaults.
