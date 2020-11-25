import { Switch, Route } from 'react-router-dom'
import PostList from '../posts/post_list/PostList'
import YearList from '../years/year_list/YearList'
import PostDetail from '../posts/post_detail/PostDetail'

export default function Content() {
    return (
    <Switch>
        <Route exact path='/works' component={PostList} />
        <Route exact path='/years' component={YearList} />
        <Route path='/works/:id' component={PostDetail}/>
    </Switch>
    )
}
