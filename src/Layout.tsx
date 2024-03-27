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
        <nav className="flex gap-4">
          <Link to="accordion">Accordion</Link>
          <Link to="random-color">Random Color</Link>
          <Link to="star-rating">Star Rating</Link>
        </nav>
      </header>
      <main className="flex justify-center items-center">
        <Outlet />
      </main>
    </>
  );
};
