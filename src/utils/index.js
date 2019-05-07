export const getDateComment = () => {
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

export const validateComment = (props) => {
    if (props.author !== "" && props.comment !== "") {
        return true;
    } else {
        alert("Введите все данные (комментарий и автор)");
    }
};
