import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useToken from "./hooks/useToken";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import { useSelector } from "react-redux";

function App() {
  const [token] = useToken();
  const { modal } = useSelector((state) => state.modal);
  return (
    <>
      <BrowserRouter>
        {token && token.data.token && <Navbar></Navbar>}
        {modal && <Modal></Modal>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth></Auth>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
