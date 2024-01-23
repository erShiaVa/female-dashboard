import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoacheeHome from "./pages/CoacheeHome";
import LogIn from "./pages/LogIn";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/SignUp";
import CoacheeProfile from "./pages/CoacheeProfile";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<CoacheeHome/>} />
        <Route path="/log-in" element={<LogIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/coachee-profile" element={<CoacheeProfile/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
