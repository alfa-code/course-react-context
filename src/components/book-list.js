import React, { Component } from 'react';
import { ThemeContext, SignContext } from '../contexts/context';

export class BookList extends Component {
    static contextType = ThemeContext;

    render() {
        return (
            <SignContext.Consumer>
                {({ isSing }) => {

                    if (!isSing) {
                        return null;
                    }

                    return (
                        <ul className={`list ${this.context.theme}`}>
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
                }}
            </SignContext.Consumer>
        )
    }
}
