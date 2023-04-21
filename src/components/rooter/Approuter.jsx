import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NewBlog from "../pages/NewBlog";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="new-block" element={<PrivateRouter />}>
          <Route index element={<NewBlog />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
