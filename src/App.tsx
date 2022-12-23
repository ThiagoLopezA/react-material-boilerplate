import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRouter, PublicRouter } from './routes';
import NotFoundProvider from './components/NotFoundProvider/NotFoundProvider';

function App() {
  return (
    <BrowserRouter>
      <NotFoundProvider notFoundPage={<div>Not Found</div>}>
        <Route path="login" element={<div>Login</div>} />
        <Route path="private/*" element={<PrivateRouter />} />
      </NotFoundProvider>
    </BrowserRouter>
  );
}

export default App;
