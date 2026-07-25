import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { NavLink } from "react-router";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      

      {/* Pages */}
<Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
