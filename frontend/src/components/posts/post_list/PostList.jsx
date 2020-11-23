import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Container } from '@material-ui/core'
import loaded from '../../../actions/loaded'
import set_items from '../../../actions/set_items'
import set_page from '../../../actions/set_page'
import Loading from '../../ui/Loading'
import Post from './Post3'

const PostList = () => {
    const items = useSelector(state => state.items)
    const isLoading = useSelector(state => state.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        // const url = 'http://127.0.0.1:4000/api/cars/'
        const url = 'https://9abc209e1be6.ngrok.io/api/works/'
        const fetchItems = async () => {
            const result = await axios(url)
            console.log(result.data)
            dispatch(set_page('Все Работы'))
            dispatch(set_items(result.data))
            dispatch(loaded())
        }
        fetchItems()
    }, [])

    return isLoading ? ( <Loading /> ) : (
        <Box mt={2}>
            <Container>
                {items.map(
                    item => (
                        <Post key={item.url} item={item} />
                    )
                )}
            </Container>
        </Box>
    )
}

export default PostList