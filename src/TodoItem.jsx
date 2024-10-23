import {useState} from "react";
//defining the todo component with todo,update,delete,toggeDone

const TodoItem=({todo,onUpdate,onDelete,onToggleDone})=>{
    const [isEditing,setIsEditing]=useState(false);

    const [newTile,setNewTitle]=useState(todo.title);

    const [newDescription,setNewDescription]=useState(todo.description);

    const handleUpdate=()=>{
        if(newTile.trim() && newDescription.trim()){
            onUpdate(todo.id,{title:newTile,description:newDescription});
            setIsEditing(false);
        }else{
            alert("title and Description required");
        }
    };

    return(
        <div style={{textDecoration:todo.done?"line-through":"none"}}>
            {isEditing?(
                <>
                    <input type="text" value={newTile} onChange={(e) => setNewTitle(e.target.value)} placeholder="Title" />

                    <input type="text" value={newDescription} onChange={(e)=> setNewDescription(e.target.value)} placeholder="Description"/>

                    <button onClick={handleUpdate}>Save</button>

                    <button onClick={()=>setIsEditing(false)}>Cancel</button>
                </>
                
            ):(
                <>
                    <h4>{todo.title}</h4>
                    <p>{todo.description}</p>

                    <button onClick={()=>setIsEditing(true)}>Edit</button>

                    <button onClick={()=>onDelete(todo.id)}>Delete</button>

                    <button onClick={()=>onToggleDone(todo.id)}>
                        {todo.done?"Undone":"Done"}
                    </button>

                </>
            )}
        </div>

    );


};

export default TodoItem;
