import React from 'react';

const AddComment = (props) => {
    const {handleAuthor, handleComment, addComment} = props;

    const getDateComment = () => {
        let time = new Date().toLocaleString("ru", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        });

        return time;
    };

    const validateComment = () => {
        if (props.author !== "" && props.comment !== "") {
            return true;
        } else {
            alert("Введите все данные (комментарий и автор)");
        }
    };

    return (
        <form onSubmit={
            (ev) => {
                if (validateComment()) {
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