The solution depends on your application's structure.  Here are two approaches:

**1. Pass Parameters as Props:**

This is generally the cleanest and preferred solution. If the component needing the parameter is nested below the route defining it but not directly below, then pass the params as props from the parent components.

```javascript
// App.js
// ... same as before

//User.js
// ... same as before

//AnotherComponent.js
function AnotherComponent({ userId }) {
  return <p>User ID (passed as props): {userId}</p>;
}
```

**2. Use Context (for more complex scenarios):**

For complex hierarchies, a context API might be more suitable to share the parameters across multiple components.

```javascript
import { createContext, useContext } from 'react';
import { useParams } from 'react-router-dom';

const UserContext = createContext();

function UserProvider({ children }) {
  const params = useParams();
  return <UserContext.Provider value={params}>{children}</UserContext.Provider>;
}

function AnotherComponent() {
  const { userId } = useContext(UserContext);
  return <p>User ID (from context): {userId}</p>;
}
```
Remember to wrap your components that need access to the params with the provider.