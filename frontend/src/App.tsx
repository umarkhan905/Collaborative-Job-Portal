import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import JobsPage from "./pages/JobsPage";
import CompaniesPage from "./pages/CompaniesPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
      </Routes>
    </>
  );
};

export default App;
