import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// 👇️ wrap component that uses useLocation in Router

test('renders react component', async () => {
  render(
    <Router>
      <App />
    </Router>,
  );

  // your tests...
});
