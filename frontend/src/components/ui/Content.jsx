import { Switch, Route } from 'react-router-dom'
import PostList from '../posts/post_list/PostList'
import PostDetail from '../posts/post_detail/PostDetail2'


export default function Content() {
    return (
    <Switch>
        <Route exact path='/works' component={PostList} />
        <Route path='/works/:id' component={PostDetail}/>
    </Switch>
    )
}
