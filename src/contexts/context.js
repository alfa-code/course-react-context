import { createContext } from "react";

export const ThemeContext = createContext('light');

ThemeContext.displayName = 'ThemeContext';

export const SignContext = createContext({
    isSing: true,
    setSign: null,
});

SignContext.displayName = 'SignContext';
