import { Counter } from './components/Counter'
import { RepoList } from './components/RepoList'
import './styles/global.scss'


export function App() {
    return (<>
        <RepoList />
        <Counter />
    </>)
}