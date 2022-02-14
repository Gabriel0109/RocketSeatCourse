import React from 'react';
import '../styles/repolist.scss'
import { RepoItem } from './RepoItem';
const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}
export function RepoList() {
    return (
        <section className='repo-list'>
            <h1>Lista de repositorios</h1>
            <ul>
                <RepoItem repository={repository} />
                <RepoItem repository={repository} />
                <RepoItem repository={repository} />
                <RepoItem repository={repository} />
            </ul>
        </section>
    )
}
