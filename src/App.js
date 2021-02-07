import React,{useState} from 'react';
import './App.css';
import ToDoList from "./ToDoList";

function App() {

  const[InputList,setInputList] = useState("") 
  const [Items, setItems] = useState([]);

  const itemEvent = (event) =>{
    setInputList(event.target.value)
  }

  const listOfItem = () =>{
    setItems((oldItems) => {
       return [...oldItems,InputList]
    })
    setInputList("");
  };

  const deleteItem = (id) => {
    console.log("Deleting");

    setItems((oldItems) => {
        return oldItems.filter((RemoveItem, index) => {
          return index !==id;
        });
    })  
  }

  return (
    <div className="main-div">
        <div className="center-div">
          <h1>ToDo List</h1>
          <input 
            type="text" 
            value = {InputList}
            placeholder="Write Task" 
            onChange={itemEvent}
            />
          <button onClick={listOfItem}> + </button>
          <ol>
            {/* <li>{InputList}</li> */}
            {Items.map( (ItemVal,index) => {
                return (
                    <ToDoList
                      key={index}
                      id={index} 
                      text={ItemVal}
                      onSelect={deleteItem}
                      />
                )
                })}
          </ol>           
        </div>
    </div>
  );
}

export default App;
