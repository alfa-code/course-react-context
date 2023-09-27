import React, { Component } from 'react';

export class BookList extends Component {
    render() {
        const theme = this.props.theme;

        return (
            <ul className={ `list ${theme}` }>
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
