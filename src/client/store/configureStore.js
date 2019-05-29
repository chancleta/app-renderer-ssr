import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import axios from 'axios'

const axiosInstance = axios.create({}) // Create an authenticated custom axios config

function configureStoreProd(initialState) {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(thunk.withExtraArgument(axiosInstance))
    )
    return store
}

const configureStoreDev = initialState => {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(thunk.withExtraArgument(axiosInstance))
    )
    return store
}

export default configureStoreDev
