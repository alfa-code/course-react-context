import React, { Component } from 'react';

export class BookList extends Component {
    render() {
        return (
            <ul className={ `list` }>
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
