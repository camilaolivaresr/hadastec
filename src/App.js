import React from "react";
import { DarkModeProvider } from "./components/DarkModeContext";
import Page from "./components/Page";



function App() {


  return (
    <>
      <DarkModeProvider>
        <Page />
      </DarkModeProvider>
    </>

  );
}

export default App;
