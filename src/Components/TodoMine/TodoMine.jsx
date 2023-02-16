import React, { Component } from "react";
import "./TodoMine.scss";
import { FcApproval, FcFullTrash, FcClock } from "react-icons/fc";
import axios from "axios";
import swal from "sweetalert";

class TodoMine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      input: {
        title: "",
        status: "pending",
      },
      pending: [],
      complete: [],
      cancel: [],
    };
  }

  // load data from api
  componentDidMount = () => {
    axios
      .get("http://localhost:5050/todos")
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          complete: [...res.data.filter((data) => data.status === "complete")],
          pending: [...res.data.filter((data) => data.status === "pending")],
          cancel: [...res.data.filter((data) => data.status === "cancel")],
        }));
      })
      .catch();
  };

  //onchange
  handleChange = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      input: {
        ...prevState.input,
        title: e.target.value,
      },
    }));
  };
  //submit from form
  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5050/todos", this.state.input)
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          todos: [...prevState.todos, this.state.input],
          input: {
            title: "",
            status: "pending",
          },
          pending: [...prevState.pending, res.data],
        }));
      })
      .catch();
  };

  approve = (id, status, title) => {
    axios
      .patch(`http://localhost:5050/todos/${id}`, {
        title: title,
        status: "complete",
      })
      .then((res) => {
        if (status === "pending" || status === "cancel") {
          this.setState((prevState) => ({
            ...prevState,
            pending: [...prevState.pending.filter((data) => data.id !== id)],
            cancel: [...prevState.cancel.filter((data) => data.id !== id)],
            complete: [...prevState.complete, res.data],
          }));
        }
      });
  };

  handleCancel = (id, status, title) => {
    swal({
      title: "Are you sure?",
      text: "Once cancel, you will again able to recover this imaginary file",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .patch(`http://localhost:5050/todos/${id}`, {
            title: title,
            status: "cancel",
          })
          .then((res) => {
            if (status === "complete" || status === "pending") {
              this.setState((prevState) => ({
                ...prevState,
                complete: [
                  ...prevState.complete.filter((data) => data.id !== id),
                ],
                pending: [
                  ...prevState.pending.filter((data) => data.id !== id),
                ],
                cancel: [...prevState.cancel, res.data],
              }));
            }
          });
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  handlePending = (id, status, title) => {
    axios
      .patch(`http://localhost:5050/todos/${id}`, {
        title: title,
        status: "pending",
      })
      .then((res) => {
        if (status === "complete" || status === "cancel") {
          this.setState((prevState) => ({
            ...prevState,
            complete: [...prevState.complete.filter((data) => data.id !== id)],
            cancel: [...prevState.cancel.filter((data) => data.id !== id)],
            pending: [...prevState.pending, res.data],
          }));
        }
      });
  };

  handleDelete = (id, status) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:5050/todos/${id}`)

          .then((res) => {
            if (status === "cancel") {
              this.setState((prevState) => ({
                ...prevState,
                cancel: [...prevState.cancel.filter((data) => data.id !== id)],
              }));
            }
          });
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  render() {
    const { input, pending, complete, cancel } = this.state;
    return (
      <>
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h1>Todo app</h1>
                  <hr />
                  <form
                    onSubmit={this.handleSubmit}
                    action=""
                    className="d-flex"
                  >
                    <input
                      onChange={this.handleChange}
                      value={input.title}
                      className="form-control"
                      type="text"
                    />
                    &nbsp;
                    <button type="submit" className="btn btn-primary">
                      Done
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center my-4">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h3>Panding</h3>
                  <hr />
                  {pending.map((item, index) => {
                    return (
                      <>
                        {item.status === "pending" && (
                          <li
                            key={index}
                            className="list-group-item"
                            style={{ backgroundColor: "yellow" }}
                          >
                            <div className="mamu d-flex align-items-center justify-content-between">
                              <span>{item.title}</span>
                              <div className="">
                                <button
                                  onClick={() =>
                                    this.approve(
                                      item.id,
                                      item.status,
                                      item.title
                                    )
                                  }
                                >
                                  <FcApproval />
                                </button>
                                <button
                                  onClick={() =>
                                    this.handleCancel(
                                      item.id,
                                      item.status,
                                      item.title
                                    )
                                  }
                                >
                                  <FcFullTrash />
                                </button>
                              </div>
                            </div>
                          </li>
                        )}
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h3>Complete</h3>
                  <hr />
                  {complete.map((item, index) => {
                    return (
                      <>
                        {item.status === "complete" && (
                          <li
                            key={index}
                            className="list-group-item"
                            style={{ backgroundColor: "green", color: "#fff" }}
                          >
                            <div className="mamu d-flex align-items-center justify-content-between">
                              <span>{item.title}</span>
                              <div className="">
                                <button
                                  onClick={() =>
                                    this.handlePending(
                                      item.id,
                                      item.status,
                                      item.title
                                    )
                                  }
                                >
                                  <FcClock />
                                </button>
                                <button
                                  onClick={() =>
                                    this.handleCancel(
                                      item.id,
                                      item.status,
                                      item.title
                                    )
                                  }
                                >
                                  <FcFullTrash />
                                </button>
                              </div>
                            </div>
                          </li>
                        )}
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h3>Cancel</h3>
                  <hr />
                  {cancel.map((item, index) => {
                    return (
                      <>
                        {item.status === "cancel" && (
                          <li
                            key={index}
                            className="list-group-item"
                            style={{ backgroundColor: "red", color: "#fff" }}
                          >
                            <div className="mamu d-flex align-items-center justify-content-between">
                              <span>{item.title}</span>
                              <div className="">
                                <button
                                  onClick={() =>
                                    this.approve(
                                      item.id,
                                      item.status,
                                      item.title
                                    )
                                  }
                                >
                                  <FcApproval />
                                </button>
                                <button
                                  onClick={() =>
                                    this.handlePending(
                                      item.id,
                                      item.status,
                                      item.title
                                    )
                                  }
                                >
                                  <FcClock />
                                </button>
                                <button
                                  onClick={() =>
                                    this.handleDelete(item.id, item.status)
                                  }
                                >
                                  <FcFullTrash />
                                </button>
                              </div>
                            </div>
                          </li>
                        )}
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TodoMine;
