import { useState, useEffect } from 'react';
import '../styles/repolist.scss'
import { RepoItem } from './RepoItem';

interface Repo {
    name: string;
    description: string;
    html_url: string;
}

export function RepoList() {
    const [repos, setRepos] = useState<Repo[]>([]);



    useEffect(() => {
        fetch('https://api.github.com/users/Gabriel0109/repos')
            .then(response => response.json())
            .then(data => setRepos(data))

    }, [])

    return (
        <section className='repo-list'>
            <h1>Lista de repositorios</h1>
            <ul>
                {repos.map(repo => {
                    return <RepoItem key={repo.name} repository={repo} />
                })}

            </ul>
        </section>
    )
}
