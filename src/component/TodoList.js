import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList({todo, onUpdate, onDelete}){
    const [search, setSearch] = useState("");
    const onChangeSerach = (e) => {
        setSearch(e.target.value);
    };

    //검색한 목록만 가져오기(검색어로 필터링 구현-대소문자 구분없이)
    const getSearchResult = () => {
        return search === "" ? todo : todo.filter((it) => it.content.toLowerCase().includes(search.toLowerCase()));
    };

    return (
        <div className="TL_wrap">
            <h3>Todo List <i className="material-icons" style={{fontSize:"26px"}}>playlist_add_check</i></h3><br />
            <input
            type="search"
            className="TL_SearchForm"
            value={search}
            onChange={onChangeSerach}
            placeholder="검색어를 입력하세요"
            />

            <div className="TL_listItem">
                {/* 
                key : 각각의 할 일 아이템 컴포넌트를 구분하기위해 사용하는 값이다.
                리액트에서는 반복적으로 나열되는 요소들은 반드시 key속성을 기술해야만 한다.
                이 key를 통해 컴포넌트를 수정, 삭제, 추가등을 진행할 때 어떤 컴포넌트를
                업데이트할지 결정한다.
                 */}
                {getSearchResult().map((it) => (
                    <TodoItem 
                    key={it.id}
                    {...it} 
                    onUpdate={onUpdate} 
                    onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    );
}

export default TodoList;