import 'styled-components';

// estamos atribuindo a nossa propria tipagem no styled-components

declare module 'styled-components' {
    // estou criando aqui uma tipagem
    export interface DefaultTheme {
        title: string;
    
        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
    
            white: string;
            black: string;
            gray: string;
    
            success: string;
            info: string;
            warning: string;
        },
    };
}