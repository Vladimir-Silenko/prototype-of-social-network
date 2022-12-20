
import { createRoot } from 'react-dom/client';
import SamuraiJSApp from './App';

test('renders without crashing', () => {
  const container = document.createElement('div');
  const root = createRoot(container);
  root.render(<SamuraiJSApp tab="home" />);
  root.unmount();
});

