import { useContext } from 'react';
import { ThemeContext } from '../contexts/context';

export function Navbar() {
    const theme = useContext(ThemeContext);
    return (
        <ul className={ `list ${theme}` }>
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
    )
}
