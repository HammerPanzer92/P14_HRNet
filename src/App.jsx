import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "./components/Index";
import { ListEmployee } from "./components/ListEmployee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/employee-list" element={<ListEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
