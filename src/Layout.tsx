import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header className="flex flex-col items-center p-4 bg-lime-900 text-lime-200">
        <h1>
          <Link className="text-3xl font-bold" to="/">
            25 React Projects
          </Link>
        </h1>
        <nav>
          <Link to="accordion">Accordion</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
