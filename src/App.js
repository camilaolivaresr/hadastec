import React from "react";
import { DarkModeProvider } from "./components/DarkModeContext";
import Home from "./components/Home";



function App() {


  return (
    <>
      <DarkModeProvider>
        <Home/>
      </DarkModeProvider>
    </>

  );
}

export default App;
