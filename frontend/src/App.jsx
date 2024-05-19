import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Step1 from "./components/Step1/Step1";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg"; Note: This automatically points to public folder
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-magnolia w-dvw h-dvh flex justify-center items-center">
      <div className="flex bg-white p-3 rounded-xl m-3 min-w-[940px] h-[600px]">
        {/* <!-- Sidebar start --> */}

        <div className="w-1/3">
          <Sidebar />
        </div>

        <div className="flex-1 bg-blue-300">
          <Step1 />
        </div>

        {/* <!-- Sidebar end --> */}
      </div>
    </div>
  );
}

export default App;
