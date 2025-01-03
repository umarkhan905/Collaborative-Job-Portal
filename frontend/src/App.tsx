import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import Login from "../src/components/Auth/LogIn/LogIn.tsx";
// import TermsandConditions from "./components/Auth/TermsandConditions/TermsandConditions.tsx";
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword.tsx";
import EmailVerification from "./components/Auth/EmailVerification/EmailVerification.tsx";
import JobsPage from "./pages/JobsPage";
import CompaniesPage from "./pages/CompaniesPage";
import SingleJob from "./components/SingleJob/SingleJob.tsx";
import CompanyDetailsPage from "./pages/CompanyDetailsPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/TermsandConditions" element={<TermsandConditions />} /> */}
        <Route path="ForgotPassword" element={<ForgotPassword />} />
        <Route path="EmailVerification" element={<EmailVerification />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="SingleJob" element={<SingleJob />} />
        <Route path="/companies/:id" element={<CompanyDetailsPage />} />
      </Routes>
    </>
  );
};

export default App;
