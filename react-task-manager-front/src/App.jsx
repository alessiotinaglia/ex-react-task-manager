import { BrowserRouter, Routes, Route } from "react-router-dom";

// componenti importati
import Navbar from "./Component/NavBar";

// pages importati
import TaskList from "./pages/TaskList"
import Addtask from "./pages/AddTask"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/add" element={<Addtask />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
