import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg"; Note: This automatically points to public folder
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex m-2">
      {/* <!-- Sidebar start --> */}

      <div className="w-64 bg-blue-300">
        Step 1 Your info Step 2 Select plan Step 3 Add-ons Step 4 Summary
      </div>

      <div className="flex-1 bg-green-300">
        <h1>Form View</h1>
      </div>

      {/* <!-- Sidebar end --> */}
    </div>
  );
}

export default App;
