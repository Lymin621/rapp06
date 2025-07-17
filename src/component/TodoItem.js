import React from "react";

function TodoItem({id, content, isDone, createDate, onUpdate, onDelete}){
    //체크박스 체크 여부에 따라 상태 변경하기
    const onChangeCheckbox = () => {
        onUpdate(id);
    };

    //해당 엘리먼트 삭제하기
    const onClickDelete = () => {
        onDelete(id);
    };
    return(
        <React.Fragment>
            <div className = "TI_wrap">
                <input
                type = "checkbox"
                onChange={onChangeCheckbox}
                checked={isDone}
                />
                <span>{content}</span>
                <span>{new Date(createDate).toDateString()}</span>
                <button
                type = "button"
                className="TI_deleteBtn"
                onClick={onClickDelete}
                >삭제</button>
            </div>
        </React.Fragment>
    );
}

export default TodoItem;