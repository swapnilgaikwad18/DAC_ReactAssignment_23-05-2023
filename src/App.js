/* I. Build a To Do – list REACT App it should be a input box it should perform
A. Add new to-do items to the list-users
B. Delete a to-do item from the list.*/
import { useState, useRef } from "react";

function App(){
  return (<div>
    <TodoApp/>
  </div>);
}

function TodoApp(){
  let inputRef = useRef();
  let [list, setlist] = useState(["Welcome to Todo App!"]); 
  
  let addTodoItem = () =>{
    let newItem = inputRef.current.value;
    setlist([newItem, ...list]);
     inputRef.current.value = "";
  };

  let deleteItem = (index) =>{
    list.splice(index,1);
    setlist([...list]);
  };
  return(
    <div className="d-flex flex-column bg-info align-items-center w-75 m-auto p-5 mt-5">
      <div className=" d-flex align-items-center">
        <div><input className="form-control" type="text" placeholder="Add something here...." ref={inputRef}></input></div>
        
        <button className="btn btn-primary mx-2" onClick={addTodoItem}>Add ToDo</button>
      </div>
      <div className="pt-4">
        {list.map((item, index) => (
          <div className="d-flex justify-content-between p-2">
            <p className="mx-2">{item}</p>
            <button className="btn btn-success mx-2" onClick={()=>deleteItem(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;