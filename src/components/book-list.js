import React, { Component } from 'react';
import { ThemeContext } from '../contexts/context';

export class BookList extends Component {
    static contextType = ThemeContext;

    render() {
        return (
            <ul className={ `list ${this.context.theme}` }>
                <li>
                    The Little Prince
                </li>
                <li>
                    Winnie-the-Pooh
                </li>
                <li>
                    Alice's Adventures in Wonderland
                </li>
            </ul>
        )
    }
}
