import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Paper, Typography, Divider, Container } from '@material-ui/core'
import loaded from '../../../actions/loaded'
import set_item from '../../../actions/set_item'
import set_page from '../../../actions/set_page'
import Loading from '../../ui/Loading'
import BackButton from '../../ui/GoBackButton'
import PostMeta from './PostDetailMeta2'

export const PostDetail = ({ match }) => {
    const item = useSelector(state => state.item)
    const isLoading = useSelector(state => state.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        // const url = 'http://127.0.0.1:4000/api/cars/'
        const url = `https://9abc209e1be6.ngrok.io/api/works/${match.params.id}`
        const fetchItems = async () => {
            const result = await axios(url)
            console.log(result.data)
            dispatch(set_page(result.data.type))
            dispatch(set_item(result.data))
            dispatch(loaded())
        }
        fetchItems()
    }, [match.params.id])

    return isLoading ? ( <Loading /> ) : (
        <Paper>
            <BackButton />
            <PostMeta item={item} />
        </Paper>
    )
}
export default PostDetail
