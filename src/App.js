import { Routes, Route } from "react-router-dom";
import Authentication from "./pages/authentication/Authentication";
import Customer from "./pages/customer/Customer";
import Admin from "./pages/admin/Admin";
import Client from "./pages/client/Client";
import Home from "./pages/home/Home";
import MovieDetail from "./pages/movie-details/MovieDetail";
import SelectTheatre from "./pages/select-theatre/SelectTheatre";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@coreui/coreui/dist/css/coreui.min.css";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Authentication />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/client" element={<Client />} />
        <Route path="/movie-detail/:movieId" element={<MovieDetail />} />
        <Route
          path="/buyTickets/:movieName/:movieId"
          element={<SelectTheatre />}
        />
      </Routes>
    </div>
  );
}

export default App;
