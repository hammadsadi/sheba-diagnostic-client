import { Outlet, useLocation } from "react-router-dom";
import Nav from "../pages/Shared/Nav/Nav";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("sign-up");
  return (
    <div className="font-dosis">
      {/* Nav */}
      {noHeaderFooter || <Nav />}

      {/* Outlet */}
      <Outlet />
      {/* Footer */}
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
