# Providers

`/components/providers`

### This directory contains React Context Providers that manage shared state and functionality across the application.

Context Providers are higher-order components that leverage React's Context API to make data, functions, and
services available throughout the component tree without having to pass props down manually at every level.

```
/components/providers/
├── AuthProvider/
│   ├── AuthContext.tsx
│   ├── AuthProvider.tsx
│   └── index.js
├── ThemeProvider/
│   ├── ThemeContext.tsx
│   ├── ThemeProvider.tsx
│   └── index.js
├── NotificationProvider/
│   ├── NotificationContext.tsx
│   ├── NotificationProvider.tsx
│   └── index.js
├── DataProvider/
│   ├── DataContext.tsx
│   ├── DataProvider.tsx
│   └── index.ts
└── index.js  // Exports all providers
```

### Usage

Wrap your application or component tree with the required providers:

```typescript
import {
  AuthProvider,
  ThemeProvider,
  NotificationProvider
} from '@/components/providers';

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <NotificationProvider>
          {/* Your application components */}
        </NotificationProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};
```

Access context values in your components using the appropriate hooks:

```typescript
import { useAuth } from '@/components/providers/AuthProvider';
import { useTheme } from '@/components/providers/ThemeProvider';

const ProfileComponent = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  // Component implementation
};
```

### Guidelines

- Keep providers focused on a single responsibility.
- Export custom hooks for consuming the context.
