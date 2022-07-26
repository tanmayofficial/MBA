import { Routes, Route } from 'react-router-dom';
import Authentication from './pages/authentication/Authentication';
import Customer from './pages/customer/Customer';
import Admin from './pages/admin/Admin';
import Client from './pages/client/Client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <div className="">
        <Routes>
          <Route exact path='/' element={<Authentication />} />
          <Route path='/login' element={<Authentication />} />
          <Route path='/customer' element={<Customer />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/client' element={<Client />} />
        </Routes>
    </div>
  );
}

export default App;
