import { Link } from "react-router-dom";
import Logo from './assets/single-spa-logo.svg'

export default function App() {
  return (
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/app1">
              App1
            </Link>
          </li>
          <li>
            <Link to="/app2">
              App2
            </Link>
          </li>
        </ul>
      </header>
  );
}
