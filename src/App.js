import React, { useState } from "react";
import CreateTodo from "./component/CreateTodo";
import QuestList from "./component/QuestList";
import './style/App.css'
import MyButton from "./UI/button/MyButton";
import MyModal from "./UI/modal/MyModal";

function App() {
  let [todo, setTodo] = useState([

  ])
  let [visible, setVisible] = useState(false)

  let create = (newTodo) => {
    setTodo([...todo, newTodo])
    setVisible(false)
  }

  let [status, setStatus] = useState(false)

  return (
    <div className="App">
      <MyButton onClick={e => setVisible(true)}>
        Open
      </MyButton>
      <MyModal visible={visible} setVisible={setVisible}>
        <CreateTodo create={create}/>
      </MyModal>
      <QuestList status={status} setStatus={setStatus} quest={todo}/>
    </div>
  );
}

export default App;
