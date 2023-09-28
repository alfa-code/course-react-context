import React from 'react';
import { ThemeContext } from '../contexts/context';

export function Title() {
    return (
        <ThemeContext.Consumer>
            {(upperThemeContext) => {
                return (
                    <ThemeContext.Provider value={{ theme: upperThemeContext.theme === 'light' ? 'dark' : 'light' }}>
                        <ThemeContext.Consumer>
                            {(themeContext) => (
                                <h1 className={themeContext.theme}>
                                    Book List
                                </h1>
                            )}
                        </ThemeContext.Consumer>
                    </ThemeContext.Provider>
                )
            }}
        </ThemeContext.Consumer>
    )
}
