# Features

`/components/features`

### This directory contains reusable feature components that showcase specific functionality of our application.

```
/components/features/
├── Authentication/
│   ├── LoginForm.tsx
│   ├── RegistrationForm.tsx
│   └── ResetPassword.tsx
├── Dashboard/
│   ├── ActivityFeed.tsx
│   ├── StatisticsPanel.tsx
│   └── NotificationsPanel.tsx
├── Search/
│   ├── SearchBar.tsx
│   ├── FilterPanel.tsx
│   └── SearchResults.tsx
└── index.ts
```

### Usage

Feature components should be imported from the index file:

```typescript
import { LoginForm, ActivityFeed, SearchBar } from '@/components/features';
```

### Guidelines

- Feature components should encapsulate complete functionality for a specific feature.
- They can compose multiple UI components from `/components/ui`.
- Business logic should be contained within the feature component or its custom hooks.
- Keep components focused on a single responsibility.
- Write tests for each feature component, whenever applicable.
