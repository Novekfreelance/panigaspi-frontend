import { NavLink, Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Button } from "../ui/button";

const Navbar = () => {
  const CurrentRoute = useLocation().pathname;
  return (
    <MaxWidthWrapper>
      <nav className="w-full flex items-center justify-evenly py-6">
        <Link to="/">
          <Logo />
        </Link>
        <ul className="flex items-center justify-center gap-4">
          <li>
            <NavLink to="/particular">Particulier</NavLink>
          </li>
          <li>
            <NavLink to="/professional">Professinonel</NavLink>
          </li>
          <NavLink to="/contact">Nous Contacter</NavLink>
          <li></li>
        </ul>
        <div>
          {CurrentRoute === "/professional" || CurrentRoute === "/contact" ? (
            <Button className="text-black" asChild>
              <Link to="#">Télécharger l'application</Link>
            </Button>
          ) : (
            <Button className="text-black" asChild>
              <Link to="#">Inscrire son entreprise</Link>
            </Button>
          )}
        </div>
      </nav>
    </MaxWidthWrapper>
  );
};

export default Navbar;
