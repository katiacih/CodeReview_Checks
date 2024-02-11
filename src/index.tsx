import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Routers } from './main/Router';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render( <React.StrictMode>
 <RouterProvider router={Routers}/>
</React.StrictMode>);
