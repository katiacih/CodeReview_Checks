import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Routers } from './main/Router';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './presentation/styles/theme';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render( <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={Routers}/>
    </ThemeProvider>
</React.StrictMode>);
