import { useState } from 'react';
import './App.css';

const App = () => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState(["Task1", "Task2"]);
  
  const handleInput = () => {
    if (value) {
      setItems([...items, value])
      setValue("");
    }

  }
  const deleteItem = (a) => {

    let list = [...items].filter((i) => a !== i)
    setItems(list);
  }
 

  return (
    <div className="App" >
      <h1 style={{ color: "#111", backgroundColor: "" ,textAlign: "center"}}> Todo List</h1>
      {/* <hr style={{ width: "50%" }} /> */}
      <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <input
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ width: "50%", height: "40px", fontSize: "1rem", borderRadius: "10px 0 0 10px", outline: "none" }} />

        <button
          style={{ height: "45px", fontSize: "1rem", borderRadius: "0 10px 10px 0", outline: "none", backgroundColor: "#ff5252", color: "#fff" }}
          onClick={handleInput}>
          Add Task
        </button>
      </div>
      <div style={{ color: "blue" ,textAlign: "center"}}>
        <h2>Total Item: {items.length}</h2>
      </div>
      <div style={{ display: "flex",flexDirection:"column",alignItems:"center" }}>
        {
          items.map((item, i) =>
            <div
           
            key={i} 
            style={{ width: "50%",
             height: "40px", 
             fontSize: "1.3rem", 
             display: "flex", 
             justifyContent: "space-between", 
             textAlign: "center",
              alignItems:"center" ,
              backgroundColor:"grey",
              margin:"2px 0 0 0",
              padding:"3px",
              
            }}
             >
              <span>{i + 1}.</span>
              <span >{item}</span>
              <button onClick={() => deleteItem(item)}>Delete</button>
              <input type="checkbox" defaultChecked={false} ></input>
            </div>
          )
        }
      </div>


    </div>
  );
}

export default App;
