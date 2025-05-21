import { BrowserRouter, Routes, Route } from "react-router-dom";

// importato global provider
import { GlobalProvider } from "./GlobalContext";
// componenti importati
import Navbar from "./Component/NavBar";
// pages importati
import TaskList from "./pages/TaskList"
import Addtask from "./pages/AddTask"

function App() {

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/add" element={<Addtask />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
