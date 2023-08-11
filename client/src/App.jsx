import { Outlet } from "react-router-dom";
import Nav from "./pages/Nav";
// import { Link } from "react-router-dom";
// import {SiBandlab} from "react-icons/si";

export default function App(){
  return(
    <>
   <Nav  className="fixed"/>
    <Outlet/>
    <footer className="foot ">&copy; 2023 15ild_</footer>
  </>
  )
}