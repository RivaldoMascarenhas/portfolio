import { Outlet } from "react-router-dom";
import { LinkNavigation } from "./components/link";

export function Header() {
  return (
    <div className="flex">
      <header>
        <nav>
          <ul className="flex flex-col mt-10 gap-10">
            <LinkNavigation to={"/about"}>About</LinkNavigation>
            <LinkNavigation to={"/projects"}>Projects</LinkNavigation>
            <LinkNavigation to={"/contact"}>Contact</LinkNavigation>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
