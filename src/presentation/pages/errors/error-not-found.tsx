import { useRouteError } from "react-router-dom"
import React from 'react';


export default function ErrorNotFound() {
    const error: any = useRouteError();
    const status: string = error?.statusText as unknown as string || '500';
    const message: string = error?.message  as unknown as string  || 'Erro!';

    return (
        <div>
            <h1>Whoops!</h1>
            <h3>404</h3>
            <span>That's an error.</span>
            <span>The requested URL was not found.</span>
            <p>{status}</p>
            <p><i>{message}</i></p>
        </div>
    )
}