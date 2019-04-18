import './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import CommentApp from './containers/app';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import comments from './reducers';

const initialState = {};

const store = createStore(comments, initialState);

ReactDOM.render(
    <Provider store={store}>
        <CommentApp />
    </Provider>,
    document.querySelector('#app')
);



