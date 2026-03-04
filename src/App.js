import React from "react";
import { DarkModeProvider } from "./components/DarkModeContext";
import Router from "./components/Router";



function App() {


  return (
    <>
      <DarkModeProvider>
        <Router/>
      </DarkModeProvider>
    </>

  );
}

export default App;
