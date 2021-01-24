import React from "react";
import Routes from "./Routes/Routes";
import GlobalState from "./Global/GlobalState";
import Tema from "./Tema/Tema";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <GlobalState>
        <Tema>
          <Routes />
          <ToastContainer autoClose={3000} />
        </Tema>
      </GlobalState>
    </div>
  );
}

export default App;
