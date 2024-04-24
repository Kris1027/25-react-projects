import { Link, Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";

export const Layout = () => {
  return (
    <div className="flex">
      <Navigation />
      <div className="w-full">
        <header className="p-4 bg-lime-900 text-lime-200">
          <h1 className="text-center">
            <Link className="text-3xl font-bold" to="/">
              25 React Projects
            </Link>
          </h1>
        </header>
        <main className="flex justify-center items-center">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
