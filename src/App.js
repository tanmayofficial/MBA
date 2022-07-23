import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './pages/authentication/Auth';
import Customer from './pages/customer/Customer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path='/login' element={<Auth />} />
          <Route path='/customer' element={<Customer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
