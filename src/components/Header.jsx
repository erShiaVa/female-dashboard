import { assets } from "../assets";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-16 py-12 max-w-6xl mx-auto">
        <div>
          <img 
            src={assets.logo_color} alt="female logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-20">
            <li className="cursor-pointer">Settings</li>
            <li 
              className="cursor-pointer"
              onClick={() => navigate("coachee-profile")}>
                Profile
              </li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header