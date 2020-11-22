import { Switch, Route } from 'react-router-dom'
import PostList from '../posts/PostList'
import PostDetail from '../posts/PostDetail'


export default function Content() {
    return (
    <Switch>
        <Route exact path='/' component={PostList} />
        <Route path='/works/:id' component={PostDetail}/>
    </Switch>
    )
}
