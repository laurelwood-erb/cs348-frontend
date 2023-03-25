import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";

import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import ShowQuestion from "./pages/ShowQuestion";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question/:id" element={<ShowQuestion />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
