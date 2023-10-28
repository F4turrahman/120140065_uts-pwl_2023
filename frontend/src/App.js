import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "./components/UserList";
import AddBarang from "./components/AddBarang";
import EditBarang from "./components/EditBarang";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList/>} />
        <Route path="/addbarang" element={<AddBarang/>} />
        <Route path="edit/:id" element={<EditBarang/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
