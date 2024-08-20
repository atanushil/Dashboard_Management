import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPath } from "./routingSlice";
import { Dashboard, Home, NavBar } from "./utils";
import './index.css'
function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const currentPath = useSelector((state) => state.routing.currentPath);

  useEffect(() => {
    dispatch(setCurrentPath(location.pathname));
    if (location.pathname !== "/" && location.pathname !== "/dashboard") {
      navigate("/");
    }
  }, [location, navigate, dispatch]);

  return (
    <div className="sky-gradient-11 z-0 w-full min-h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
