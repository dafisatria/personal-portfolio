import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import ProjectsPage from "./pages/ProjectsPage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-[url('/background.svg')] bg-repeat bg-top bg-contain min-h-screen flex flex-col">
        <main className="flex-1 overflow-y-auto scroll-smooth">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <MainPage />
                </>
              }
            />
            <Route
              path="/projects"
              element={
                <>
                  <ProjectsPage />
                  <Footer />
                </>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
