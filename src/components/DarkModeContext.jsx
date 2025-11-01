import { createContext, useState, useEffect } from "react";

const DarkModeContext = createContext();

function DarkModeProvider(props){

    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
      //get localstorage;
      const value = localStorage.getItem("dark-mode");
      if(value) {
        setDarkMode(JSON.parse(value));
      }

    }, []);
    
    const toggleDarkMode = () => {
      const newDark = !darkMode;
        setDarkMode(newDark);

        //setear localstorage
        localStorage.setItem("dark-mode", JSON.stringify(newDark));
    };
  return (
    <div>
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    </div>
  )
}

export {DarkModeContext, DarkModeProvider};