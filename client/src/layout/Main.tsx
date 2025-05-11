import Footer from "@/shared/Footer";
import { Nav } from "@/shared/Navbar/Nav";
// import Navbar from "@/shared/Navbar";
import { Outlet } from "react-router";
const Main = () => {
  return (
    <div>
      <Nav/>
      {/* <Navbar></Navbar> */}
      <div className="min-h-[70vh]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
