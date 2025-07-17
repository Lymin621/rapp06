import { useRef, useState } from "react";

function TodoEditor({onCreate}){
    const inputRef = useRef();
    const [content, setContent] = useState("");
    const onChangeContent = (e) => {
        setContent(e.target.value);
    }; 

    //새로운 할일 입력 추가 생성
    const onSubmit = () => {
        if(!content){  //빈 입력 추가 불가 처리
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        
        //아이템 추가 후 입력 폼 초기화
        setContent(""); 
    };

    //입력창에서 엔터 시 onSubmit실행시키기
    const onKeyDown = (e) => {
        if(e.keyCode === 13 ){ //엔터키(13)
            onSubmit();
        }
    };

    return(
        <div className="TE_wrap">
            <h3>새로운 Todo 작성하기 <i className="fa fa-pencil" style={{fontSize: "20px"}}></i></h3>
            <input className="TE_Common_Style" 
            type="search"
            value={content}
            ref={inputRef}
            onChange={onChangeContent}
            onKeyDown = {onKeyDown}
            placeholder="새로운 Todo..."
            />
            <button className="TE_Common_Style"
             type="button"
             onClick={onSubmit}
            >추가</button>
        </div>
    );
}

export default TodoEditor;