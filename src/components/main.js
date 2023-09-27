import { Title } from './title';
import { BookList } from './book-list';

export function Main(props) {
    return (
        <main className="block">
            <Title />
            <BookList theme={ props.theme } />
        </main>
    )
}
