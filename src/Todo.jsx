import {useState} from "react";

import TodoItem from "./TodoItem";

const Todo=()=>{
    const [todos,setTodos]=useState([]);
    const [todoTitle,setTodoTitle]=useState("");
    const[todoDescription,setTodoDescription]=useState("")

    const [nextId, setNextId] = useState(1); // Counter for IDs

    const handleAddTodo=()=>{
        if(todoTitle.trim() && todoDescription.trim()){
            setTodos([
                ...todos,
                {
                //    id:Date.now(),
                   id: nextId,
                   title:todoTitle.trim(),
                   description: todoDescription.trim(),
                   done:false,
                
                },
            ]);
            
            setTodoTitle("");
            setTodoDescription("");
        }else{
            alert("title and Description required");

        }
    };

    const handleUpdateTodo=(id,updatedTodo)=> {
        setTodos(todos.map((todo)=>(todo.id===id?{...todo,...updatedTodo}:todo)));

    };

    const handleDeletedTodo=(id)=>{
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleToggleDone = (id) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
    };

    return(
        <div>
            <h1>Todo App</h1>
            
            <input type="text" value={todoTitle} onChange={(e)=>setTodoTitle(e.target.value)} placeholder="Title"/>

            <input type="text" value={todoDescription} onChange={(e)=>setTodoDescription(e.target.value)} placeholder="Description" />

            <button onClick={handleAddTodo}>Add TODO</button>

            <div>
                <h2>List OF todos :-</h2>
                
                {todos.length===0?
                (
                    <h3 style={{color:"red", fontWeight: 'bold'}}>NO TODO ADDED</h3>
                ):
                (
                    todos.map((todo)=>(
                        <TodoItem 
                            key={todo.id}
                            todo={todo}
                            onUpdate={handleUpdateTodo}
                            onDelete={handleDeletedTodo}
                            onToggleDone={handleToggleDone}
                        />
                    ))
                )
                }
            </div>
        </div>
    );


};
export default Todo; 