import { useState } from "react";
import "./App.css";
import Main from "./assets/components/Main";
import Navbar from "./assets/components/Navbar";
import Modal from "./assets/components/Modal";
import Middle from "./assets/components/Middle";
import Images from "./assets/components/Images";
import Footer from "./assets/components/Footer";

function App() {
  const [menu, setMenu] = useState(false);
  const submitShowMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="bg-gradient-to-b from-blue-900 to-black min-h-screen min-w-screen">
      <Navbar submitShowMenu={submitShowMenu} />
      <Modal menu={menu} />

      <Main />

      <Middle />
      <Images />
      <Footer/>
      
      <div><br /></div>
      <div><br /></div>
      <div><br /></div>
    </div>
  );
}

export default App;
