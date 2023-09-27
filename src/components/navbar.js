export function Navbar(props) {
    const theme = props.theme;

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
