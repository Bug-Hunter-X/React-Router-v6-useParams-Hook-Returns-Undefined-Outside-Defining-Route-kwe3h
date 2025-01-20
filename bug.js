In React Router Dom v6, a common issue arises when using the `useParams` hook within a component that's not directly nested within a route that defines the parameters.  This leads to `undefined` parameter values.  For example:

```javascript
// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import User from './User';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:userId" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

//User.js
import { useParams } from 'react-router-dom';

function User() {
  const { userId } = useParams();
  console.log(userId); // Correctly logs userId
  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {userId}</p>
    </div>
  );
}
export default User;
```
If you try to access `useParams` in another component not directly under `/users/:userId` route, it will return `undefined`.