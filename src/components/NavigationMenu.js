import { Link } from "react-router-dom";
import '../styles/navigationMenu.css';

function NavigationMenu() {
  return (
    <div className="">
      <ul className="flex flex-row gap-5 mx-auto w-max border-2 rounded-lg">
        <li className="background">
          <Link to="/">Home</Link>
        </li>
        <li className="background">
          <Link to="/property">Property</Link>
        </li>
        <li className="background">
          <Link to="/tenant">Tenant</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavigationMenu