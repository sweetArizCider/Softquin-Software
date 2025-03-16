import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../App';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
