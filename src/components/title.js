import React from 'react';
import { ThemeContext } from '../contexts/context';

export function Title() {
    return (
        <ThemeContext.Consumer>
            { (themeContext) => (
                    <h1 className={ themeContext.theme }>
                        Book List
                    </h1>
            ) }
        </ThemeContext.Consumer>
    )
}
