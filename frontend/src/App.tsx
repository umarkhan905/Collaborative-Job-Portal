import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import Login from "../src/components/Auth/LogIn/LogIn.tsx";
// import TermsandConditions from "./components/Auth/TermsandConditions/TermsandConditions.tsx";
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword.tsx";
import EmailVerification from "./components/Auth/EmailVerification/EmailVerification.tsx";

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
      </Routes>
    </>
  );
};

export default App;
