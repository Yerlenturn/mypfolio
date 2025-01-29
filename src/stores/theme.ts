import { writable } from 'svelte/store';

const initialTheme = typeof document !== 'undefined' 
    ? document.documentElement.getAttribute('data-theme') || 'light'
    : 'light';

export const theme = writable(initialTheme);