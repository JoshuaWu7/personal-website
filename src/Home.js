import "./Home.css";
import { Outlet, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Footer />
    </div>
  );
}

export default Home;