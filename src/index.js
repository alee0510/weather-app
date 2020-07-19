import React from 'react'
import ReactDOM from 'react-dom'

import Main from './main'
import './styles/index.scss'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import Reducers from './reducers'

const store = createStore(Reducers, {}, composeWithDevTools(applyMiddleware(ReduxThunk)))

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <Main/>
        </React.StrictMode>
    </Provider>
    , document.getElementById('root')
)