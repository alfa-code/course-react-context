import { Navbar } from './navbar';

export function Sidebar(props) {
    return (
        <aside className="block">
            <Navbar theme={ props.theme } />
        </aside>
    )
}
