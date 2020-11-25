import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Container } from '@material-ui/core'
import loaded from '../../../actions/loaded'
import set_years from '../../../actions/set_years'
import set_page from '../../../actions/set_page'
import Loading from '../../ui/Loading'
import Year from './Year'


const YearList = () => {
    const years = useSelector(state => state.years)
    const isLoading = useSelector(state => state.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        // const url = 'http://127.0.0.1:4000/api/cars/'
        const url = 'https://9abc209e1be6.ngrok.io/api/years/'
        const fetchItems = async () => {
            const result = await axios(url)
            console.log(result.data)
            dispatch(set_page('Годы'))
            dispatch(set_years(result.data))
            dispatch(loaded())
        }
        fetchItems()
    }, [])

    return isLoading ? ( <Loading /> ) : (
        <Box mt={2}>
            <Container>
                {years.map(
                    item => (
                        <Year key={item.year} item={item} />
                    )
                )}
            </Container>
        </Box>
    )
}

export default YearList
