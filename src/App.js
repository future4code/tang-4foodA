import React from 'react';
import Routes from "./Routes/Routes";
import GlobalState from './Global/GlobalState'
import Tema from "./Tema/Tema"


function App() {
  return (
    <div>
      <GlobalState>
          <Tema>
            <Routes/>
          </Tema>
        </GlobalState>
    </div>
  );
}

export default App;
