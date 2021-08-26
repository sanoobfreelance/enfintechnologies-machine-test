import React, { Component } from "react";
import axios from "axios";
export default class EditTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      due: "",
      status: "",
    };
  }
  textChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.task, this.state.due);
  };
  check = (e) => {
    console.log(e);
    this.setState({ status: e });
  };
  taskEdit = (e) => {
    e.preventDefault();
    const userid = 1673;
    let data = {
      user_id: userid,
      title: this.state.task,
      due_on: this.state.due,
      status: this.state.status,
    };
    console.log(data);

    const URL = " https://gorest.co.in/public/v1/todos/";

    const token =
      "?access-token=f4a0fed34be56d4a18c74679a366b01eaa2bacfcab0af5fb875196644eb2dee3";
    console.log(URL + this.props.id + token);
    axios.put(URL + this.props.id + token, data).then((response) => {
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
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="pending"
              id="exampleRadios1"
              value="option1"
              onClick={() => this.check("pending")}
            />
            <label class="form-check-label" for="exampleRadios1">
              pending
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="completed"
              onClick={() => this.check("completed")}
              id="exampleRadios2"
              value="option2"
            />
            <label class="form-check-label" for="exampleRadios2">
              completed
            </label>
          </div>
          <button onClick={this.taskEdit} type="submit" class="btn btn-primary">
            Edit
          </button>
        </form>
      </div>
    );
  }
}
