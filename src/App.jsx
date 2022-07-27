import React from "react";
import './App.css';
import ToDoList from './components/ToDoList';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <ToDoList />
        </header>
      </div>
    );
  }
}

export default App;
