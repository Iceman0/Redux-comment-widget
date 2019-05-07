import React from 'react';
import {getDateComment, validateComment} from "../utils";

const AddComment = (props) => {
    const {handleAuthor, handleComment, addComment} = props;

    return (
        <form onSubmit={
            (ev) => {
                ev.preventDefault();
                if (validateComment(props)) {
                    let comment = {
                        id: '_' + Math.random().toString(36).substr(2, 9),
                        author: props.author,
                        comment: props.comment,
                        date: getDateComment()
                    };
                    addComment(comment);
                }
            }
        }>
            <p>
                <input
                    type="text"
                    name="comment"
                    value={props.comment}
                    placeholder={"Комментарий"}
                    onChange={(ev) => {
                        handleComment(ev);
                    }}
                />
                <input
                    type="text"
                    name="author"
                    value={props.author}
                    placeholder={"Автор"}
                    onChange={(ev) => {
                        handleAuthor(ev);
                    }}
                />
                <button type="submit">Добавить комментарий</button>
            </p>
        </form>
    )
};

export default AddComment;