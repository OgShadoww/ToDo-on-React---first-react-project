import React, { useState } from "react";
import CreateTodo from "./component/FinishTodo";
import TodoList from "./component/TodoList";
import './style/App.scss'
import MyModal from "./UI/modal/MyModal";
import Form from "./component/Form"

function App() {

    let todo = [
      {title:"Landing page complete", description:"I must do landing page", date:"4 Apr 2022", id:1, isCompleted:false},
      {title:"Landing page complete", description:"I must do landing page", date:"4 Apr 2022", id:2},
      {title:"Landing page complete", description:"I must do landing page", date:"4 Apr 2022", id:3, isCompleted:false},
    ]
    let [todos, setTodos] = useState([])

    let complete = (todo) => {
      todo.isCompleted = !todo.isCompleted  
      setTodos([...todos])
    }
    let create = (newTodo) => {
      setTodos([...todos, newTodo])
      setVisible(false)
    }
    let unshowPopup = () => {
      setVisible(false)
    }
    let addDate = (todo) => {
      todo.hasData = !todo.hasData
      console.log(todo.hasData)
    }

    let [visible, setVisible] = useState(false)

    return (
      <div className="App">
          <TodoList changeTodo={complete} todo={todos}/>
          <CreateTodo onClick={() => setVisible(true)}></CreateTodo>
          <MyModal visible={visible} setVisible={setVisible}>
            <Form hasData={todo.hasData} todo={todos} date={addDate} unshowPopup={unshowPopup} create={create}/>
          </MyModal>
      </div>
    );
}

export default App;
