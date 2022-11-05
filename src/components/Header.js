import React from "react";

const Header = ({ hadleToggleDarkMode }) => {
    return (
        <div className="header">
            <h1>Notes</h1>
            <button 
                onClick={() => 
                    hadleToggleDarkMode(
                        (previousDarkMode) => !previousDarkMode
                    )
                }
                className='save'
            >
                Toggle mode
            </button>
        </div>
    )
}

export default Header;