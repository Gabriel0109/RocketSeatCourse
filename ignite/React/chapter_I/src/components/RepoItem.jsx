import React from 'react';

export function RepoItem(props) {
    return (
        <li>
            <strong>{props.repository?.name ?? 'Default'}</strong>
            <p>{props.repository?.description ?? 'Description'}</p>
            <a href={props.repository?.html_url ?? 'https://google.com'} target="_blank">
                Acessar repositorio
            </a>
        </li>
    )
}