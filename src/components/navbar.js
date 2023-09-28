import { useContext } from 'react';
import { ThemeContext } from '../contexts/context';

export function Navbar() {
    const themeContext = useContext(ThemeContext);
    return (
        <div>
            <ul className={ `list ${themeContext.theme}` }>
                <li>
                    Home
                </li>
                <li>
                    Info
                </li>
                <li>
                    Contact
                </li>
            </ul>
            <button onClick={ () => { themeContext.setTheme(themeContext.theme === 'light' ? 'dark' : 'light'); } }>
                Change theme
            </button>
        </div>
    )
}
