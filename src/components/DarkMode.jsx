import React from 'react'
import { useContext } from 'react';
import { DarkModeSwitch } from 'react-night-toggle';
import { DarkModeContext } from './DarkModeContext'


function DarkMode() {

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleClick = () => {
    toggleDarkMode();
  }

  return (
    <div>
      {/* <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"  onChange={handleClick}    checked={darkMode}/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div> */}
      <DarkModeSwitch
        checked={darkMode}
        onChange={handleClick}
        sunColor="orange" // optional, defaults to currentColor
        moonColor="white" // optional, defaults to currentColor
      />

    </div>
  )
}

export default DarkMode;