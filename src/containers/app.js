import React from 'react'
import { connect } from 'react-redux';
import AddComment from '../components/add-comment';
import CommentList from '../components/comment-list';
import { addComment,deleteComment,getComment,handleAuthor, handleComment } from "../actions/index"

const App = (props) => {
    const {
        comments,
        form,
        handleAuthor,
        handleComment,
        addComment,
        deleteComment
    } = props;
    return (
        <div className="App">
            <div className="form-box">
                <CommentList
                    commentList={comments}
                    deleteComment={deleteComment}
                />
                <AddComment
                    author={form.author}
                    comment={form.comment}
                    handleAuthor={handleAuthor}
                    handleComment={handleComment}
                    addComment={addComment}
                />
            </div>
        </div>
    )
};

// передача данных из store в App при помощи connect
const mapStateToProps = store => {
    return {
        comments: store.comments,
        form: store.form
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleAuthor: (ev) => dispatch(handleAuthor(ev)),
        handleComment: (ev) => dispatch(handleComment(ev)),
        addComment: (comment) => dispatch (addComment(comment)),
        deleteComment: (id) => dispatch(deleteComment(id)),
        getComment: () => dispatch(getComment())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);