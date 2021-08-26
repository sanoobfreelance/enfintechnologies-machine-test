import React, { useState, useEffect } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import EditIcon from "@material-ui/icons/Edit";
import EditTask from "./EditTask";
// const task_status = {
//   1: { title: "pending", color: "light" },
//   2: { title: "complete", color: "dark" },
// };
const Dashboard = () => {
  const [data, setData] = useState();
  const [id, setId] = useState();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    apiTest();
  }, []);
  const deleteTask = (todoId) => {
    const URL = "https://gorest.co.in/public/v1/todos/";
    const token =
      "?access-token=f4a0fed34be56d4a18c74679a366b01eaa2bacfcab0af5fb875196644eb2dee3";
    console.log({ id: todoId });
    axios.delete(URL + todoId + token).then((response) => {
      console.log({ Delete: response });

      setTimeout(() => {
        window.location.href = "/";
      }, 500);
    });
  };

  const OpenEditDialog = (id) => {
    setOpen(true);
    console.log(id);
    setId(id);
  };
  const apiTest = () => {
    const URL = "https://gorest.co.in/public/v1/users/1673/todos";
    const token =
      "?access-token=f4a0fed34be56d4a18c74679a366b01eaa2bacfcab0af5fb875196644eb2dee3";
    console.log(URL + token);
    axios.get(URL + token).then(
      (response) => {
        console.log({ from: response });
        let responseData = response.data.data;
        console.log({ CCC: responseData });
        setData(responseData);
      },
      (error) => {
        // console.log({ error });
      }
    );
  };

  return (
    <>
      {console.log({ Data: data?.data?.data })}

      <h1>Todo App</h1>
      <a href="/creation">
        <button type="button" class="btn btn-primary">
          Create Task
        </button>
      </a>

      <table className="table table-striped ">
        <thead>
          <tr>
            <th scope="col">Task id</th>
            <th scope="col">Task</th>

            <th scope="col">Due on</th>
            <th scope="col">Status </th>
            <th scope="col"></th>
          </tr>
        </thead>

        {data?.map((item, i) => {
          return (
            <tbody>
              <tr>
                <th scope="row">{item.id}</th>
                <td> {item.title}</td>
                <td>{item.due_on}</td> <td> {item.status}</td>{" "}
                <td>
                  {" "}
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Delete Task"
                  >
                    <DeleteIcon onClick={() => deleteTask(item.id)} />
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Edit"
                  >
                    <EditIcon onClick={() => OpenEditDialog(item.id)} />
                  </button>
                </td>
                <td></td>
              </tr>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">Edit task</DialogTitle>
                <DialogContent>
                  <EditTask id={item.id} />
                </DialogContent>
              </Dialog>
            </tbody>
          );
        })}
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#">
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </table>
    </>
  );
};
export default Dashboard;
