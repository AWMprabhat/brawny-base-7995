import "./App.css";
import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import CreateTask from "./components/CreateTask";
import PrivateRoute from "./components/PrivateRoute";
import Pricing from "./components/Pricing";
import Home from "./components/Home";
import Task from "./components/Task"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/task"
          element={<Task/>}
        />
        {/* <Route path="/task" element={<CreateTask />} /> */}
        <Route path="/home" element={<Home/>}></Route>
        
      </Routes>
      {/* <NavBar/>
      <RightSlider/> */}
    </div>
  );
}

export default App;
