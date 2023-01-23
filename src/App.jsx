import { RouterProvider } from 'react-router-dom';
import router from './Router/router';

/* eslint-disable react/react-in-jsx-scope */
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
