import { useRouteError } from "react-router-dom"
import React from 'react';


export default function ErrorNotFound() {
    const error: any = useRouteError();

    return (
        <div>
            <h1>Whoops!</h1>
            <h3>404</h3>
            <span>That's an error.</span>
            <span>The requested URL was not found.</span>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}