import { useRef, useState } from 'react';
import './App.css';
import { Header, TodoEditor, TodoList } from './component';
import './css/commons.css';


// const mockTodo = [];
const mockTodo = [
  {
    id : 0,
    isDone : false,
    content : "React 공부하기",
    createDate : new Date().getTime(),
  },
  {
    id : 1,
    isDone : false,
    content : "빨래 널기",
    createDate : new Date().getTime(),
  },
  {
    id : 2,
    isDone : false,
    content : "책 읽기",
    createDate : new Date().getTime(),
  }, 
];

function App() {
  const idRef = useRef(3);
  const [todo, setTodo] = useState(mockTodo);

  //새로운 할일 데이터 생성(맨 앞에 새로운 아이템추가)
  const onCreate = (content) => {
    const newItem = {
      id : idRef.current,
      content, // content(속성명) : content(받아온 값),  임
      isDone : false,
      createDate : new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };

  //아이템 수정 기능
  const onUpdate = (targetId) => {
    setTodo(
      todo.map((it) => it.id === targetId ? {...it, isDone : !it.isDone,}: it )
    );
  };

  //아이템 삭제 하기
  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId ));
  };


  return (
    <div className="App">
      <section>
        <Header />
      </section>
      <section>
        <TodoEditor onCreate={onCreate} />
      </section>
      <section>
        <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
      </section>
    </div>
  );
}

export default App;
