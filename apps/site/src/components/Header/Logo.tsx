import { Link } from "react-router-dom";

export const Logo = () => (
  <Link to="/" className="no-underline">
    <img src="/logo.png" alt="Caminho do Lar" className="h-12 w-auto" />
  </Link>
);
