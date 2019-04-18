export function addComment(comment) {
    return {
        type: 'ADD_COMMENT',
        comment
    }
}

export function deleteComment(id) {
    return {
        type: 'DELETE_COMMENT',
        id
    }
}

export function getComment() {
    return {
        type: 'GET_COMMENT'
    }
}

export function handleAuthor(ev) {
    const value = ev.target.value;
    return {
        type: 'CHANGE_AUTHOR',
        newVal: value,
    }
}

export function handleComment(ev) {
    const value = ev.target.value;
    return {
        type: 'CHANGE_COMMENT',
        newVal: value
    }
}