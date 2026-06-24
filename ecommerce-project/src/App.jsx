import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <Routes>

      <Route index element={<HomePage />} />
      {/* this 'index' is same as ' path="/" ' both used for index/home route */}
      <Route path="/checkout" element={<div>Test Checkout Page</div>} />

    </Routes>
  );
}

export default App;
