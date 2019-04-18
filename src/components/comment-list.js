import React from 'react';

const CommentList = (props) => {
    const {commentList, deleteComment} = props;
    return (
        <ol id="ol">
            {commentList.comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        <ul>
                            <li className="classLi">
                                {comment.comment}, {comment.author}, {comment.date}
                            </li>
                            <button
                                className="js-delete-comment"
                                title="удалить"
                                onClick={
                                    () => {
                                        deleteComment(comment.id)
                                    }
                                }
                            >Удалить
                            </button>
                        </ul>
                    </li>
                );
            })}
        </ol>
    )
};

export default CommentList;