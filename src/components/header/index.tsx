import { Link, Outlet } from "react-router-dom";

export function Header() {
  return (
    <div className="flex text-muted-foreground">
      <header>
        <nav>
          <ul className="flex flex-col gap-5 p-2 select-none  items-center bg-black h-screen">
            <li>
              <Link
                to={"/"}
                className="text-2xl text-muted cursor-pointer font-extrabold relative"
              >
                R{" "}
                <span className="absolute w-1 h-1 bg-emerald-500 rounded-full bottom-1" />{" "}
              </Link>
            </li>
            <li>
              <Link className="header-item" to={"/about"}>
                About
              </Link>
            </li>
            <li>
              <Link className="header-item" to={"/projects"}>
                Projects
              </Link>
            </li>
            <li>
              <Link className="header-item" to={"/contact"}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="bg-slate-900 w-full">
        <Outlet />
      </main>
    </div>
  );
}
