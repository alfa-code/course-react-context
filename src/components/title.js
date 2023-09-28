import React from 'react';
import { ThemeContext } from '../contexts/context';

export function Title() {
    return (
        <ThemeContext.Consumer>
            { (theme) => (
                    <h1 className={ theme }>
                        Book List
                    </h1>
            ) }
        </ThemeContext.Consumer>
    )
}
