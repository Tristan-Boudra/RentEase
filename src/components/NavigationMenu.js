import { Link } from "react-router-dom";

function NavigationMenu() {
  return (
    <div className="">
      <ul className="flex flex-row gap-10">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/property">Property</Link>
        </li>
        <li>
          <Link to="/tenant">Tenant</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavigationMenu