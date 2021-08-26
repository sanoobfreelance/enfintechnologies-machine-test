import React, { Component } from "react";
import axios from "axios";
export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      due: "",
    };
  }
  textChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.task, this.state.due);
  };
  taskCreation = (e) => {
    e.preventDefault();
    const userid = 1673;
    let data = {
      user_id: userid,
      title: this.state.task,
      due_on: this.state.due,
      status: "pending",
    };
    console.log(data);

    const URL = " https://gorest.co.in/public/v1/todos";
    const token =
      "?access-token=f4a0fed34be56d4a18c74679a366b01eaa2bacfcab0af5fb875196644eb2dee3";
    axios.post(URL + token, data).then((response) => {
      setTimeout(() => {
        window.location.href = "/";
      }, 500);
    });
  };
  render() {
    return (
      <div>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Task</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Task"
              name="task"
              onChange={this.textChange}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Due on</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              name="due"
              placeholder="Due on"
              onChange={this.textChange}
            />
          </div>

          <button
            onClick={this.taskCreation}
            type="submit"
            class="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
