import { combineReducers } from 'redux'

const initialState = {
    comments : [],
    author: '',
    comment: ''
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_AUTHOR' :
            return {
                ...state, author: action.newVal
            };
        case 'CHANGE_COMMENT' :
            return {
                ...state, comment: action.newVal
            };

        default:
            return {
                state, comment: "", author: ""
            };

    }
};

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_COMMENTS':
            return state;
        case 'ADD_COMMENT':
            const allComments = [...state.comments, action.comment];
            return { ...state,comments:allComments};
        case 'DELETE_COMMENT':
            const updateList = {
                comments: state.comments.filter(comment => comment.id !== action.id)
            };
            localStorage.setItem('content', JSON.stringify(updateList.comments));
            return updateList;
        default:
            let savedContent = JSON.parse(localStorage.getItem("content")) || [];
            return { ...state,comments:savedContent};

    }
};

const rootReducer = combineReducers({
    comments: commentsReducer,
    form: formReducer
});

export default rootReducer;