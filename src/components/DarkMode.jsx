import { useContext } from 'react';
import { DarkModeContext } from './DarkModeContext'
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function DarkMode() {

    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    const handleClick = () => {
        toggleDarkMode();
    }

    return (
        <div>
            <DarkModeSwitch
            //  style={{ marginBottom: '1rem' }}
             checked={darkMode}
             onChange={handleClick}
             size={30}
             sunColor={{color: '#495057'}}
            />
            {/* <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={handleClick} />
            </div> */}
        </div>
    )
}

export default DarkMode;