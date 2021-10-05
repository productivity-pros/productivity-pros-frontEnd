import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyList.scss';

import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

class MyList extends React.Component {

  state = {
    tasks: [
      {
        name: "Add List",
        category: "todo"
      }
    ],
    editID: -1,
    editedID: 0,
    editedCat:''
  };

  onDragOver = ev => {
    ev.preventDefault();
  };

  onDragStart = (ev, name) => {
    ev.dataTransfer.setData("id", name);
  };

  onDrop = async (ev, cat) => {
    const id = ev.dataTransfer.getData("id");
    let list = {};
    this.state.tasks.forEach(task => {
      if (task.name == id) {
        task.category = cat;

        let obj = {
          name: task.name,
          category: cat,
          email: task.email,
          _id: task._id
        }
        list = obj;
      }
    });
    let listData = await axios.put(`${process.env.REACT_APP_SERVER}/updatelist`, list);
    this.setState({
      tasks: listData.data,
      editable: true
    });
  };

  startEdit = idx => {
    const input = document.getElementById(`input${idx}`);
    this.state.tasks.forEach((task, taskIdx) => {
      if (taskIdx == idx) {
        this.setState({
          editID: idx,
          editedID: task._id,
          editedCat: task.category
        })
      }
    })
  };
  
  handleKeyPressUpdate = async ev => {
    if ((ev.key == "Enter") && (ev.target.value != "")) {
      const { user } = this.props.auth0;
      let list = {
        name: ev.target.value,
        category: this.state.editedCat,
        email: user.email,
        _id: this.state.editedID
      }
      let listData = await axios.put(`${process.env.REACT_APP_SERVER}/updatelist`, list);
      this.setState({
        tasks: listData.data,
        editID: -1,
      });
    }
  };

  handleKeyPress = async ev => {
    if ((ev.key == "Enter") && (ev.target.value != "")) {
      const { user } = this.props.auth0;
      let list = {
        name: ev.target.value,
        category: "todo",
        email: user.email
      }
      let listData = await axios.post(`${process.env.REACT_APP_SERVER}/addlist`, list);
      // console.log(listData.data);
      this.setState({
        tasks: listData.data
      });
      console.log(this.state.tasks);
      ev.target.value = " ";
    }
  };

  componentDidMount = async () => {
    const { user } = this.props.auth0;
    let listsData = await axios.get(`${process.env.REACT_APP_SERVER}/getlists?email=${user.email}`);
    this.setState({
      tasks: listsData.data
    })
  }

  render() {
    var tasks = {
      todo: [],
      working: [],
      complete: [],
      trash: []
    };



    this.state.tasks.forEach((t, idx) => {
      tasks[t.category].push(
        <div
          className="item-container"
          key={t.name}
          draggable
          onDragStart={e => this.onDragStart(e, t.name)}
        >
          {this.state.editID !== idx && t.name}
          {this.state.editID === idx && <input
            className="input-in"
            type="text"
            defaultValue={t.name}
            id={`input${idx}`}
            onKeyPress={e => this.handleKeyPressUpdate(e)}
          />
          }
          <button onClick={e => this.startEdit(idx)}>edit</button>
        </div>
      );
    });



    return (
      <div>
        <div id='background-image'></div>
        <div class="container">
          <div
            className="drop-area"
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => this.onDrop(e, "todo")}
          >
            <h1>Todo</h1>
            {tasks.todo}
          </div>
          <div
            className="drop-area"
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => this.onDrop(e, "working")}
          >
            <h1>Working</h1>
            {tasks.working}
          </div>
          <div
            className="drop-area"
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => this.onDrop(e, "complete")}
          >
            <h1>Complete</h1>
            {tasks.complete}
          </div>
        </div>
        <div>
          <input
            onKeyPress={e => this.handleKeyPress(e)}
            className="input"
            type="text"
            placeholder="Task Name"
          />

          <div
            class="trash-drop"
            onDrop={e => this.onDrop(e, "trash")}
            onDragOver={e => this.onDragOver(e)}
          >
            Drop here to remove
          </div>
        </div>
      </div>
    );
  }
}




export default withAuth0(MyList);


