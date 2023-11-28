import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotePage from './NotePage';
import Home from './Home';

const Router = () => {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<NotePage/>} />
          </Routes>
      </BrowserRouter>
    );
  };

export default Router;