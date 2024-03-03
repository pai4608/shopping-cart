import { Outlet } from "react-router-dom";
import "./App.css";

import Sidebar from "./sidebar";

function App() {
  return (
    <div className="container">
      {/* sidebar */}
      <Sidebar />
      {/* main content */}
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
