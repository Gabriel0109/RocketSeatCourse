import { useState, useEffect } from 'react';
import '../styles/repolist.scss'
import { RepoItem } from './RepoItem';
// https://api.github.com/users/Gabriel0109/repos
export function RepoList() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/Gabriel0109/repos')
            .then(response => response.json())
            .then(data => setRepos(data))

    }, [])

    return (
        <section className='repo-list'>
            <h1>Lista de repositorios</h1>
            <ul>
                {repos.map(repos => {
                    return <RepoItem key={repos.name} repository={repos} />
                })}

            </ul>
        </section>
    )
}
