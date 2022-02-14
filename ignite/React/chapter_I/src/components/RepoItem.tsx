import React from 'react';

interface RepoItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}



export function RepoItem(props: RepoItemProps) {
    return (
        <li>
            <strong>{props.repository?.name ?? 'Default'}</strong>
            <p>{props.repository?.description ?? ''}</p>
            <a href={props.repository?.html_url ?? 'https://google.com'} target="_blank">
                Acessar repositorio
            </a>
        </li>
    )
}