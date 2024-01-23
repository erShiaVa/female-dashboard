import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoacheeHome from "./pages/CoacheeHome";
import LogIn from "./pages/LogIn";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/SignUp";
import CoacheeProfile from "./pages/CoacheeProfile";
import Header from "./components/Header";

function App() {
  return (
    <>
    <Router>
      <Header/>
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
